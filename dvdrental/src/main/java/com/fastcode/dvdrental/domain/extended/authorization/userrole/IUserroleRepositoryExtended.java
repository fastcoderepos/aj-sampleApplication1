package com.fastcode.dvdrental.domain.extended.authorization.userrole;

import com.fastcode.dvdrental.domain.core.authorization.userrole.IUserroleRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("userroleRepositoryExtended")
public interface IUserroleRepositoryExtended extends IUserroleRepository {
    //Add your custom code here
}
