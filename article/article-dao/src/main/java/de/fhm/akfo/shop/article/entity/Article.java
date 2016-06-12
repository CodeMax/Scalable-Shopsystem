package de.fhm.akfo.shop.article.entity;

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
	 * Name des Article-Objekts
	 */
	@Column
    private String name;
	
	
	/**
	 * 
	 * @param name
	 */
    public Article(String name) {
        this.name = name;
    }


    protected Article() {}

	
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}