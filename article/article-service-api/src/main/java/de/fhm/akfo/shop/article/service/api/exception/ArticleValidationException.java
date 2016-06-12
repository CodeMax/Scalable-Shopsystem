package de.fhm.akfo.shop.article.service.api.exception;

/**
 * Diese Exception wird geworfen, wenn bei der Validierung von Article ein fachlicher Fehler
 * auftritt.
 * 
 * @author Spelsberg.Maximilian
 */
public class ArticleValidationException extends Exception {

	/** Generierte unique ID zur Serialisierung der Exception. */
	private static final long serialVersionUID = 4845965355617181747L;



	/**
	 * Erzeugt eine {@link ArticleValidationException} mit der uebergebenen {@code message}.
	 * 
	 * @param message
	 *            String, Fehlertext der Exception.
	 */
	public ArticleValidationException(String message) {
		super(message);
	}



	/**
	 * Erzeugt eine {@link ArticleValidationException} mit der uebergebenen {@code cause}.
	 * 
	 * @param cause
	 *            {@link Throwable}, das diese Exception verursacht hat.
	 */
	public ArticleValidationException(Throwable cause) {
		super(cause);
	}



	/**
	 * Erzeugt eine {@link ArticleValidationException} mit der uebergebenen {@code message} und
	 * {@code cause}.
	 * 
	 * @param message
	 *            String, Fehlertext der Exception.
	 * @param cause
	 *            {@link Throwable}, das diese Exception verursacht hat.
	 */
	public ArticleValidationException(String message, Throwable cause) {
		super(message, cause);
	}

}
