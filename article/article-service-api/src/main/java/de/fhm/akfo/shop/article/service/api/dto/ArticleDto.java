package de.fhm.akfo.shop.article.service.api.dto;

/**
 * Article Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleDto {

	/** Article-Id */
	private Long articleId;
	
	/** Article-Name. */
	private String name;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ArticleDto() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name Article-Name String
	 */
	public ArticleDto(long id, String name) {
		this.articleId = id;
		this.name = name;
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
