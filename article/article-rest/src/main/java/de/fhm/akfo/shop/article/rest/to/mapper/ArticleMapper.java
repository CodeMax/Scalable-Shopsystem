package de.fhm.akfo.shop.article.rest.to;

import de.fhm.akfo.shop.article.rest.impl.ArticleResource;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;

/**
 * Mapper fuer das Datentransportobjekt {@link ArticleDto} auf {@link ArticleTo}
 * Entitaet und umgekehrt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleDtoMapper extends JaxRsResourceMapperSupport<ArticleTo, ArticleTo> {

    public ArticleDtoMapper() {
        super(ArticleResource.class, ArticleTo.class);
    }

    @Override
    public ArticleTo toResource(ArticleTo dto) {
    	ArticleTo resourceWithId = createResourceWithId(dto.getArticleId(), dto);
        return resourceWithId;
    }

}