package de.fhm.akfo.shop.service.impl.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import de.fhm.akfo.shop.entity.ServiceTemplate;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;

@Mapper
public interface ServiceTemplateDtoEntityMapper {

	ServiceTemplateDtoEntityMapper INSTANCE = Mappers.getMapper( ServiceTemplateDtoEntityMapper.class );
	
	ServiceTemplateDto entityToDto(ServiceTemplate ServiceTemplate);
	
    ServiceTemplate dtoToEntity(ServiceTemplateDto ServiceTemplate);
}
