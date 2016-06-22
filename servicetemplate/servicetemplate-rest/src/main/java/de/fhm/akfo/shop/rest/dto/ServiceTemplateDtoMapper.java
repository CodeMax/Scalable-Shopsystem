package de.fhm.akfo.shop.rest.dto;

import de.fhm.akfo.shop.rest.impl.ServiceTemplateResource;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;

/**
 * Mapper fuer das Datentransportobjekt {@link ServiceTemplateDto} auf {@link ServiceTemplate}
 * Entitaet und umgekehrt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateDtoMapper extends JaxRsResourceMapperSupport<ServiceTemplateDto, ServiceTemplateTO> {

    public ServiceTemplateDtoMapper() {
        super(ServiceTemplateResource.class, ServiceTemplateTO.class);
    }

    @Override
    public ServiceTemplateTO toResource(ServiceTemplateDto dto) {
    	ServiceTemplateTO resource = createResourceWithId(dto.getServicetemplateId(), dto);
        resource.setName(dto.getName());
        resource.setServiceTemplateId(dto.getServicetemplateId());
        return resource;
    }

}
