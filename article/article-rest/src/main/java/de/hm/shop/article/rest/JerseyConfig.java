package de.hm.shop.article.rest;

import javax.annotation.security.PermitAll;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import de.hm.shop.article.rest.exception.RuntimeExceptionHandler;
import de.hm.shop.article.rest.filter.ArticleLoginFilter;
import de.hm.shop.article.rest.resource.ArticleResource;

/**
 * StandardConfig für den Restservice
 * @author Maximilian.Spelsberg
 */
@Path("/")
@Component
public class JerseyConfig extends ResourceConfig {

	public JerseyConfig() {
		register(ArticleLoginFilter.class);
		registerResources();
		registerExceptionHandlers();
	}
	

	private void registerResources() {
		register(ArticleResource.class);
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
