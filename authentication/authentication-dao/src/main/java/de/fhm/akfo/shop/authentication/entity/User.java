package de.fhm.akfo.shop.authentication.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * Entität des Authentication-Objekts
 * 
 * @author Maximilian.Spelsberg
 */
@Entity
@Table(name = "USER")
public class User extends AbstractEntity {

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
//  @JoinTable(name = "role", joinColumns = 
//	@JoinColumn(name = "id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "id", referencedColumnName = "id"))
//	@JoinColumn(name = "id", referencedColumnName = "id_user")
	@ManyToMany(targetEntity = Role.class, cascade = CascadeType.ALL)
	@JoinTable(name = "user_role", joinColumns = { @JoinColumn(name = "id_user", referencedColumnName = "id") }, 
     inverseJoinColumns = { @JoinColumn(name = "id_role", referencedColumnName = "id") })
	private List<Role> roles;
	
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


	public List<Role> getRoles() {
        return this.roles;
    }
	
	
	public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
	
	/**
	 * Default Constructor
	 */
	public User(){
	}
	
	/**
	 * Constructor
	 * @param username
	 * @param firstname
	 * @param lastname
	 * @param password
	 * @param address
	 * @param city
	 * @param postcode
	 * @param country
	 * @param roleSet
	 * @param failedlogins
	 */
	public User(String username, String firstname, String lastname, String password, String address,
			String city, String postcode, String country, ArrayList<Role> roleSet, Integer failedlogins) {
		super();
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.address = address;
		this.city = city;
		this.postcode = postcode;
		this.country = country;
		this.roles = roleSet;
		this.failedlogins = failedlogins;
		
		

	}
	
	
	@Override
	public String toString() {
		return "User [username=" + username + ", firstname=" + firstname + ", lastname=" + lastname + ", password="
				+ password + ", roles=" + roles + ", address=" + address + ", city=" + city + ", postcode=" + postcode
				+ ", country=" + country + ", failedlogins=" + failedlogins + "]";
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