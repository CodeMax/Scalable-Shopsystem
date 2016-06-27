package de.fhm.akfo.shop.article.rest.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;
import org.springframework.web.client.RestTemplate;

import de.fhm.akfo.shop.article.rest.to.ArticleTo;

@RunWith(SpringJUnit4ClassRunner.class)
@ApplicationTest
public class ArticleResourceTest {
	
	private static String vaildAuthToken; 
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
    	WebTarget target = client.target("http://localhost:8094").path("article");
		Response response = target.request(MediaType.APPLICATION_JSON)
								.header("AUTHORIZATION", vaildAuthToken).get(Response.class);
        
		Assert.notNull(response);
		Assert.isTrue(response.getStatus() == 200);
    }

    @Test
    public void restCallTestWithExpiredToken() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("article");
    	Response response = target.request(MediaType.APPLICATION_JSON)
    			.header("AUTHORIZATION", expiredAuthToken).post(Entity.json(new ArticleTo()));
    	
    	Assert.notNull(response);
		Assert.isTrue(response.getStatus() == 401);
    }
    
    
    @Test
    public void restCallTestWithNoValidUserRole() {
    	Client client = ClientBuilder.newClient();
    	WebTarget target = client.target("http://localhost:8094").path("article");
		Response response = target.request(MediaType.APPLICATION_JSON)
				.header("AUTHORIZATION", noSuchRoleAuthToken).post(Entity.json(new ArticleTo()));
		
		Assert.notNull(response);
		Assert.isTrue(response.getStatus() == 403);
    }
    
    
    @Test
    public void returnsAllPages() {
        ResponseEntity<Page<ArticleTo>> responseEntity = getEntries("http://localhost:8094/article");
        List<ArticleTo> articleDtoList = responseEntity.getBody().getContent();
        
        System.out.println(responseEntity.getBody().getContent().toString());
        System.out.println("TestResult Size: " + articleDtoList.size());
        
        for(ArticleTo stdto : articleDtoList){
            Assert.notNull(stdto);
        }
    }
    
    
    @Test
    public void returnsOnePageById() {
        ResponseEntity<Page<ArticleTo>> responseEntity = getEntries("http://localhost:8094/article/0");
        List<ArticleTo> articleDtoList = responseEntity.getBody().getContent();
        
        System.out.println(responseEntity.getBody().getContent().toString());
        System.out.println("TestResult Size: " + articleDtoList.size());
        
        for(ArticleTo stdto : articleDtoList){
            Assert.notNull(stdto);
        }
    }

    
    private ResponseEntity<Page<ArticleTo>> getEntries(String uri) {
        return restTemplate.exchange(uri, HttpMethod.GET, null, getParameterizedPageTypeReference());
    }

    
    private ParameterizedTypeReference<Page<ArticleTo>> getParameterizedPageTypeReference() {
        return new ParameterizedTypeReference<Page<ArticleTo>>(){};
    }
}