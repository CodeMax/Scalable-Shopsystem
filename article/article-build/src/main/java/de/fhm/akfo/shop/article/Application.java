package de.fhm.akfo.shop.article;

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
@ComponentScan({"de.fhm.akfo.shop.article.rest", "de.fhm.akfo.shop.article.service.impl"})
@EntityScan("de.fhm.akfo.shop.article.entity")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
