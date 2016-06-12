package de.fhm.akfo.shop.authentication.rest.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.internal.util.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.jaxrs.JaxRsLinkBuilder;
import org.springframework.stereotype.Component;

import de.fhm.akfo.shop.authentication.rest.dto.AuthenticateTO;
import de.fhm.akfo.shop.authentication.service.api.AuthenticationService;
import de.fhm.akfo.shop.authentication.service.api.dto.AuthenticationDto;

@Component
@Path("/authentication")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ExposesResourceFor(AuthenticationDto.class)
public class AuthenticationResource {
	
	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(AuthenticationResource.class);

	private static final String AUTHENTICATION_SCHEME = "Basic";
	
	@Inject
	private AuthenticationService authenticationService;

	
	@Context 
	HttpHeaders headers;

    @GET
    public Response getAuthentificationToken() {
    	String authHeader = headers.getRequestHeader(HttpHeaders.AUTHORIZATION).get(0);
   		LOG.info("Für die Nutzerdaten {} wird ein Token ausgegeben.", authHeader);
       	
   		AuthenticationDto dto = decodeCredentials(authHeader);
   		
   		//TODO TEST-Output
   		dto.setId(123);
   		dto.setFirstname("John");
   		dto.setLastname("Doe");
   		ArrayList<String> roleList = new ArrayList<String>();
   		roleList.add("admin");
   		roleList.add("superadmin");
   		dto.setRoles(roleList);
   		
   		LOG.info("AuthenticationDto: " + dto.toString());
   		
    	String token = authenticationService.getAuthenticationToken(dto);
    	AuthenticateTO to = new AuthenticateTO(token);
    	
    	List<AuthenticateTO> servicetemplateTOList = new ArrayList<AuthenticateTO>();
    	servicetemplateTOList.add(to);
    	
	    Resources<AuthenticateTO> wrapped = new Resources<AuthenticateTO>(servicetemplateTOList);
	    wrapped.add(
	            JaxRsLinkBuilder.linkTo(AuthenticationResource.class).withSelfRel()
	    );
	    
    	LOG.info("Token: " + token);
    	
        return Response.ok(to).build();
    }

	public AuthenticationDto decodeCredentials(String credentials) {
		final String encodedUserPassword = credentials.replaceFirst(AUTHENTICATION_SCHEME + " ", "");
        
        //Decode username and password
        String usernameAndPassword = new String(Base64.decode(encodedUserPassword.getBytes()));;
        
        StringTokenizer tokenizer = new StringTokenizer(usernameAndPassword, ":");
        String username = tokenizer.nextToken();
        String password = tokenizer.nextToken();
        
        return new AuthenticationDto(username, password);
	}

}
