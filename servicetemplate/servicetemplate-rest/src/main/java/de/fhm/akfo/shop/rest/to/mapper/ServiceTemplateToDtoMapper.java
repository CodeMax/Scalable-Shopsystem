package de.fhm.akfo.shop.rest.to.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import de.fhm.akfo.shop.rest.to.ServiceTemplateTo;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class ServiceTemplateToDtoMapper {

	public static ServiceTemplateToDtoMapper INSTANCE = Mappers.getMapper( ServiceTemplateToDtoMapper.class );
	 
	@Mapping(source = "servicetemplateId", target = "id")
	public abstract ServiceTemplateDto toToDto(ServiceTemplateTo article);
	
	@Mapping(source = "id", target = "servicetemplateId")
	public abstract ServiceTemplateTo dtoToTo(ServiceTemplateDto article);
}
