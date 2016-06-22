package de.fhm.akfo.shop.article.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.fhm.akfo.shop.article.entity.Article;
import de.fhm.akfo.shop.article.repo.ArticleRepository;
import de.fhm.akfo.shop.article.service.api.ArticleService;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;
import de.fhm.akfo.shop.article.service.api.exception.ArticleValidationException;


/**
 * Implementierung des Business Service zur Erzeugung einer neuen 
 * bzw. zum Ueberschreiben eines bestehenden Article-Objekts.
 * 
 * @author Spelsberg.Maximilian
 */
@Service(value = "ArticleService")
@Transactional
@ExposesResourceFor(Article.class)
public class ArticleServiceImpl implements ArticleService {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(ArticleServiceImpl.class);

	
	/** Datenzugriffsschicht auf die Entitaet {@link Article}. */
    @Inject
	private ArticleRepository articleRepo;

	
	@Transactional(readOnly = true)
	public List<ArticleDto> getArticleList() {
		LOG.info("Aufruf der Methode getArticleList()");

		List<ArticleDto> listOfArticle = new ArrayList<ArticleDto>();

		Iterable<Article> articleList = articleRepo.findAll();
		
		for (Article article : articleList) {
			listOfArticle.add(ArticleDtoEntityMapper.INSTANCE.entityToDto(article));
		}

		return listOfArticle;
	}
	

	@Transactional(readOnly = true)
	public ArticleDto getArticle(long id) {
		LOG.info("Aufruf der Methode getArticle()");

		Article article = articleRepo.findOne(id);
		
		return ArticleDtoEntityMapper.INSTANCE.entityToDto(article);
	}

	
	public ArticleDto saveArticle(ArticleDto articleDto)
		throws ArticleValidationException {
		LOG.info(String.format("Aufruf der Methode changeArticle(%s)", articleDto));

		Article st = articleRepo.save(ArticleDtoEntityMapper.INSTANCE.dtoToEntity(articleDto)); 
		
		return ArticleDtoEntityMapper.INSTANCE.entityToDto(st);
	}


	@Override
	public ArticleDto updateArticle(ArticleDto articleDto) throws ArticleValidationException {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public ArticleDto deleteArticle(ArticleDto articleDto) {
		// TODO Auto-generated method stub
		return null;
	}
}
