import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FilmCategoryService } from '../film-category.service';
import { IFilmCategory } from '../ifilm-category';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { CategoryService } from 'src/app/entities/category/category.service';
import { FilmService } from 'src/app/entities/film/film.service';

@Component({
  selector: 'app-film-category-new',
  templateUrl: './film-category-new.component.html',
  styleUrls: ['./film-category-new.component.scss'],
})
export class FilmCategoryNewComponent extends BaseNewComponent<IFilmCategory> implements OnInit {
  title: string = 'New FilmCategory';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FilmCategoryNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public filmCategoryService: FilmCategoryService,
    public errorService: ErrorService,
    public categoryService: CategoryService,
    public filmService: FilmService,
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
      filmCategoryService,
      errorService
    );
  }

  ngOnInit() {
    this.entityName = 'FilmCategory';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
      filmId: ['', Validators.required],
      categoryDescriptiveField: [''],
      filmDescriptiveField: [''],
    });

    this.fields = [];
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'categoryId',
            value: undefined,
            referencedkey: 'categoryId',
          },
        ],
        isParent: false,
        table: 'category',
        type: 'ManyToOne',
        service: this.categoryService,
        label: 'category',
        descriptiveField: 'categoryDescriptiveField',
        referencedDescriptiveField: 'name',
      },
      {
        column: [
          {
            key: 'filmId',
            value: undefined,
            referencedkey: 'filmId',
          },
        ],
        isParent: false,
        table: 'film',
        type: 'ManyToOne',
        service: this.filmService,
        label: 'film',
        descriptiveField: 'filmDescriptiveField',
        referencedDescriptiveField: 'title',
      },
    ];
    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let filmCategory = this.itemForm.getRawValue();
    super.onSubmit(filmCategory);
  }
}
