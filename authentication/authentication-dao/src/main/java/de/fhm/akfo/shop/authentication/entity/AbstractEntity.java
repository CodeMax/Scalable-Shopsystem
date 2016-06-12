package de.fhm.akfo.shop.authentication.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * 
 * @author Maximilian.Spelsberg
 */
@MappedSuperclass
public class AbstractEntity {

    @Id
    @GeneratedValue
    private Long id;

    public Long getId() {
        return id;
    }
}
