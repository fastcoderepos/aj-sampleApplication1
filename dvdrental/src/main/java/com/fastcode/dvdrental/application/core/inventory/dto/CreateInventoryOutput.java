package com.fastcode.dvdrental.application.core.inventory.dto;

import java.time.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateInventoryOutput {

    private Integer inventoryId;
    private Short storeId;
    private Integer filmId;
    private String filmDescriptiveField;
}
