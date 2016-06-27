package de.fhm.akfo.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Entität des ServiceTemplate-Objekts
 * 
 * @author Maximilian.Spelsberg
 */
@Entity
public class ServiceTemplate extends AbstractEntity {

	/**
	 * Name des ServiceTemplate-Objekts
	 */
	@Column
    private String name;
	
	
	/**
	 * 
	 * @param name
	 */
    public ServiceTemplate(String name) {
        this.name = name;
    }


    public ServiceTemplate() {}

	
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}