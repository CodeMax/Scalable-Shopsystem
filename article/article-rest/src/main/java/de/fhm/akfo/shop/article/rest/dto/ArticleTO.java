package de.fhm.akfo.shop.article.rest.dto;

import org.springframework.hateoas.ResourceSupport;

/**
 * Article Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleTO extends ResourceSupport {

	/** Article-Id */
	private Long articleId;
	
	/** Article-Name. */
	private String name;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ArticleTO() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name Article-Name String
	 */
	public ArticleTO(String name, long id) {
		this.name = name;
		this.articleId = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public long getServicetemplateId() {
		return articleId;
	}


	public void setServicetemplateId(long id) {
		this.articleId = id;
	}

}
