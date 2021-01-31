import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FilmService } from '../film.service';
import { IFilm } from '../ifilm';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { LanguageService } from 'src/app/entities/language/language.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.scss'],
})
export class FilmNewComponent extends BaseNewComponent<IFilm> implements OnInit {
  title: string = 'New Film';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FilmNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public filmService: FilmService,
    public errorService: ErrorService,
    public languageService: LanguageService,
    public globalPermissionService: GlobalPermissionService
  ) {
    super(formBuilder, router, route, dialog, dialogRef, data, global, pickerDialogService, filmService, errorService);
  }

  ngOnInit() {
    this.entityName = 'Film';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      description: [''],
      length: [''],
      rating: [''],
      releaseYear: [''],
      rentalDuration: ['', Validators.required],
      rentalRate: ['', Validators.required],
      replacementCost: ['', Validators.required],
      title: ['', Validators.required],
      languageId: ['', Validators.required],
      languageDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'description',
        label: 'description',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'length',
        label: 'length',
        isRequired: false,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'rating',
        label: 'rating',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'releaseYear',
        label: 'release Year',
        isRequired: false,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'rentalDuration',
        label: 'rental Duration',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'rentalRate',
        label: 'rental Rate',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'replacementCost',
        label: 'replacement Cost',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'title',
        label: 'title',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
    ];
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'languageId',
            value: undefined,
            referencedkey: 'languageId',
          },
        ],
        isParent: false,
        table: 'language',
        type: 'ManyToOne',
        service: this.languageService,
        label: 'language',
        descriptiveField: 'languageDescriptiveField',
        referencedDescriptiveField: 'name',
      },
    ];
    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let film = this.itemForm.getRawValue();
    super.onSubmit(film);
  }
}
