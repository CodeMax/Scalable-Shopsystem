package de.fhm.akfo.shop.service.impl.mapper;

import de.fhm.akfo.shop.entity.ServiceTemplate;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2016-06-27T13:32:34+0200",
    comments = "version: 1.0.0.Final, compiler: javac, environment: Java 1.8.0_60 (Oracle Corporation)"
)
public class ServiceTemplateDtoEntityMapperImpl implements ServiceTemplateDtoEntityMapper {

    @Override
    public ServiceTemplateDto entityToDto(ServiceTemplate ServiceTemplate) {
        if ( ServiceTemplate == null ) {
            return null;
        }

        ServiceTemplateDto serviceTemplateDto = new ServiceTemplateDto();

        serviceTemplateDto.setName( ServiceTemplate.getName() );
        serviceTemplateDto.setId( ServiceTemplate.getId() );

        return serviceTemplateDto;
    }

    @Override
    public ServiceTemplate dtoToEntity(ServiceTemplateDto ServiceTemplate) {
        if ( ServiceTemplate == null ) {
            return null;
        }

        ServiceTemplate serviceTemplate = new ServiceTemplate();

        serviceTemplate.setName( ServiceTemplate.getName() );

        return serviceTemplate;
    }
}
