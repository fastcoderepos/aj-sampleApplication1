package com.fastcode.dvdrental.application.core.city.dto;

import java.time.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FindCityByIdOutput {

    private String city;
    private Integer cityId;
    private Integer countryId;
    private String countryDescriptiveField;
    private Long versiono;
}
