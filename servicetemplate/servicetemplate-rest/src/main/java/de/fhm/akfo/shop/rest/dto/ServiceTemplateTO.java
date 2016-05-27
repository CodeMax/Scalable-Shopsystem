package de.fhm.akfo.shop.rest.dto;

import org.springframework.hateoas.ResourceSupport;

/**
 * ServiceTemplate Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateTO extends ResourceSupport {

	/** ServiceTemplate-Name. */
	private String name;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ServiceTemplateTO() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name ServiceTemplate-Name String
	 */
	public ServiceTemplateTO(String name) {
		this.name = name;
	}



	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

}
