package de.fhm.akfo.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;

/**
 * Initializing the SpringBoot-Application.
 *
 * @author Maximilian.Spelsberg
 */
@SpringBootApplication
@ComponentScan({"de.fhm.akfo.shop.rest", "de.fhm.akfo.shop.service.impl"})
@EntityScan("de.fhm.akfo.shop.entity")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
