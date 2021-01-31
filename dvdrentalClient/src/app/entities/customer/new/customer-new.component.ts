import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { AddressService } from 'src/app/entities/address/address.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent extends BaseNewComponent<ICustomer> implements OnInit {
  title: string = 'New Customer';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CustomerNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public customerService: CustomerService,
    public errorService: ErrorService,
    public addressService: AddressService,
    public globalPermissionService: GlobalPermissionService
  ) {
    super(
      formBuilder,
      router,
      route,
      dialog,
      dialogRef,
      data,
      global,
      pickerDialogService,
      customerService,
      errorService
    );
  }

  ngOnInit() {
    this.entityName = 'Customer';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      activebool: [false, Validators.required],
      email: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      storeId: ['', Validators.required],
      addressId: ['', Validators.required],
      addressDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'activebool',
        label: 'activebool',
        isRequired: true,
        isAutoGenerated: false,
        type: 'boolean',
      },
      {
        name: 'email',
        label: 'email',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'firstName',
        label: 'first Name',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'lastName',
        label: 'last Name',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'storeId',
        label: 'store Id',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
    ];
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'addressId',
            value: undefined,
            referencedkey: 'addressId',
          },
        ],
        isParent: false,
        table: 'address',
        type: 'ManyToOne',
        service: this.addressService,
        label: 'address',
        descriptiveField: 'addressDescriptiveField',
        referencedDescriptiveField: 'addressId',
      },
    ];
    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let customer = this.itemForm.getRawValue();
    super.onSubmit(customer);
  }
}
