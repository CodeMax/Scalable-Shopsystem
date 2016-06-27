package de.fhm.akfo.shop.article.rest.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.jaxrs.JaxRsLinkBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import de.fhm.akfo.shop.article.rest.to.ArticleTo;
import de.fhm.akfo.shop.article.rest.to.mapper.ArticleMapper;
import de.fhm.akfo.shop.article.rest.to.mapper.ArticleToDtoMapper;
import de.fhm.akfo.shop.article.service.api.ArticleService;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;
import de.fhm.akfo.shop.article.service.api.exception.ArticleValidationException;

@Component
@Path("/article")
@Produces(MediaType.APPLICATION_JSON)
@ExposesResourceFor(ArticleDto.class)
@CrossOrigin
public class ArticleResource {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(ArticleResource.class);

	@Inject
	private ArticleService articleService;

	@GET
	@RolesAllowed(value = { "admin" })
	public Response findAllResources() {
		LOG.info("Daten für find AllResources gefunden");

		List<ArticleDto> articleDtoList = articleService.getArticleList();
		Resources<ArticleTo> wrapped = null;
		
		if (articleDtoList != null) {
			List<ArticleTo> articleTOList = new ArrayList<ArticleTo>();
			for (ArticleDto dto : articleDtoList) {
				articleTOList.add(new ArticleMapper().toResource(dto));
			}

			wrapped = new Resources<ArticleTo>(articleTOList);
			wrapped.add(JaxRsLinkBuilder.linkTo(ArticleResource.class).withSelfRel());
		}
		return Response.ok(wrapped).build();
	}

	@GET
	@Path("{id}")
	@RolesAllowed(value = { "admin" })
	public Response findOne(@PathParam("id") Long id) {
		Resource<ArticleDto> resource = new Resource<ArticleDto>(articleService.getArticle(id));

		// Link selfRel = entityLinks.linkToSingleResource(ArticleTo.class,
		// resource.getId()).withSelfRel();
		// resource.add(selfRel);
		resource.add(JaxRsLinkBuilder.linkTo(ArticleResource.class).withSelfRel());

		return Response.ok(resource).build();
	}

	@POST
	@RolesAllowed(value = { "admin" })
	public Response saveArticle(ArticleTo stto) throws ArticleValidationException {
		Resource<ArticleDto> resource = new Resource<ArticleDto>(
				articleService.saveArticle(ArticleToDtoMapper.INSTANCE.toToDto(stto)));

		resource.add(JaxRsLinkBuilder.linkTo(ArticleResource.class).withSelfRel());

		return Response.ok(resource).build();
	}

	@PUT
	@RolesAllowed(value = { "admin" })
	public Response updateArticle(ArticleTo stto) throws ArticleValidationException {
		Resource<ArticleDto> resource = new Resource<ArticleDto>(
				articleService.updateArticle(ArticleToDtoMapper.INSTANCE.toToDto(stto)));

		resource.add(JaxRsLinkBuilder.linkTo(ArticleResource.class).withSelfRel());

		return Response.ok(resource).build();
	}
}
