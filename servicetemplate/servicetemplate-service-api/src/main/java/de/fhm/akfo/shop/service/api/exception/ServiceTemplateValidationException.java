package de.fhm.akfo.shop.service.api.exception;

/**
 * Diese Exception wird geworfen, wenn bei der Validierung von ServiceTemplate ein fachlicher Fehler
 * auftritt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ServiceTemplateValidationException extends Exception {

	/** Generierte unique ID zur Serialisierung der Exception. */
	private static final long serialVersionUID = 4845965355617181747L;



	/**
	 * Erzeugt eine {@link ServiceTemplateValidationException} mit der uebergebenen {@code message}.
	 * 
	 * @param message
	 *            String, Fehlertext der Exception.
	 */
	public ServiceTemplateValidationException(String message) {
		super(message);
	}



	/**
	 * Erzeugt eine {@link ServiceTemplateValidationException} mit der uebergebenen {@code cause}.
	 * 
	 * @param cause
	 *            {@link Throwable}, das diese Exception verursacht hat.
	 */
	public ServiceTemplateValidationException(Throwable cause) {
		super(cause);
	}



	/**
	 * Erzeugt eine {@link ServiceTemplateValidationException} mit der uebergebenen {@code message} und
	 * {@code cause}.
	 * 
	 * @param message
	 *            String, Fehlertext der Exception.
	 * @param cause
	 *            {@link Throwable}, das diese Exception verursacht hat.
	 */
	public ServiceTemplateValidationException(String message, Throwable cause) {
		super(message, cause);
	}

}
