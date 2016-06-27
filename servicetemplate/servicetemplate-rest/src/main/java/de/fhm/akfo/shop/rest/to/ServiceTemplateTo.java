package de.fhm.akfo.shop.rest.to;

import org.springframework.hateoas.ResourceSupport;

/**
 * ServiceTemplate Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateTo extends ResourceSupport {

	/** ServiceTemplate-Id */
	private Long servicetemplateId;
	
	/** ServiceTemplate-Name. */
	private String name;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public ServiceTemplateTo() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name ServiceTemplate-Name String
	 */
	public ServiceTemplateTo(String name, Long id) {
		this.name = name;
		this.servicetemplateId = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Long getServicetemplateId() {
		return servicetemplateId;
	}


	public void setServicetemplateId(Long servicetemplateId) {
		this.servicetemplateId = servicetemplateId;
	}

}
