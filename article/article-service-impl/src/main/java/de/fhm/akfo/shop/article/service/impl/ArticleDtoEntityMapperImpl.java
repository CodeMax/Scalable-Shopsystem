package de.fhm.akfo.shop.article.service.impl;

import de.fhm.akfo.shop.article.entity.Article;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2016-06-22T10:34:32+0200",
    comments = "version: 1.0.0.Final, compiler: javac, environment: Java 1.8.0_60 (Oracle Corporation)"
)
public class ArticleDtoEntityMapperImpl implements ArticleDtoEntityMapper {

    @Override
    public ArticleDto entityToDto(Article article) {
        if ( article == null ) {
            return null;
        }

        ArticleDto articleDto = new ArticleDto();

        articleDto.setId( article.getId() );
        articleDto.setArticleNumber( article.getArticleNumber() );
        articleDto.setArticleTitle( article.getArticleTitle() );
        articleDto.setArticleDescription( article.getArticleDescription() );
        articleDto.setArticleEAN( article.getArticleEAN() );
        articleDto.setArticlePrice( article.getArticlePrice() );
        articleDto.setArticleStock( article.getArticleStock() );
        articleDto.setSupplierId( article.getSupplierId() );

        return articleDto;
    }

    @Override
    public Article dtoToEntity(ArticleDto article) {
        if ( article == null ) {
            return null;
        }

        Article article_ = new Article();

        article_.setArticleNumber( article.getArticleNumber() );
        article_.setArticleTitle( article.getArticleTitle() );
        article_.setArticleDescription( article.getArticleDescription() );
        article_.setArticleEAN( article.getArticleEAN() );
        article_.setArticlePrice( article.getArticlePrice() );
        article_.setArticleStock( article.getArticleStock() );
        article_.setSupplierId( article.getSupplierId() );

        return article_;
    }
}
