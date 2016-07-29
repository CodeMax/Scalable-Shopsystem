package de.hm.shop.shoppingcart.rest.resource;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collection;

import javax.annotation.security.DenyAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Link;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import de.hm.shop.shoppingcart.rest.dto.ShoppingcartDto;
import de.hm.shop.shoppingcart.rest.dto.ShoppingcartDtoList;
import de.hm.shop.shoppingcart.rest.dto.mapper.ShoppingcartDtoBoMapper;
import de.hm.shop.shoppingcart.service.api.ShoppingcartService;
import de.hm.shop.shoppingcart.service.api.bo.ShoppingcartBo;
import de.hm.shop.shoppingcart.service.api.exception.ShoppingcartException;


/**
 * Die REST-Ressource für Shoppingcart
 * @author Maximilian.Spelsberg
 */
@Component
@Path("shoppingcart")
@ExposesResourceFor(ShoppingcartDto.class)
@CrossOrigin
public class ShoppingcartResource {

	/** Logger dieser Klasse. */
	private static final Logger LOG = LoggerFactory.getLogger(ShoppingcartResource.class);
	
	@Inject
	private ShoppingcartService shoppingcartService;

	@Inject
	private ShoppingcartDtoBoMapper shoppingcartMapper;

	@Context
	private UriInfo uriInfo;

	@Inject
	private EntityLinks entityLinks;



	@GET
	@DenyAll
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response getAllShoppingcart() {
		LOG.info("Aufruf der getAllShoppingcart()-Methode");
		
		final Collection<ShoppingcartBo> shoppingcartBos = shoppingcartService.getAll();
		final Collection<ShoppingcartDto> shoppingcartDtos = mapBosToDtos(shoppingcartBos);

		for (final ShoppingcartDto shoppingcartDto : shoppingcartDtos) {
			addSelfLink(shoppingcartDto);
		}

		final ShoppingcartDtoList shoppingcartDtoList = new ShoppingcartDtoList(shoppingcartDtos,
				entityLinks.linkToCollectionResource(ShoppingcartDto.class));
		return Response.ok(shoppingcartDtoList).build();
	}



	@GET
	@Path("{userId}")
	@RolesAllowed(value = { "user" })
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response getById(@PathParam("userId") final Long userId) {
		LOG.info("Aufruf der getById()-Methode mit der id: {}", userId);
		
		Validate.notNull(userId);

		final ShoppingcartBo shoppingcartBo = shoppingcartService.getByUserId(userId);
		if (shoppingcartBo != null) {
			final ShoppingcartDto shoppingcartDto = shoppingcartMapper.mapBoToDto(shoppingcartBo);
			return okResponseWithSelfLink(shoppingcartDto);
		} else {
			return Response.status(Status.NOT_FOUND).entity(Status.NOT_FOUND.getReasonPhrase()).build();
		}
	}



	@POST
	@RolesAllowed(value = { "user" })
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response createNewShoppingcart(final ShoppingcartDto shoppingcartDto) {
		LOG.info("Aufruf der createNewShoppingcart()-Methode mit den Parametern: {}", shoppingcartDto.toString());
		
		Validate.notNull(shoppingcartDto);
		Validate.validState(shoppingcartDto.getId() == null);

		final ShoppingcartDto shoppingcartDtoSaved = saveImpl(shoppingcartDto);
		final Link selfLink = addSelfLink(shoppingcartDtoSaved);

		return Response.created(URI.create(selfLink.getHref())).entity(shoppingcartDtoSaved).build();
	}



	@PUT
	@Path("{id}")
	@RolesAllowed(value = { "user" })
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response updateShoppingcart(@PathParam(value = "id") String id, final ShoppingcartDto shoppingcartDto) {
		LOG.info("Aufruf der updateShoppingcart()-Methode mit der id: {}", id);
		
		Validate.notNull(shoppingcartDto);
		Validate.notNull(shoppingcartDto.getId());

		if(Long.decode(id) != shoppingcartDto.getId()){
			return Response.status(Status.BAD_REQUEST).build();
		}
		
		final ShoppingcartDto shoppingcartDtoSaved = saveImpl(shoppingcartDto);
		return okResponseWithSelfLink(shoppingcartDtoSaved);
	}



	@Path("{id}")
	@DELETE
	@Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response deleteById(@PathParam("id") final Long id) {
		Validate.notNull(id);

		shoppingcartService.delete(id);
		return Response.noContent().build();
	}



	private ShoppingcartDto saveImpl(final ShoppingcartDto shoppingcartDto) {
		try {
			final ShoppingcartBo shoppingcartBo = shoppingcartMapper.mapDtoToBo(shoppingcartDto);
			final ShoppingcartBo shoppingcartBoSaved = shoppingcartService.save(shoppingcartBo);
			return shoppingcartMapper.mapBoToDto(shoppingcartBoSaved);
		} catch (final ShoppingcartException e) {
			throw new WebApplicationException(e);
		}
	}



	private Collection<ShoppingcartDto> mapBosToDtos(final Collection<ShoppingcartBo> shoppingcartBos) {
		final Collection<ShoppingcartDto> shoppingcartDtos = new ArrayList<>();
		if (CollectionUtils.isNotEmpty(shoppingcartBos)) {
			for (final ShoppingcartBo shoppingcartBo : shoppingcartBos) {
				shoppingcartDtos.add(shoppingcartMapper.mapBoToDto(shoppingcartBo));
			}
		}
		return shoppingcartDtos;
	}



	private Response okResponseWithSelfLink(final ShoppingcartDto shoppingcartDto) {
		addSelfLink(shoppingcartDto);
		return Response.ok(shoppingcartDto).build();
	}



	private Link addSelfLink(final ShoppingcartDto shoppingcartDto) {
		Validate.notNull(shoppingcartDto);

		final Link selfLink = entityLinks.linkToSingleResource(shoppingcartDto);
		shoppingcartDto.getLinks().add(selfLink);

		return selfLink;
	}
}
