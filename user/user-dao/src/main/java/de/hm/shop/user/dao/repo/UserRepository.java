package de.hm.shop.user.dao.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.hm.shop.user.dao.entity.UserEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

	/**
	 * Find User by SupplierId
	 * @param supplierId - unique
	 * @return Supplier-User
	 */
	@Query("SELECT p FROM UserEntity p WHERE p.supplierId = :supplierId")
	public UserEntity findSupplier(@Param("supplierId") Long supplierId);


}
