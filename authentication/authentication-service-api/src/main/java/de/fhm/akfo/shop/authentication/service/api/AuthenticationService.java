package de.fhm.akfo.shop.authentication.service.api;

import de.fhm.akfo.shop.authentication.service.api.dto.AuthenticationDto;

/**
 * Business Service zur Erzeugung eines neuen bzw. zum Ueberschreiben eines bestehenden Eintrags für Authentication.
 * 
 * @author Spelsberg.Maximilian
 */
public interface AuthenticationService {

	/**
	 * Liefert einen gueltigen Authentifizierungs-Token für die mitgelieferten Credentials.
	 * @param user, String pw 
	 * 
	 * @param id
	 * 
	 * @return {@link AuthenticationDto} mit dem aktuell gueltigen Eintrag für Authentication, oder einem
	 *         leeren Dto - niemals {@code null}.
	 */
	public String getAuthenticationToken(AuthenticationDto dto);
	
}
