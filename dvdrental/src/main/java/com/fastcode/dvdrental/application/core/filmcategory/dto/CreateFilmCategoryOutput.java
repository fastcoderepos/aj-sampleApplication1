package com.fastcode.dvdrental.application.core.filmcategory.dto;

import java.time.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateFilmCategoryOutput {

    private Integer categoryId;
    private Integer filmId;
    private String categoryDescriptiveField;
    private String filmDescriptiveField;
}
