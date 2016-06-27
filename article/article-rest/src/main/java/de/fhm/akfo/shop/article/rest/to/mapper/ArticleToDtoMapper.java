package de.fhm.akfo.shop.article.rest.to.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import de.fhm.akfo.shop.article.rest.to.ArticleTo;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class ArticleToDtoMapper {

	public static ArticleToDtoMapper INSTANCE = Mappers.getMapper( ArticleToDtoMapper.class );
	 
	@Mapping(source = "articleId", target = "id")
	public abstract ArticleDto toToDto(ArticleTo article);
	
	@Mapping(source = "id", target = "articleId")
	public abstract ArticleTo dtoToTo(ArticleDto article);
}
