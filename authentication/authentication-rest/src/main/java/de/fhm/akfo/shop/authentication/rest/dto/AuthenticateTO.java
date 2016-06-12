package de.fhm.akfo.shop.authentication.rest.dto;

/**
 * ServiceTemplate Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class AuthenticateTO {

	/** ServiceTemplate-Id */
	private String jwtToken;
	
	
	/**
	 * Default-Konstruktor.
	 */
	public AuthenticateTO() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name ServiceTemplate-Name String
	 */
	public AuthenticateTO(String jwtToken) {
		this.jwtToken = jwtToken;
	}


	public String getJwtToken() {
		return jwtToken;
	}


	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
}
