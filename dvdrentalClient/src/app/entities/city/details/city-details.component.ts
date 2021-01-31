import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { CityService } from '../city.service';
import { ICity } from '../icity';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { CountryService } from 'src/app/entities/country/country.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent extends BaseDetailsComponent<ICity> implements OnInit {
  title = 'City';
  parentUrl = 'city';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public cityService: CityService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService,
    public countryService: CountryService,
    public globalPermissionService: GlobalPermissionService
  ) {
    super(formBuilder, router, route, dialog, global, pickerDialogService, cityService, errorService);
  }

  ngOnInit() {
    this.entityName = 'City';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      city: ['', Validators.required],
      cityId: [{ value: '', disabled: true }, Validators.required],
      countryId: ['', Validators.required],
      countryDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'city',
        label: 'city',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
    ];
  }

  onItemFetched(item: ICity) {
    this.item = item;
    this.itemForm.patchValue(item);
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'cityId',
            value: undefined,
            referencedkey: 'cityId',
          },
        ],
        isParent: true,
        table: 'address',
        type: 'OneToMany',
        label: 'address',
      },
      {
        column: [
          {
            key: 'countryId',
            value: undefined,
            referencedkey: 'countryId',
          },
        ],
        isParent: false,
        table: 'country',
        type: 'ManyToOne',
        label: 'country',
        service: this.countryService,
        descriptiveField: 'countryDescriptiveField',
        referencedDescriptiveField: 'country',
      },
    ];

    this.childAssociations = this.associations.filter((association) => {
      return association.isParent;
    });

    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let city = this.itemForm.getRawValue();
    super.onSubmit(city);
  }
}
