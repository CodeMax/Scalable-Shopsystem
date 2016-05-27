package de.fhm.akfo.shop.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.fhm.akfo.shop.entity.ServiceTemplate;
import de.fhm.akfo.shop.repo.ServiceTemplateRepository;
import de.fhm.akfo.shop.service.api.ServiceTemplateService;
import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;
import de.fhm.akfo.shop.service.api.exception.ServiceTemplateValidationException;


/**
 * Implementierung des Business Service zur Erzeugung einer neuen 
 * bzw. zum Ueberschreiben eines bestehenden ServiceTemplate-Objekts.
 * 
 * @author Spelsberg.Maximilian
 */
@Service(value = "ServiceTemplateService")
@Transactional
@ExposesResourceFor(ServiceTemplate.class)
public class ServiceTemplateServiceImpl implements ServiceTemplateService {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(ServiceTemplateServiceImpl.class);

	/** Datenzugriffsschicht auf die Entitaet {@link ServiceTemplate}. */
    @Inject
	private ServiceTemplateRepository servicetemplateRepo;
    
	
	@Transactional(readOnly = true)
	public List<ServiceTemplateDto> getServiceTemplateList() {
		LOG.info("Aufruf der Methode getServiceTemplateList()");

		List<ServiceTemplateDto> listOfServiceTemplate = new ArrayList<ServiceTemplateDto>();

		Iterable<ServiceTemplate> findAll = servicetemplateRepo.findAll();
		
		for (ServiceTemplate st : findAll) {
			LOG.info("Datensatz in getServiceTemplateList gefunden: " + st.getId() + ", " + st.getName());
			listOfServiceTemplate.add(new ServiceTemplateDto(st.getId(), st.getName()));
		}

		return listOfServiceTemplate;
	}
	

	@Transactional(readOnly = true)
	public ServiceTemplateDto getServiceTemplate(long id) {
		LOG.info("Aufruf der Methode getServiceTemplate()");

		ServiceTemplate findOne = servicetemplateRepo.findOne(id);
		
		return new ServiceTemplateDto(findOne.getId(), findOne.getName());
	}

	
	public ServiceTemplateDto saveServiceTemplate(ServiceTemplateDto servicetemplateDto)
		throws ServiceTemplateValidationException {
		LOG.info(String.format("Aufruf der Methode changeServiceTemplate(%s)", servicetemplateDto));

		ServiceTemplate st = servicetemplateRepo.save(new ServiceTemplate(servicetemplateDto.getName())); 
		
		return new ServiceTemplateDto(st.getId(), st.getName());
	}
}
