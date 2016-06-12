package de.fhm.akfo.shop.article.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import de.fhm.akfo.shop.article.entity.Article;

public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {

}
