package de.fhm.akfo.shop.article.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.hateoas.config.EnableEntityLinks;
import org.springframework.hateoas.config.EnableHypermediaSupport;
import org.springframework.stereotype.Component;

import de.fhm.akfo.shop.article.rest.impl.ArticleLoginFilter;
import de.fhm.akfo.shop.article.rest.impl.ArticleResource;

@Component
@ApplicationPath("/")
@EnableHypermediaSupport(type = EnableHypermediaSupport.HypermediaType.HAL)
@EnableEntityLinks
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(ArticleResource.class);
        register(ArticleLoginFilter.class);
    }
    
    @GET
    @Path("/ping")
    public Response ping() {
    	return Response.ok("pong").build();
    }

}
