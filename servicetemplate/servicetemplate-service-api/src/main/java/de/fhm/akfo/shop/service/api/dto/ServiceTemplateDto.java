package de.fhm.akfo.shop.service.api.dto;

import org.springframework.hateoas.ResourceSupport;

/**
 * ServiceTemplate Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateDto {

	/** ServiceTemplate-Id */
	private long id;
	
	/** ServiceTemplate-Name. */
	private String name;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ServiceTemplateDto() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name ServiceTemplate-Name String
	 */
	public ServiceTemplateDto(long id, String name) {
		this.id = id;
		this.name = name;
	}



	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}

}
