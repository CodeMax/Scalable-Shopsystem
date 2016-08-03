package de.hm.shop.payment.service.api.bo;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;



/**
 * Payment-Businessobjekt.
 * @author Maximilian.Spelsberg
 */
public class PaymentBo extends AbstractBo {

	private String name;



	/**
	 * Default-Konstruktor.
	 */
	public PaymentBo() {
	}



	/**
	 * Konstruktor zur Befuellung aller Attribute.
	 *
	 * @param name
	 *            Name
	 */
	public PaymentBo(final Long id, final String name) {
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
	public boolean equals(final Object obj) {
		return EqualsBuilder.reflectionEquals(this, obj);
	}



	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}
}
