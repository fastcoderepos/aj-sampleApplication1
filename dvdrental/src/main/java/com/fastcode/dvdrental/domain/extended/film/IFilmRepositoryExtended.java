package com.fastcode.dvdrental.domain.extended.film;

import com.fastcode.dvdrental.domain.core.film.IFilmRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("filmRepositoryExtended")
public interface IFilmRepositoryExtended extends IFilmRepository {
    //Add your custom code here
}
