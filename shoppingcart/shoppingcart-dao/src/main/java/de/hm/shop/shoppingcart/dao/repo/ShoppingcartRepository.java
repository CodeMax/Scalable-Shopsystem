package de.hm.shop.shoppingcart.dao.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import de.hm.shop.shoppingcart.dao.entity.ShoppingcartEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface ShoppingcartRepository extends PagingAndSortingRepository<ShoppingcartEntity, Long> {

}
