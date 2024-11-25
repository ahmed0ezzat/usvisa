import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ApplicationFormService } from '../../application-form-service.service';

@Component({
  selector: 'app-about-your-parents',
  templateUrl: './about-your-parents.component.html',
  styleUrls: ['./about-your-parents.component.scss']
})
export class AboutYourParentsComponent implements OnInit {
  @Input() isSubmit: Boolean;
  basicInfoTab = this.applicationFormService.applicationForm.get('infoTab');
  USCitizenStatus: any = [];
  relationships: any = [];
  basicInfoRelatives = this.basicInfoTab.get('basicInfoRelatives') as FormArray;
  tempFormGroup = this.fb.group({});
  isAdditionalInfo: Boolean = false;

  constructor(private applicationFormService: ApplicationFormService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.USCitizenStatus.push(
      { val: 'US Citizen' },
      { val: 'U.S. LEGAL PERMANENT RESIDENT (LPR)' },
      { val: 'Non-immigrant' },
      { val: 'Other/I do not know' },
    );
    this.relationships.push(
      { val: 'Sibling' },
      { val: 'Child' },
      { val: 'Spouse' },
      { val: 'Fiance' },
    );
  }

  onChangeFatherDateOfBirth() {
    if (this.basicInfoTab.get('haveFatherDateOfBirth').value === 'no') {
      this.basicInfoTab.get('fatherDateOfBirth').setErrors(null);
      this.applicationFormService.resetFormControls('infoTab',['fatherDateOfBirth'])
    }
  }
  onChangeMotherDateOfBirth() {
    if (this.basicInfoTab.get('haveMotherDateOfBirth').value === 'no') {
      this.basicInfoTab.get('motherDateOfBirth').setErrors(null);
      this.applicationFormService.resetFormControls('infoTab',['motherDateOfBirth'])
    }
  }
  onChangeIsFatherInUSA() {
    if (this.basicInfoTab.get('isFatherInUSA').value === 'no') {
      this.basicInfoTab.get('fatherUSCitizenStatus').setErrors(null);
      this.applicationFormService.resetFormControls('infoTab',['fatherUSCitizenStatus'])
    }
  }

  onChangeIsMotherInUSA() {
    if (this.basicInfoTab.get('isMotherInUSA').value === 'no') {
      this.basicInfoTab.get('motherUSCitizenStatus').setErrors(null);
      this.applicationFormService.resetFormControls('infoTab',['motherUSCitizenStatus'])
    }
  }

  onChangeIsMotherHaveImmediateRelativesInUSA() {
    if (this.basicInfoTab.get('isMotherHaveImmediateRelativesInUSA').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab',['basicInfoRelatives'],true)
    }else {
      if (!this.basicInfoRelatives.value.length) { this.addRow(); }
    }
  }

  validateDateTime(val: string) {
    const today = new Date();
    const selected = this.basicInfoTab.get(val).value;
    if (selected && selected >= today) {
      this.basicInfoTab.get(val).setErrors({ 'invalid': true });
    }
  }

  onChangeIsMotherHaveOtherRelativesInUSA() {
    if (this.basicInfoTab.get('isMotherHaveOtherRelativesInUSA').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab',['explainOtherRelations'])
      this.basicInfoTab.get('explainOtherRelations').setErrors(null);
    }else {
      this.basicInfoTab.get('explainOtherRelations').setValidators(Validators.required)
    }
  }

  onChangeAddInfo(val: Boolean, index: number) {
    if (val === true) {
      this.addRow();
    } else {
      this.deleteRow(index);
    }
  }
  addRow() {
    this.basicInfoRelatives.push(this.fb.group({
      motherRelativeGivenName: ['', Validators.required],
      motherRelativeSurName: ['', Validators.required],
      motherRelativeRelation: ['', Validators.required],
      motherRelativeUSCitizenStatus: ['', Validators.required],
      motherRelativeTelephone: ['', Validators.required],
    }));
  }

  deleteRow(index) {
    this.basicInfoRelatives.removeAt(index);
  }

}
