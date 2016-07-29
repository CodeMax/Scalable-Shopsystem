package de.hm.shop.article.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.commons.lang3.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.hm.shop.article.dao.entity.ArticleEntity;
import de.hm.shop.article.dao.repo.ArticleRepository;
import de.hm.shop.article.service.api.ArticleService;
import de.hm.shop.article.service.api.bo.ArticleBo;
import de.hm.shop.article.service.api.exception.ArticleException;
import de.hm.shop.article.service.impl.mapper.ArticleBoEntityMapper;


/**
 * Implementierung von {@link ArticleService}.
 * @author Maximilian.Spelsberg
 */
@Service
@Transactional
public class ArticleServiceImpl implements ArticleService {

	private static final Logger LOG = LoggerFactory.getLogger(ArticleServiceImpl.class);

	@Inject
	private ArticleRepository articleRepository;

	@Inject
	private ArticleBoEntityMapper articleMapper;



	@Transactional(readOnly = true)
	public List<ArticleBo> getAll() {
		final List<ArticleBo> articleBos = new ArrayList<ArticleBo>();

		final Iterable<ArticleEntity> articleEntities = articleRepository.findAll();
		if (articleEntities != null) {
			for (final ArticleEntity articleEntity : articleEntities) {
				articleBos.add(articleMapper.mapEntityToBo(articleEntity));
			}
		}

		return articleBos;
	}



	@Transactional(readOnly = true)
	public ArticleBo getById(final long id) {
		final ArticleEntity articleEntity = articleRepository.findOne(id);
		return articleEntity != null ? articleMapper.mapEntityToBo(articleEntity) : null;
	}



	public ArticleBo save(final ArticleBo articleBo) throws ArticleException {
		Validate.notNull(articleBo);
		LOG.debug("Speichere Article mit Namen {}", articleBo.getArticleTitle());

		final ArticleEntity articleEntity = articleMapper.mapBoToEntity(articleBo);
		final ArticleEntity articleEntitySaved = articleRepository.save(articleEntity);

		return articleMapper.mapEntityToBo(articleEntitySaved);
	}



	public void delete(final Long id) {
		Validate.notNull(id);
		LOG.debug("Lösche Example mit Id {}", id);

		if (articleRepository.exists(id)) {
			articleRepository.delete(id);
		}
	}
}
