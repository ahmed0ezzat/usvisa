import { Component, Input, OnInit } from '@angular/core';
import { ApplicationFormService } from '../../application-form-service.service';
import { countries } from 'typed-countries';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { otherNationalityCountryList } from '../../dropdownLists'
import { DropDownList } from '../../../../models/application-form-interface';

@Component({
  selector: 'app-additional-nationalities',
  templateUrl: './additional-nationalities.component.html',
  styleUrls: ['./additional-nationalities.component.scss']
})
export class AdditionalNationalitiesComponent implements OnInit {
  @Input() isSubmit: Boolean;
  basicInfoTab = this.applicationFormService.applicationForm.get('infoTab');
  countryList = [] as DropDownList[]
  isAdditionalInfo: Boolean = false;
  additionalNationality = this.basicInfoTab.get('additionalNationality') as FormArray;

  constructor(private applicationFormService: ApplicationFormService,private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.countryList = otherNationalityCountryList;
  }

  onChangeOtherResidentCountry() {
    if (this.basicInfoTab.get('isOtherResidentCountry').value === 'no') {
      this.basicInfoTab.get('residentCountryName').setErrors(null);
      this.applicationFormService.resetFormControls('infoTab',['residentCountryName'])
    }
  }

  addRow() {
    this.additionalNationality.push(
      this.fb.group(
        {
          additionalPassportNumber: [''],
          additionalCountryName: ['', Validators.required],
        }
      )
    )
  }

  deleteRow(index) {
    this.additionalNationality.removeAt(index)
  }
  
  onChangeAdditionalNationalities(val: Boolean, index: number) {
    if (val === true) {
      this.addRow()
    } else {
      this.deleteRow(index)
    }
  }

  onChangeIsOtherNationality() {
    if( this.basicInfoTab.get('isOtherNationality').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab',['additionalNationality'], true)
    }else{
      if(this.additionalNationality.value && this.additionalNationality.value.length == 0){this.addRow()}
    }
  }
}
