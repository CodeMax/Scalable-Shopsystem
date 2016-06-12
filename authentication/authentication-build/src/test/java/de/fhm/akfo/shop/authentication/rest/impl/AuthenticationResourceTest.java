package de.fhm.akfo.shop.authentication.rest.impl;

import static org.junit.Assert.assertTrue;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import de.fhm.akfo.shop.authentication.service.api.dto.AuthenticationDto;

@RunWith(SpringJUnit4ClassRunner.class)
@ApplicationTest
public class AuthenticationResourceTest {

    @Test
    public void getToken() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("authentication");
		    	String response = target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", "Basic YWJjOjEyMw==").get(String.class);
        
    	System.out.println(response);
    }

    @Test
    public void decodeCredentials() {
    	String credentials = "Basic YWJjOjEyMw==";
    	AuthenticationResource authResource = new AuthenticationResource();
    	AuthenticationDto encodedCredentials = authResource.decodeCredentials(credentials);
    	
    	System.out.println("|"+encodedCredentials.getUsername()+"|");
    	System.out.println("|"+encodedCredentials.getPassword()+"|");
    	assertTrue(encodedCredentials.getUsername().equals("abc") && encodedCredentials.getPassword().equals("123"));
    }
}