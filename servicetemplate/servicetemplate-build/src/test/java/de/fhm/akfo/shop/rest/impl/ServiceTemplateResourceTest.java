package de.fhm.akfo.shop.rest.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.ForbiddenException;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;
import de.fhm.akfo.shop.rest.dto.ServiceTemplateTO;

@RunWith(SpringJUnit4ClassRunner.class)
@ApplicationTest
public class ServiceTemplateResourceTest {
	
	private static String vaildAuthToken = "\"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImZpcnN0bmFtZSI6IkpvaG4iLCJyb2xlIjpbImFkbWluIiwic3VwZXJhZG1pbiJdLCJpc3MiOiJzaG9wc3lzdGVtIiwiZXhwIjoxNDY1MzAxODMxLCJpYXQiOjE0NjUzMDAwMzEsImp0aSI6IjEyMyIsImxhc3RuYW1lIjoiRG9lIn0.hinTAZAW3buA_fIxiKpityE0KngbSrnhv6r0dA-9pY1PoaSUvo5LdzRVhwh-QCnaVHAsXnlovIDRHLSpmoTPsw\"";
	private static String expiredAuthToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImZpcnN0bmFtZSI6IkpvaG4iLCJyb2xlIjpbImFkbWluIiwic3VwZXJhZG1pbiJdLCJpc3MiOiJzaG9wc3lzdGVtIiwiZXhwIjoxNDY0OTg2MDcwLCJpYXQiOjE0NjQ5ODQyNzAsImp0aSI6IjEyMyIsImxhc3RuYW1lIjoiRG9lIn0.8nstFMPC3w3hInvZWZHp21k0bTDGrcW-ll4nQeKwy_DE4gSdcxpIEKyeLk_-d1XqMYWV9ES2c80xLOXGpee_JA";
	private static String noSuchRoleAuthToken = "";
	private RestTemplate restTemplate = new TestRestTemplate("test", "123");
	
    @Before
    public void generateTestToken(){
        String issuer = "shopsystem";
        String subject = "authentication";
        long ttlMiS = 1800000;
   		Map<String, Object> credentials = new HashMap<String, Object>();
   		ArrayList<String> roles = new ArrayList<String>();
   		roles.add("superadmin");
    	credentials.put("role", roles);
    	
    	noSuchRoleAuthToken = new JWTTokenGenerator().createJWT("1", issuer, subject, ttlMiS, credentials);
    	
    	credentials.remove("role");
    	roles.add("admin");
    	credentials.put("role", roles);
    	vaildAuthToken = new JWTTokenGenerator().createJWT("1", issuer, subject, ttlMiS, credentials);
    	
    }
    
    @Test
    public void restCallTestWithValidToken() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("servicetemplate");
		target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", vaildAuthToken).get(String.class);
        
    }

    @Test(expected=NotAuthorizedException.class)
    @Ignore
    public void restCallTestWithExpiredToken() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("servicetemplate");
    	WebTarget target2 = client.target("http://localhost:8094").path("servicetemplate");
    	try{
    		target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", expiredAuthToken).get(String.class);
    	}catch(NotAuthorizedException e){
    		try{
    			target2.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", expiredAuthToken).get(String.class);    		
    		}catch(NotAuthorizedException e2){
    			
    		}
    	}
    }

    @Test(expected=ForbiddenException.class)
    public void restCallTestWithNoValidUserRole() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("servicetemplate");
		target.request(MediaType.APPLICATION_JSON).header("AUTHORIZATION", noSuchRoleAuthToken).get(String.class);
    }
    
    @Test
    @Ignore
    public void returnsAllPages() {
        ResponseEntity<Page<ServiceTemplateTO>> responseEntity = getEntries("http://localhost:8094/servicetemplate");
        List<ServiceTemplateTO> servicetemplateDtoList = responseEntity.getBody().getContent();
        
        System.out.println(responseEntity.getBody().getContent().toString());
        System.out.println("TestResult Size: " + servicetemplateDtoList.size());
        
        for(ServiceTemplateTO stdto : servicetemplateDtoList){
            System.out.println(stdto.toString() +", " + stdto.getId() + ", " + stdto.getName() + ", Linkssize: " + stdto.getLinks().size());	
        }
    }
    
    
    @Test
    @Ignore
    public void returnsOnePageById() {
        ResponseEntity<Page<ServiceTemplateTO>> responseEntity = getEntries("http://localhost:8094/servicetemplate/0");
        List<ServiceTemplateTO> servicetemplateDtoList = responseEntity.getBody().getContent();
        
        System.out.println(responseEntity.getBody().getContent().toString());
        System.out.println("TestResult Size: " + servicetemplateDtoList.size());
        
        for(ServiceTemplateTO stdto : servicetemplateDtoList){
            System.out.println(stdto.toString() +", " + stdto.getId() + ", " + stdto.getName() + ", Linkssize: " + stdto.getLinks().size());	
        }
    }

    
    private ResponseEntity<Page<ServiceTemplateTO>> getEntries(String uri) {
        return restTemplate.exchange(uri, HttpMethod.GET, null, getParameterizedPageTypeReference());
    }

    
    private ParameterizedTypeReference<Page<ServiceTemplateTO>> getParameterizedPageTypeReference() {
        return new ParameterizedTypeReference<Page<ServiceTemplateTO>>(){};
    }
}