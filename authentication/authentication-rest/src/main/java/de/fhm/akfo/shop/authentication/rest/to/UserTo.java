package de.fhm.akfo.shop.authentication.rest.to;

import java.util.List;

public class UserTo {

	/**
	 *  Technical User-Id 
	 */
	private Long id;
	
	/**
	 * Email of User
	 */
	private String username;
	
	/**
	 * First Name of User
	 */
	private String firstname;
	
	/**
	 * Last Name of User
	 */
	private String lastname;
	
	/**
	 * Password of User 
	 */
	private String password;
	
	/**
	 * Roles of User
	 */
	private List<RoleTo> roles;
	
	/**
	 * Address (Street and Number) of User
	 */
	private String address;
	
	/**
	 * City of User
	 */
	private String city;
	
	/**
	 * Postcode of User
	 */
	private String postcode;
	
	/**
	 * Country of User
	 */
	private String country;

	/**
	 * Failed Logins since last successful login 
	 */
	private Integer failedlogins;
	
	/**
	 * Default Constructor
	 */
	public UserTo(){
	}
	
	/**
	 * Constructor
	 * @param id
	 * @param username
	 * @param firstname
	 * @param lastname
	 * @param password
	 * @param roles
	 * @param address
	 * @param city
	 * @param postcode
	 * @param country
	 */
	public UserTo(Long id, String username, String firstname, String lastname, String password, List<RoleTo> roles, String address,
			String city, String postcode, String country, Integer failedlogins) {
		super();
		this.id = id;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.roles = roles;
		this.address = address;
		this.city = city;
		this.postcode = postcode;
		this.country = country;
		this.failedlogins = failedlogins;
	}
	
	/**
	 * Constructor
	 * @param username
	 * @param password
	 */
	public UserTo(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	
	@Override
	public String toString() {
		return "UserTo [id=" + id + ", username=" + username + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", password=" + password + ", roles=" + roles + ", address=" + address + ", city=" + city
				+ ", postcode=" + postcode + ", country=" + country + ", failedlogins=" + failedlogins + "]";
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
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


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public List<RoleTo> getRoles() {
		return roles;
	}


	public void setRoles(List<RoleTo> roles) {
		this.roles = roles;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getPostcode() {
		return postcode;
	}


	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public Integer getFailedlogins() {
		return failedlogins;
	}


	public void setFailedlogins(Integer failedlogins) {
		this.failedlogins = failedlogins;
	}
	
}
