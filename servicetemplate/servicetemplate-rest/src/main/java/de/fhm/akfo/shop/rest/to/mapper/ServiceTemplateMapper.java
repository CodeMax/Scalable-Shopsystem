package de.fhm.akfo.shop.rest.to.mapper;

import de.fhm.akfo.shop.rest.impl.ServiceTemplateResource;
import de.fhm.akfo.shop.rest.to.ServiceTemplateTo;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;

/**
 * Mapper fuer das Datentransportobjekt {@link ServiceTemplateDto} auf {@link ServiceTemplateTo}
 * Entitaet und umgekehrt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateMapper extends JaxRsResourceMapperSupport<ServiceTemplateDto, ServiceTemplateTo> {

    public ServiceTemplateMapper() {
        super(ServiceTemplateResource.class, ServiceTemplateTo.class);
    }

    @Override
    public ServiceTemplateTo toResource(ServiceTemplateDto dto) {
    	ServiceTemplateTo resourceLinks = createResourceWithId(dto.getId(), dto);
		ServiceTemplateTo to = ServiceTemplateToDtoMapper.INSTANCE.dtoToTo(dto);
		to.add(resourceLinks.getLinks());
        return to;
    }

}