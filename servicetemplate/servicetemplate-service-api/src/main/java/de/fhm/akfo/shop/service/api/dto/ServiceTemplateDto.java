package de.fhm.akfo.shop.service.api.dto;

/**
 * ServiceTemplate Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateDto {

	/** ServiceTemplate-Id */
	private Long servicetemplateId;
	
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
		this.servicetemplateId = id;
		this.name = name;
	}



	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public long getServicetemplateId() {
		return servicetemplateId;
	}


	public void setServicetemplateId(long id) {
		this.servicetemplateId = id;
	}

}
