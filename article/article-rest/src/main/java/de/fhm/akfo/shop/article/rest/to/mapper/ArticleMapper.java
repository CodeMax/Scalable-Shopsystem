package de.fhm.akfo.shop.article.rest.to.mapper;

import de.fhm.akfo.shop.article.rest.impl.ArticleResource;
import de.fhm.akfo.shop.article.rest.to.ArticleTo;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;

/**
 * Mapper fuer das Datentransportobjekt {@link ArticleDto} auf {@link ArticleTo}
 * Entitaet und umgekehrt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleMapper extends JaxRsResourceMapperSupport<ArticleDto, ArticleTo> {

    public ArticleMapper() {
        super(ArticleResource.class, ArticleTo.class);
    }

    @Override
    public ArticleTo toResource(ArticleDto dto) {
    	ArticleTo resourceLinks = createResourceWithId(dto.getId(), dto);
		ArticleTo to = ArticleToDtoMapper.INSTANCE.dtoToTo(dto);
		to.add(resourceLinks.getLinks());
        return to;
    }

}