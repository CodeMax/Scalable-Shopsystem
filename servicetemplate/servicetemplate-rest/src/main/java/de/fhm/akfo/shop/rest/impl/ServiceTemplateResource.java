package de.fhm.akfo.shop.rest.impl;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.jaxrs.JaxRsLinkBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import de.fhm.akfo.shop.rest.to.ServiceTemplateTo;
import de.fhm.akfo.shop.rest.to.mapper.ServiceTemplateMapper;
import de.fhm.akfo.shop.service.api.ServiceTemplateService;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;
import de.fhm.akfo.shop.service.api.exception.ServiceTemplateValidationException;

@Component
@Path("/servicetemplate")
@Produces(MediaType.APPLICATION_JSON)
@ExposesResourceFor(ServiceTemplateDto.class)
@CrossOrigin
public class ServiceTemplateResource {
	
	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(ServiceTemplateResource.class);

	@Inject
	private ServiceTemplateService servicetemplateService;
	
    @GET
    @RolesAllowed(value = { "admin" })
    public Response findAllResources() {
    	LOG.info("Daten für find AllResources gefunden");
        
    	List<ServiceTemplateDto> servicetemplateDtoList = servicetemplateService.getServiceTemplateList();
    	
        List<ServiceTemplateTo> servicetemplateTOList = 
        			new ServiceTemplateMapper().toResources(servicetemplateDtoList);
        
        Resources<ServiceTemplateTo> wrapped = new Resources<ServiceTemplateTo>(servicetemplateTOList);
        wrapped.add(
                JaxRsLinkBuilder.linkTo(ServiceTemplateResource.class).withSelfRel()
        );

        return Response.ok(wrapped).build();
    }

    @GET
    @Path("{id}")
    public Response findOne(@PathParam("id") Long id) {
        Resource<ServiceTemplateDto> resource = new Resource<ServiceTemplateDto>(servicetemplateService.getServiceTemplate(id));
        resource.add(JaxRsLinkBuilder.linkTo(ServiceTemplateResource.class).withSelfRel());

        return Response.ok(resource).build();
    }

    @POST
    @RolesAllowed(value = { "admin" })
    public Response saveServiceTemplate(ServiceTemplateTo stto) throws ServiceTemplateValidationException {
        Resource<ServiceTemplateDto> resource = 
        		new Resource<ServiceTemplateDto>(servicetemplateService.saveServiceTemplate(new ServiceTemplateDto(0, stto.getName())));

        resource.add(JaxRsLinkBuilder.linkTo(ServiceTemplateResource.class).withSelfRel());

        return Response.ok(resource).build();
    }

}
