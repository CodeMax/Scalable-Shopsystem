package de.fhm.akfo.shop.article.rest.to.mapper;

import de.fhm.akfo.shop.article.rest.to.ArticleTo;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2016-06-22T10:34:33+0200",
    comments = "version: 1.1.0.Beta1, compiler: javac, environment: Java 1.8.0_60 (Oracle Corporation)"
)
public class ArticleToDtoMapperImpl extends ArticleToDtoMapper {

    @Override
    public ArticleDto toToDto(ArticleTo article) {
        if ( article == null ) {
            return null;
        }

        ArticleDto articleDto = new ArticleDto();

        articleDto.setId( article.getArticleId() );
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
    public ArticleTo dtoToTo(ArticleDto article) {
        if ( article == null ) {
            return null;
        }

        ArticleTo articleTo = new ArticleTo();

        articleTo.setArticleId( article.getId() );
        articleTo.setArticleNumber( article.getArticleNumber() );
        articleTo.setArticleTitle( article.getArticleTitle() );
        articleTo.setArticleDescription( article.getArticleDescription() );
        articleTo.setArticleEAN( article.getArticleEAN() );
        articleTo.setArticlePrice( article.getArticlePrice() );
        articleTo.setArticleStock( article.getArticleStock() );
        articleTo.setSupplierId( article.getSupplierId() );

        return articleTo;
    }
}
