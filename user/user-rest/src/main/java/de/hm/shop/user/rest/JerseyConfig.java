package de.hm.shop.user.rest;

import javax.annotation.security.PermitAll;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import de.hm.shop.user.rest.exception.RuntimeExceptionHandler;
import de.hm.shop.user.rest.filter.UserLoginFilter;
import de.hm.shop.user.rest.resource.UserResource;

/**
 * StandardConfig für den Restservice
 * @author Maximilian.Spelsberg
 */
@Path("/")
@Component
public class JerseyConfig extends ResourceConfig {

	public JerseyConfig() {
		register(UserLoginFilter.class);
		registerResources();
		registerExceptionHandlers();
	}
	

	private void registerResources() {
		register(UserResource.class);
	}

	
	private void registerExceptionHandlers() {
		register(RuntimeExceptionHandler.class);
	}
	
	@GET
    @PermitAll
    @Path("/ping")
    public Response ping() {
    	return Response.ok("pong").build();
    }

}
