package de.hm.shop.payment.rest.dto;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.apache.commons.lang3.builder.ToStringBuilder;


/**
 * PaymentDTO.
 * @author Maximilian.Spelsberg
 */
@XmlRootElement
public class PaymentDto extends AbstractDto {

	@XmlElement
	private String name;


	/**
	 * Default-Konstruktor.
	 */
	public PaymentDto() {
	}


	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 *
	 * @param id
	 *            die Id
	 * @param name
	 *            ServicePayment-Name String
	 */
	public PaymentDto(final Long id, final String name) {
		super(id);
		this.name = name;
	}


	public String getName() {
		return name;
	}


	public void setName(final String name) {
		this.name = name;
	}


	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
