package de.fhm.akfo.shop.authentication.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import de.fhm.akfo.shop.authentication.entity.Authentication;

public interface AuthenticationRepository extends PagingAndSortingRepository<Authentication, Long> {

}
