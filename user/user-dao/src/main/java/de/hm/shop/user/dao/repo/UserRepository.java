package de.hm.shop.user.dao.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import de.hm.shop.user.dao.entity.UserEntity;


/**
 * Repository
 * @author Maximilian.Spelsberg
 */
@Repository
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

}
