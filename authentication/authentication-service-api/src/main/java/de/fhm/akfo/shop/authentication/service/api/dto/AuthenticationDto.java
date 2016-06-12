package de.fhm.akfo.shop.authentication.service.api.dto;

import java.util.ArrayList;

/**
 * Authentication Business-Objekt.
 * 
 * @author Spelsberg.Maximilian
 */
public class AuthenticationDto {

	/** Technical User-Id */
	private long id;
	
	/** Authentication-Name. */
	private String username;
	
	/** Authentication-Password. */
	private String password;
	
	/** Firstname of User */
	private String firstname;
	
	/** Lastname of User */
	private String lastname;
	
	/** Authentication-Token. */
	private String token;
	
	private ArrayList<String> roles; 
	
	/**
	 * Default-Konstruktor.
	 */
	public AuthenticationDto() {
	}
	

	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 * 
	 * @param name Authentication-Name String
	 */
	public AuthenticationDto(String username, String password) {
		this.username = username;
		this.password = password;
	}


	@Override
	public String toString() {
		return "AuthenticationDto [id=" + id + ", username=" + username + ", password=" + password + ", firstname="
				+ firstname + ", lastname=" + lastname + ", token=" + token + ", roles=" + roles + "]";
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public Long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public ArrayList<String> getRoles() {
		return roles;
	}


	public void setRoles(ArrayList<String> roles) {
		this.roles = roles;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

}
