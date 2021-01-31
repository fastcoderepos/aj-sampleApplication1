package com.fastcode.dvdrental.domain.extended.filmcategory;

import com.fastcode.dvdrental.domain.core.filmcategory.IFilmCategoryRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("filmCategoryRepositoryExtended")
public interface IFilmCategoryRepositoryExtended extends IFilmCategoryRepository {
    //Add your custom code here
}
