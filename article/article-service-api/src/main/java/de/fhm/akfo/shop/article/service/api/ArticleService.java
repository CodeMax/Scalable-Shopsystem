package de.fhm.akfo.shop.article.service.api;

import java.util.List;

import de.fhm.akfo.shop.article.service.api.dto.ArticleDto;
import de.fhm.akfo.shop.article.service.api.exception.ArticleValidationException;

/**
 * Business Service zur Erzeugung eines neuen bzw. zum Ueberschreiben eines bestehenden Eintrags für Article.
 * 
 * @author Spelsberg.Maximilian
 */
public interface ArticleService {

	/**
	 * Liefert alle aktuell gueltigen Einträge für Article.
	 * 
	 * @return {@link ArticleDto} mit dem aktuell gueltigen Eintrag für Article, oder einem
	 *         leeren Dto - niemals {@code null}.
	 */
	public List<ArticleDto> getArticleList();
	
	
	/**
	 * Liefert einen gueltigen Eintrag für die angefragte Id.
	 * 
	 * @param id
	 * 
	 * @return {@link ArticleDto} mit dem aktuell gueltigen Eintrag für Article, oder einem
	 *         leeren Dto - niemals {@code null}.
	 */
	public ArticleDto getArticle(long id);
	
	
	/**
	 * 
	 * @param articleDto
	 * @return
	 * @throws ArticleValidationException 
	 */
	public ArticleDto saveArticle(ArticleDto articleDto) throws ArticleValidationException;
	
	
	/**
	 * Erzeugt bzw. ueberschreibt den aktuell gueltigen Eintrag für Article mit dem uebergebenen {@link ArticleDto}.
	 * 
	 * @param articleBo
	 *            {@link ArticleDto}.
	 * @throwsArticleValidationException
	 *             wenn bei der Validierung von Article ein fachlicher Fehler auftritt.
	 */
//	public void changeArticle(ArticleDto articleBo)
//		throws ArticleValidationException;

}
