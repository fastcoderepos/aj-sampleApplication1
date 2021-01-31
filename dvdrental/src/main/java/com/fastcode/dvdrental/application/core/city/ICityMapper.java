package com.fastcode.dvdrental.application.core.city;

import com.fastcode.dvdrental.application.core.city.dto.*;
import com.fastcode.dvdrental.domain.core.city.CityEntity;
import com.fastcode.dvdrental.domain.core.country.CountryEntity;
import java.time.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface ICityMapper {
    CityEntity createCityInputToCityEntity(CreateCityInput cityDto);

    @Mappings(
        {
            @Mapping(source = "entity.country.countryId", target = "countryId"),
            @Mapping(source = "entity.country.country", target = "countryDescriptiveField"),
        }
    )
    CreateCityOutput cityEntityToCreateCityOutput(CityEntity entity);

    CityEntity updateCityInputToCityEntity(UpdateCityInput cityDto);

    @Mappings(
        {
            @Mapping(source = "entity.country.countryId", target = "countryId"),
            @Mapping(source = "entity.country.country", target = "countryDescriptiveField"),
        }
    )
    UpdateCityOutput cityEntityToUpdateCityOutput(CityEntity entity);

    @Mappings(
        {
            @Mapping(source = "entity.country.countryId", target = "countryId"),
            @Mapping(source = "entity.country.country", target = "countryDescriptiveField"),
        }
    )
    FindCityByIdOutput cityEntityToFindCityByIdOutput(CityEntity entity);

    @Mappings(
        {
            @Mapping(source = "country.country", target = "country"),
            @Mapping(source = "foundCity.cityId", target = "cityCityId"),
        }
    )
    GetCountryOutput countryEntityToGetCountryOutput(CountryEntity country, CityEntity foundCity);
}
