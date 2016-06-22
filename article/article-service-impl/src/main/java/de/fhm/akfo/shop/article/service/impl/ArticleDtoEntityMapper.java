package de.fhm.akfo.shop.article.service.impl;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import de.fhm.akfo.shop.article.entity.Article;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;

@Mapper
public interface ArticleDtoEntityMapper {

	ArticleDtoEntityMapper INSTANCE = Mappers.getMapper( ArticleDtoEntityMapper.class );
	
	ArticleDto entityToDto(Article article);
	
    Article dtoToEntity(ArticleDto article);
}
