package de.fhm.akfo.shop.article.service.api.dto;

import java.util.Date;

import javax.persistence.Column;

/**
 * Article Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleDto {

	/** Article-Id */
	private Long id;
	
	/**
	 * Nummer des Article-Objekts
	 */
	@Column
    private String articleNumber;
	
	/**
	 * Titel des Article-Objekts
	 */
	@Column
    private String articleTitle;
	
	/**
	 * Beschreibung des Article-Objekts
	 */
	@Column
    private String articleDescription;
	
	/**
	 * EAN-Code des Article-Objekts
	 */
	@Column
    private String articleEAN;
	
	/**
	 * Preis des Article-Objekts
	 */
	@Column
    private Double articlePrice;
	
//	/**
//	 * Erstellungsdatum des Article-Objekts
//	 */
//	@Column
//    private Date articleCreationDate;
	
	/**
	 * Stückzahl des Article-Objekts
	 */
	@Column
    private int articleStock;
	
	/**
	 * SupplierId des Article-Objekts
	 */
	@Column
    private String supplierId;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ArticleDto() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param id
	 * @param articleNumber
	 * @param articleTitle
	 * @param articleDesicription
	 * @param articleEAN
	 * @param articlePrice
	 * @param articleCreationDate
	 * @param articleStock
	 * @param supplierId
	 */
	public ArticleDto(Long id, String articleNumber, String articleTitle, String articleDescription, String articleEAN,
			Double articlePrice, Date articleCreationDate, int articleStock, String supplierId) {
		super();
		this.id = id;
		this.articleNumber = articleNumber;
		this.articleTitle = articleTitle;
		this.articleDescription = articleDescription;
		this.articleEAN = articleEAN;
		this.articlePrice = articlePrice;
//		this.articleCreationDate = articleCreationDate;
		this.articleStock = articleStock;
		this.supplierId = supplierId;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getArticleNumber() {
		return articleNumber;
	}


	public void setArticleNumber(String articleNumber) {
		this.articleNumber = articleNumber;
	}


	public String getArticleTitle() {
		return articleTitle;
	}


	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}


	public String getArticleDescription() {
		return articleDescription;
	}


	public void setArticleDescription(String articleDescription) {
		this.articleDescription = articleDescription;
	}


	public String getArticleEAN() {
		return articleEAN;
	}


	public void setArticleEAN(String articleEAN) {
		this.articleEAN = articleEAN;
	}


	public Double getArticlePrice() {
		return articlePrice;
	}


	public void setArticlePrice(Double articlePrice) {
		this.articlePrice = articlePrice;
	}


//	public Date getArticleCreationDate() {
//		return articleCreationDate;
//	}
//
//
//	public void setArticleCreationDate(Date articleCreationDate) {
//		this.articleCreationDate = articleCreationDate;
//	}


	public int getArticleStock() {
		return articleStock;
	}


	public void setArticleStock(int articleStock) {
		this.articleStock = articleStock;
	}


	public String getSupplierId() {
		return supplierId;
	}


	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}

}
