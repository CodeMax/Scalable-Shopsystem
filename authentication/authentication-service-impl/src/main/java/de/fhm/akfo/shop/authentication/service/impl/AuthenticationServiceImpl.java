package de.fhm.akfo.shop.authentication.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.fhm.akfo.shop.authentication.entity.Authentication;
import de.fhm.akfo.shop.authentication.repo.AuthenticationRepository;
import de.fhm.akfo.shop.authentication.service.api.AuthenticationService;
import de.fhm.akfo.shop.authentication.service.api.dto.AuthenticationDto;


/**
 * Implementierung des Business Service zur Erzeugung einer neuen 
 * bzw. zum Ueberschreiben eines bestehenden Authentication-Objekts.
 * 
 * @author Spelsberg.Maximilian
 */
@Service(value = "AuthenticationService")
@Transactional
@ExposesResourceFor(Authentication.class)
public class AuthenticationServiceImpl implements AuthenticationService {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(AuthenticationServiceImpl.class);

	/** Datenzugriffsschicht auf die Entitaet {@link Authentication}. */
    @Inject
	private AuthenticationRepository authenticationRepo;

    private final String issuer = "shopsystem";
    private final String subject = "authentication";
    private final long ttlMiS = 1800000;
	
	public String getAuthenticationToken(AuthenticationDto dto) {
		
		Map<String, Object> credentials = new HashMap<String, Object>();
		
		credentials.put("role", dto.getRoles());
		credentials.put("firstname", dto.getFirstname());
		credentials.put("lastname", dto.getLastname());
		
		return new JWTTokenGenerator().createJWT(dto.getId().toString(), issuer, subject, ttlMiS, credentials);
	}
}
