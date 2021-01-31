package com.fastcode.dvdrental.domain.extended.payment;

import com.fastcode.dvdrental.domain.core.payment.IPaymentRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("paymentRepositoryExtended")
public interface IPaymentRepositoryExtended extends IPaymentRepository {
    //Add your custom code here
}
