package de.fhm.akfo.shop.rest.to.mapper;

import de.fhm.akfo.shop.rest.to.ServiceTemplateTo;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2016-06-27T13:32:59+0200",
    comments = "version: 1.0.0.Final, compiler: javac, environment: Java 1.8.0_60 (Oracle Corporation)"
)
public class ServiceTemplateToDtoMapperImpl extends ServiceTemplateToDtoMapper {

    @Override
    public ServiceTemplateDto toToDto(ServiceTemplateTo article) {
        if ( article == null ) {
            return null;
        }

        ServiceTemplateDto serviceTemplateDto = new ServiceTemplateDto();

        serviceTemplateDto.setId( article.getServicetemplateId() );
        serviceTemplateDto.setName( article.getName() );

        return serviceTemplateDto;
    }

    @Override
    public ServiceTemplateTo dtoToTo(ServiceTemplateDto article) {
        if ( article == null ) {
            return null;
        }

        ServiceTemplateTo serviceTemplateTo = new ServiceTemplateTo();

        serviceTemplateTo.setServicetemplateId( article.getId() );
        serviceTemplateTo.setName( article.getName() );

        return serviceTemplateTo;
    }
}
