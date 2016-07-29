package de.hm.shop.user.rest.resource;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collection;

import javax.annotation.security.DenyAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Link;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import de.hm.shop.user.rest.dto.UserDto;
import de.hm.shop.user.rest.dto.UserDtoList;
import de.hm.shop.user.rest.dto.mapper.UserDtoBoMapper;
import de.hm.shop.user.service.api.UserService;
import de.hm.shop.user.service.api.bo.UserBo;
import de.hm.shop.user.service.api.exception.UserException;


@Component
@Path("user")
@ExposesResourceFor(UserDto.class)
@CrossOrigin
public class UserResource {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(UserResource.class);
	
	@Inject
	private UserService userService;

	@Inject
	private UserDtoBoMapper userMapper;

	@Context
	private UriInfo uriInfo;

	@Inject
	private EntityLinks entityLinks;



	@GET
	@DenyAll
	@RolesAllowed(value = { "user" })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response getAllUser() {
		LOG.info("Aufruf der getAllUser()-Methode");
		
		final Collection<UserBo> userBos = userService.getAll();
		final Collection<UserDto> userDtos = mapBosToDtos(userBos);

		for (final UserDto userDto : userDtos) {
			addSelfLink(userDto);
		}

		final UserDtoList userDtoList = new UserDtoList(userDtos,
				entityLinks.linkToCollectionResource(UserDto.class));
		return Response.ok(userDtoList).build();
	}


	@GET
	@Path("{id}")
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response getById(@PathParam("id") final Long id) {
		LOG.info("Aufruf der getById()-Methode mit der id: {}", id);
		
		Validate.notNull(id);

		final UserBo userBo = userService.getById(id);
		if (userBo != null) {
			final UserDto userDto = userMapper.mapBoToDto(userBo);
			return okResponseWithSelfLink(userDto);
		} else {
			return Response.status(Status.NOT_FOUND).entity(Status.NOT_FOUND.getReasonPhrase()).build();
		}
	}



	@POST
	@DenyAll
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response createNewUser(final UserDto userDto) {
		LOG.info("Aufruf der createNewUser()-Methode");
		
		Validate.notNull(userDto);
		Validate.validState(userDto.getId() == null);

		final UserDto userDtoSaved = saveImpl(userDto);
		final Link selfLink = addSelfLink(userDtoSaved);

		return Response.created(URI.create(selfLink.getHref())).entity(userDtoSaved).build();
	}



	@PUT
	@Path("{id}")
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response updateUser(@PathParam(value = "id") String id, final UserDto userDto) {
		LOG.info("Aufruf der updateUser()-Methode mit der id: {}", id);
		
		Validate.notNull(userDto);
		Validate.notNull(userDto.getId());

		if(Long.decode(id) != userDto.getId()){
			return Response.status(Status.BAD_REQUEST).build();
		}
		
		final UserDto userDtoSaved = saveImpl(userDto);
		return okResponseWithSelfLink(userDtoSaved);
	}



	@Path("{id}")
	@DELETE
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response deleteById(@PathParam("id") final Long id) {
		Validate.notNull(id);

		userService.delete(id);
		return Response.noContent().build();
	}



	private UserDto saveImpl(final UserDto userDto) {
		try {
			final UserBo userBo = userMapper.mapDtoToBo(userDto);
			final UserBo userBoSaved = userService.save(userBo);
			return userMapper.mapBoToDto(userBoSaved);
		} catch (final UserException e) {
			throw new WebApplicationException(e);
		}
	}



	private Collection<UserDto> mapBosToDtos(final Collection<UserBo> userBos) {
		final Collection<UserDto> userDtos = new ArrayList<>();
		if (CollectionUtils.isNotEmpty(userBos)) {
			for (final UserBo userBo : userBos) {
				userDtos.add(userMapper.mapBoToDto(userBo));
			}
		}
		return userDtos;
	}



	private Response okResponseWithSelfLink(final UserDto userDto) {
		addSelfLink(userDto);
		return Response.ok(userDto).build();
	}



	private Link addSelfLink(final UserDto userDto) {
		Validate.notNull(userDto);

		final Link selfLink = entityLinks.linkToSingleResource(userDto);
		userDto.getLinks().add(selfLink);

		return selfLink;
	}
}
