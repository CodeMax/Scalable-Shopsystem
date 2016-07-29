package de.hm.shop.article.dao.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import de.hm.shop.article.dao.entity.ArticleEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface ArticleRepository extends PagingAndSortingRepository<ArticleEntity, Long> {

}
