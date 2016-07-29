package de.hm.shop.user.integrationtest;

import static de.hm.shop.user.integrationtest.matcher.RegexMatcher.matchesRegex;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.logging.Logger;

import javax.inject.Inject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.glassfish.jersey.filter.LoggingFilter;
import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.hateoas.Link;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import de.hm.shop.user.Application;
import de.hm.shop.user.rest.dto.UserDtoList;
import de.hm.shop.user.rest.dto.UserDto;
import de.hm.shop.user.service.api.UserService;
import de.hm.shop.user.service.api.bo.UserBo;
import de.hm.shop.user.service.api.exception.UserException;



@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(Application.class)
@WebIntegrationTest("server.port=9000")
public class UserResourceTest {

	private static final String HOST = "http://localhost:9000";
	private static final Logger LOG = Logger.getLogger(UserResourceTest.class.getName());
	
	private final Client client = ClientBuilder.newClient().register(new LoggingFilter(LOG, true));

	@Inject
	private UserService userService;

	private UserBo userBo1;
	private String vaildAuthToken;


	@Before
	public void setUp() throws UserException {
		userBo1 = createAndSaveUserBo("Max");
		
		String issuer = "shopsystem";
        String subject = "authentication";
        long ttlMiS = 1800000;
   		Map<String, Object> credentials = new HashMap<String, Object>();
   		
   		LinkedHashMap<String, String> userRolesMap = new LinkedHashMap<String, String>();
   		ArrayList<LinkedHashMap<String, String>> roles = new ArrayList<LinkedHashMap<String, String>>();
   		
   		userRolesMap.put("role", "admin");
   		userRolesMap.put("role", "user");
   		roles.add(userRolesMap);
   		credentials.put("role", roles);
    	vaildAuthToken = new JWTTokenGenerator().createJWT("1", issuer, subject, ttlMiS, credentials);
	}



	@After
	public void cleanUp() {
		userService.delete(userBo1.getId());
	}



	@Test
	@Ignore
	public void testGetAll() throws UserException {
		final UserBo userBo2 = createAndSaveUserBo("Max");

		final Response result = client.target(HOST).path("user").request(MediaType.APPLICATION_JSON)
											.header("AUTHORIZATION", vaildAuthToken).get(Response.class);
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.OK.getStatusCode())));
		assertThat(result.getLocation(), is(nullValue()));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));

		final UserDtoList resultUsers = result.readEntity(UserDtoList.class);
		assertThat(resultUsers, is(notNullValue()));
		assertThat(resultUsers.getuserList(), is(notNullValue()));
		assertThat(resultUsers.getuserList(), hasSize(2));
		final Iterator<UserDto> usersIterator = resultUsers.getuserList().iterator();
		final UserDto userDto1 = usersIterator.next();
		final UserDto userDto2 = usersIterator.next();

		if (Objects.equals(userDto1.getId(), userBo1.getId())) {
			assertThat(userDto2.getId(), is(equalTo(userBo2.getId())));
			assertSelfLink(userDto2.getLinks(), userDto2.getId());
			assertSelfLink(userDto1.getLinks(), userDto1.getId());
		} else {
			assertThat(userDto1.getId(), is(equalTo(userBo2.getId())));
			assertThat(userDto2.getId(), is(equalTo(userBo1.getId())));
			assertSelfLink(userDto1.getLinks(), userDto2.getId());
			assertSelfLink(userDto2.getLinks(), userDto1.getId());
		}

		assertThat(resultUsers.getLinks(), is(notNullValue()));
		assertThat(resultUsers.getLinks(), hasSize(1));
		final Link resultUsersSelfLink = resultUsers.getLinks().iterator().next();
		assertThat(resultUsersSelfLink.getRel(), is(equalTo(Link.REL_SELF)));
		assertThat(resultUsersSelfLink.getHref(), is(equalTo(HOST + "/user")));
	}



	@Test
	public void testGetById() {
		final Response result = client.target(HOST).path("user/" + userBo1.getId())
				.request(MediaType.APPLICATION_XML).header("AUTHORIZATION", vaildAuthToken).get();
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.OK.getStatusCode())));
		assertThat(result.getLocation(), is(nullValue()));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));

		final UserDto resultUser = result.readEntity(UserDto.class);
		assertThat(resultUser, is(notNullValue()));
		assertThat(resultUser.getId(), is(equalTo(userBo1.getId())));
		assertSelfLink(resultUser.getLinks(), userBo1.getId());
	}



	@Test
	public void testGetById_NotFound() {
		final Response result = client.target(HOST).path("user/" + System.currentTimeMillis())
				.request(MediaType.APPLICATION_XML).header("AUTHORIZATION", vaildAuthToken).get();
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.NOT_FOUND.getStatusCode())));
		assertThat(result.getLocation(), is(nullValue()));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));
		assertThat(result.readEntity(String.class), is(equalTo(Status.NOT_FOUND.getReasonPhrase())));
	}



	@Test
	@Ignore
	public void testCreateUser() {
		final UserDto newUser = new UserDto();
		newUser.setFirstname("Max");
		newUser.setLastname("Spelsberg");
		newUser.setAddress("Dachauerstraße");
		newUser.setZipcode("80335");
		newUser.setCity("München");
		newUser.setCountry("Deutschland");
		newUser.setSupplierId(new Long(321));

		final Response result = client.target(HOST).path("user").request(MediaType.APPLICATION_XML)
				.header("AUTHORIZATION", vaildAuthToken).post(Entity.xml(newUser));
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.CREATED.getStatusCode())));
		assertThat(result.getLocation().toString(), matchesRegex(HOST + "/user/[0-9]*"));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));

		final UserDto resultUser = result.readEntity(UserDto.class);
		assertThat(resultUser, is(notNullValue()));
		assertThat(resultUser.getId(), is(notNullValue()));
		assertSelfLink(resultUser.getLinks(), result.getLocation().toString());

		userService.delete(resultUser.getId());
	}



	@Test
	public void testUpdatePerson() {
		final UserDto userDto = new UserDto();
		userDto.setId(userBo1.getId());
		userDto.setFirstname("Max");
		userDto.setLastname("Spelsberg");
		userDto.setAddress("Dachauerstraße");
		userDto.setZipcode("80335");
		userDto.setCity("München");
		userDto.setCountry("Deutschland");
		userDto.setSupplierId(new Long(321));

		final Response result = client.target(HOST).path("user").path(userBo1.getId().toString()).request(MediaType.APPLICATION_XML)
				.header("AUTHORIZATION", vaildAuthToken).put(Entity.xml(userDto));
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.OK.getStatusCode())));
		assertThat(result.getLocation(), is(nullValue()));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));

		final UserDto resultUser = result.readEntity(UserDto.class);
		assertThat(resultUser, is(notNullValue()));
		assertThat(resultUser.getId(), is(equalTo(userBo1.getId())));
		assertSelfLink(resultUser.getLinks(), userBo1.getId());
	}



	@Test
	public void testDeleteById() {
		final Response result = client.target(HOST).path("user/" + userBo1.getId())
				.request(MediaType.APPLICATION_XML).header("AUTHORIZATION", vaildAuthToken).delete();
		assertThat(result, is(notNullValue()));
		assertThat(result.getStatus(), is(equalTo(Status.NO_CONTENT.getStatusCode())));
		assertThat(result.getLocation(), is(nullValue()));
		assertThat(result.getLinks(), is(notNullValue()));
		assertThat(result.getLinks(), is(empty()));
	}



	private void assertSelfLink(final Collection<Link> links, final Long expectedId) {
		assertSelfLink(links, HOST + "/user/" + expectedId);
	}



	private void assertSelfLink(final Collection<Link> links, final String expectedUri) {
		assertThat(links, is(notNullValue()));
		assertThat(links, hasSize(1));
		final Link selfLink = links.iterator().next();
		assertThat(selfLink.getRel(), is(equalTo(Link.REL_SELF)));
		assertThat(selfLink.getHref(), is(equalTo(expectedUri)));
	}



	private UserBo createAndSaveUserBo(final String name) throws UserException {
		UserBo userBo = new UserBo();
		userBo.setId(new Long(123));
		userBo.setFirstname("Max");
		userBo.setLastname("Spelsberg");
		userBo.setAddress("Dachauerstraße");
		userBo.setPostcode("80335");
		userBo.setCity("München");
		userBo.setCountry("Deutschland");
		userBo.setSupplierId(new Long(321));
		return (userBo = userService.save(userBo));
	}

}