package de.hm.shop.template.dao.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import de.hm.shop.template.dao.entity.TemplateEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface TemplateRepository extends PagingAndSortingRepository<TemplateEntity, Long> {

}
