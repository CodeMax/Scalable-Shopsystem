package de.hm.shop.user.rest.exception;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.glassfish.jersey.spi.ExtendedExceptionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Behandelt alle RuntimeExceptions, die keine {@link WebApplicationException}s sind.
 * @author Maximilian.Spelsberg
 */
@Provider
public class RuntimeExceptionHandler implements ExtendedExceptionMapper<RuntimeException> {

	private static final Logger LOG = LoggerFactory.getLogger(RuntimeExceptionHandler.class);



	@Override
	public Response toResponse(final RuntimeException exception) {
		LOG.error("Failed to process request", exception);
		return Response.serverError().entity(exception.getMessage()).type(MediaType.TEXT_PLAIN_TYPE).build();
	}



	@Override
	public boolean isMappable(final RuntimeException exception) {
		return !(exception instanceof WebApplicationException);
	}

}