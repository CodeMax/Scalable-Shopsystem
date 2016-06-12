package de.fhm.akfo.shop.authentication.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Entität des Authentication-Objekts
 * 
 * @author Maximilian.Spelsberg
 */
@Entity
public class Authentication extends AbstractEntity {

	/**
	 * Name des Authentication-Objekts
	 */
	@Column
    private String name;
	
	
	/**
	 * 
	 * @param name
	 */
    public Authentication(String name) {
        this.name = name;
    }


    protected Authentication() {}

	
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}