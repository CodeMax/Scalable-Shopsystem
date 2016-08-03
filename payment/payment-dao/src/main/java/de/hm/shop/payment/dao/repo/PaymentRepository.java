package de.hm.shop.payment.dao.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import de.hm.shop.payment.dao.entity.PaymentEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface PaymentRepository extends PagingAndSortingRepository<PaymentEntity, Long> {

}
