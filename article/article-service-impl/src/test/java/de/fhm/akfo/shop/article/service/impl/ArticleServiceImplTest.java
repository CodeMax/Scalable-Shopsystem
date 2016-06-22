package de.fhm.akfo.shop.article.service.impl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.util.Assert;

import de.fhm.akfo.shop.article.entity.Article;
import de.fhm.akfo.shop.article.repo.ArticleRepository;
import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;

@RunWith(MockitoJUnitRunner.class)
public class ArticleServiceImplTest {

	@InjectMocks
	ArticleServiceImpl articleService;
	
	@Mock
	ArticleRepository repo;
	
	@Test
	public void getArticleTest(){
		
		Mockito.when(repo.findOne(Mockito.anyLong()))
			.thenReturn(new Article("articleNumber", "articleTitle", "articledescription", "1234567891213", 12.50, 10, "100SABC"));
		
		ArticleDto dto = articleService.getArticle(0);
		Assert.isTrue(dto.getArticleTitle().equals("articleTitle"));
		Assert.isTrue(dto.getArticlePrice().equals(12.50));
	}
}
