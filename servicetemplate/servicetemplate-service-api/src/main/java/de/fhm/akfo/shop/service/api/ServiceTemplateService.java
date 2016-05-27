package de.fhm.akfo.shop.service.api;

import java.util.List;

import de.fhm.akfo.shop.service.api.dto.ServiceTemplateDto;
import de.fhm.akfo.shop.service.api.exception.ServiceTemplateValidationException;

/**
 * Business Service zur Erzeugung eines neuen bzw. zum Ueberschreiben eines bestehenden Eintrags für ServiceTemplate.
 * 
 * @author Spelsberg.Maximilian
 */
public interface ServiceTemplateService {

	/**
	 * Liefert alle aktuell gueltigen Einträge für ServiceTemplate.
	 * 
	 * @return {@link ServiceTemplateDto} mit dem aktuell gueltigen Eintrag für ServiceTemplate, oder einem
	 *         leeren Dto - niemals {@code null}.
	 */
	public List<ServiceTemplateDto> getServiceTemplateList();
	
	
	/**
	 * Liefert einen gueltigen Eintrag für die angefragte Id.
	 * 
	 * @param id
	 * 
	 * @return {@link ServiceTemplateDto} mit dem aktuell gueltigen Eintrag für ServiceTemplate, oder einem
	 *         leeren Dto - niemals {@code null}.
	 */
	public ServiceTemplateDto getServiceTemplate(long id);
	
	
	/**
	 * 
	 * @param servicetemplateDto
	 * @return
	 * @throws ServiceTemplateValidationException 
	 */
	public ServiceTemplateDto saveServiceTemplate(ServiceTemplateDto servicetemplateDto) throws ServiceTemplateValidationException;
	
	
	/**
	 * Erzeugt bzw. ueberschreibt den aktuell gueltigen Eintrag für ServiceTemplate mit dem uebergebenen {@link ServiceTemplateDto}.
	 * 
	 * @param servicetemplateBo
	 *            {@link ServiceTemplateDto}.
	 * @throwsServiceTemplateValidationException
	 *             wenn bei der Validierung von ServiceTemplate ein fachlicher Fehler auftritt.
	 */
//	public void changeServiceTemplate(ServiceTemplateDto servicetemplateBo)
//		throws ServiceTemplateValidationException;

}
