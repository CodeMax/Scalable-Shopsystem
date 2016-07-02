package de.fhm.akfo.shop.authentication.rest.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import de.fhm.akfo.shop.authentication.rest.to.AuthenticateTo;
import de.fhm.akfo.shop.authentication.rest.to.RoleTo;
import de.fhm.akfo.shop.authentication.rest.to.UserTo;


@RunWith(SpringJUnit4ClassRunner.class)
@ApplicationTest
public class UserResourceIT {

	private UserTo to;
	// Username: John, Password: Doe = Basic Sm9objpEb2U= 
	// Username: testuser, Password: testpassword = Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk
	private String credentials = "Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk";
	private String validToken;
	
	@Before
	public void initUserdata(){
		
		List<RoleTo> roles = new ArrayList<RoleTo>();
		roles.add(new RoleTo("admin"));
		roles.add(new RoleTo("user"));
		
		to = new UserTo(new Long(2), "testuser", "testname", "testlastname", "testpassword", roles, 
						   "testaddress", "testcity", "testpostcode", "testcountry", 0);
	}	
	
    @Test
    public void saveUserdataAuthenticateAndGetUser() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("user");
    	Response response = target.request(MediaType.APPLICATION_JSON).post(Entity.json(to));
    	
    	Assert.assertTrue(response != null);
    	Assert.assertTrue(response.getStatus() == 200);
    	
    	getToken();
    	
    	target = client.target("http://localhost:8094").path("user");
    	response = target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", validToken).get();
		
    	Assert.assertTrue(response != null);
    	Assert.assertTrue(response.getStatus() == 200);
    	
    	response.bufferEntity();
    	System.out.println(response.readEntity(String.class));
    }
    

    private void getToken() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("authentication");
    	 Response response =  target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", credentials).get(Response.class);
    	 AuthenticateTo to = response.readEntity(AuthenticateTo.class);
    	 validToken = to.getJwtToken();
    }
}
