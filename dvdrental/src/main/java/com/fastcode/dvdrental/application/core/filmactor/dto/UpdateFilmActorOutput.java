package com.fastcode.dvdrental.application.core.filmactor.dto;

import java.time.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateFilmActorOutput {

    private Integer actorId;
    private Integer filmId;
    private String actorDescriptiveField;
    private String filmDescriptiveField;
}