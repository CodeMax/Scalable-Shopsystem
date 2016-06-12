package de.fhm.akfo.shop.authentication.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.hateoas.config.EnableEntityLinks;
import org.springframework.hateoas.config.EnableHypermediaSupport;
import org.springframework.stereotype.Component;

import de.fhm.akfo.shop.authentication.rest.impl.AuthenticationResource;

@Component
@ApplicationPath("/")
@EnableHypermediaSupport(type = EnableHypermediaSupport.HypermediaType.HAL)
@EnableEntityLinks
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(AuthenticationResource.class);
    }
    
    @GET
    @Path("/ping")
    public Response ping() {
    	return Response.ok("pong").build();
    }

}
