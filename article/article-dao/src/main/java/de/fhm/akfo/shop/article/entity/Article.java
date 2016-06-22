package de.fhm.akfo.shop.article.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Entität des Article-Objekts
 * 
 * @author Maximilian.Spelsberg
 */
@Entity
public class Article extends AbstractEntity {

	/**
	 * Nummer des Article-Objekts
	 */
	@Column(name="articlenumber")
    private String articleNumber;
	
	/**
	 * Titel des Article-Objekts
	 */
	@Column(name="articletitle")
    private String articleTitle;
	
	/**
	 * Beschreibung des Article-Objekts
	 */
	@Column(name="articledescription")
    private String articleDescription;
	
	/**
	 * EAN-Code des Article-Objekts
	 */
	@Column(name="articleean")
    private String articleEAN;
	
	/**
	 * Preis des Article-Objekts
	 */
	@Column(name="articleprice")
    private Double articlePrice;
	
//	/**
//	 * Erstellungsdatum des Article-Objekts
//	 */
//	@Column
//	@Type(type="date")
//    private Date articleCreationDate;
//	
	/**
	 * Stückzahl des Article-Objekts
	 */
	@Column(name="articlestock")
    private int articleStock;
	
	/**
	 * SupplierId des Article-Objekts
	 */
	@Column(name="supplierid")
    private String supplierId;
	
	
	
    public Article() {
    }

    
    /**
     * Konstruktor zur Befuellung aller Attribute.
     * 
     * @param articleNumber
     * @param articleTitle
     * @param articleDesicription
     * @param articleEAN
     * @param articlePrice
     * @param articleCreationDate
     * @param articleStock
     * @param supplierId
     */
	public Article(String articleNumber, String articleTitle, String articleDescription, String articleEAN,
			Double articlePrice, int articleStock, String supplierId) {
		super();
		this.articleNumber = articleNumber;
		this.articleTitle = articleTitle;
		this.articleDescription = articleDescription;
		this.articleEAN = articleEAN;
		this.articlePrice = articlePrice;
//		this.articleCreationDate = articleCreationDate;
		this.articleStock = articleStock;
		this.supplierId = supplierId;
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



	public void setArticleDescription(String articleDesicription) {
		this.articleDescription = articleDesicription;
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