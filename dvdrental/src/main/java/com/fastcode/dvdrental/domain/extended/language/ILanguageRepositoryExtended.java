package com.fastcode.dvdrental.domain.extended.language;

import com.fastcode.dvdrental.domain.core.language.ILanguageRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("languageRepositoryExtended")
public interface ILanguageRepositoryExtended extends ILanguageRepository {
    //Add your custom code here
}
