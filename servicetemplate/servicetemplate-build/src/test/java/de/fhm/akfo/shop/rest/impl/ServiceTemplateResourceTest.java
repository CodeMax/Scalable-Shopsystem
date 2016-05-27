package de.fhm.akfo.shop.rest.impl;

import java.util.List;

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

    private RestTemplate restTemplate = new TestRestTemplate("test", "123");
	
    @Test
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