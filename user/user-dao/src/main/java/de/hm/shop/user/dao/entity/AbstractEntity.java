package de.hm.shop.user.dao.entity;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;


/**
 * Basisklasse für alle Entities.
 * @author Maximilian.Spelsberg
 */
@MappedSuperclass
public abstract class AbstractEntity {

	@Id
	private Long id;



	public Long getId() {
		return id;
	}



	public void setId(final Long id) {
		this.id = id;
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
