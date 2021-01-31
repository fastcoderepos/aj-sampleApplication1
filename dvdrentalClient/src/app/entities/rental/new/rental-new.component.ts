import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RentalService } from '../rental.service';
import { IRental } from '../irental';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { CustomerService } from 'src/app/entities/customer/customer.service';
import { InventoryService } from 'src/app/entities/inventory/inventory.service';
import { StaffService } from 'src/app/entities/staff/staff.service';

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.scss'],
})
export class RentalNewComponent extends BaseNewComponent<IRental> implements OnInit {
  title: string = 'New Rental';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RentalNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public rentalService: RentalService,
    public errorService: ErrorService,
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public staffService: StaffService,
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
      rentalService,
      errorService
    );
  }

  ngOnInit() {
    this.entityName = 'Rental';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      customerDescriptiveField: ['', Validators.required],
      inventoryId: ['', Validators.required],
      inventoryDescriptiveField: ['', Validators.required],
      staffId: ['', Validators.required],
      staffDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'rentalDate',
        label: 'rental Date',
        isRequired: false,
        isAutoGenerated: false,
      },
      {
        name: 'returnDate',
        label: 'return Date',
        isRequired: false,
        isAutoGenerated: false,
      },
    ];
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'customerId',
            value: undefined,
            referencedkey: 'customerId',
          },
        ],
        isParent: false,
        table: 'customer',
        type: 'ManyToOne',
        service: this.customerService,
        label: 'customer',
        descriptiveField: 'customerDescriptiveField',
        referencedDescriptiveField: 'firstName',
      },
      {
        column: [
          {
            key: 'inventoryId',
            value: undefined,
            referencedkey: 'inventoryId',
          },
        ],
        isParent: false,
        table: 'inventory',
        type: 'ManyToOne',
        service: this.inventoryService,
        label: 'inventory',
        descriptiveField: 'inventoryDescriptiveField',
        referencedDescriptiveField: 'inventoryId',
      },
      {
        column: [
          {
            key: 'staffId',
            value: undefined,
            referencedkey: 'staffId',
          },
        ],
        isParent: false,
        table: 'staff',
        type: 'ManyToOne',
        service: this.staffService,
        label: 'staff',
        descriptiveField: 'staffDescriptiveField',
        referencedDescriptiveField: 'firstName',
      },
    ];
    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let rental = this.itemForm.getRawValue();
    super.onSubmit(rental);
  }
}
