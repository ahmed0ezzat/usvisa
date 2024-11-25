import { Component, Input, OnInit } from '@angular/core';
import { ApplicationFormService } from '../../application-form-service.service';
import { countries } from 'typed-countries';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-additional-questions',
  templateUrl: './additional-questions.component.html',
  styleUrls: ['./additional-questions.component.scss']
})
export class AdditionalQuestionsComponent implements OnInit {
  @Input() isSubmit: Boolean;
  sub1 = new Subscription()
  additionalDetailsTab = this.applicationFormService.applicationForm.get('additionalDetailsTab');
  countryList: any[] = [];
  workingFields: any[] = [];
  additionalQuestionsRelatives = this.additionalDetailsTab.get('additionalQuestionsRelatives') as FormArray;
  militaryServices = this.additionalDetailsTab.get('militaryServices') as FormArray;
  spokenLanguages = this.additionalDetailsTab.get('spokenLanguages') as FormArray;

  constructor(private applicationFormService: ApplicationFormService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.countryList = countries;
    this.workingFields.push(
      { val: 'Agriculture' },
      { val: 'Artist/Performer' },
      { val: 'Business' },
      { val: 'Communications' },
      { val: 'Computer Science' },
      { val: 'Education' },
      { val: 'Engineering' },
      { val: 'Food Services' },
      { val: 'Government' },
      { val: 'Homemaker' },
      { val: 'Legal Profession' },
      { val: 'Medical/Health' },
      { val: 'Military' },
      { val: 'Natural Sciences' },
      { val: 'Physical Sciences' },
      { val: 'Research' },
      { val: 'Retired' },
      { val: 'Social Science' },
      { val: 'Student' },
      { val: 'Other' },
    );
    this.addSpokenLanguagesRow()
  }
  
  ngOnDestroy(){
    this.sub1.unsubscribe()
  }

  onChangeAreYouCurrentlyWorking() {
    if (this.additionalDetailsTab.get('areYouCurrentlyWorking').value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', [
        'workingField',
        'NameOfEmployer',
        'employerPhoneNumber',
        'WorkingCity',
        'workingCountry',
        'workingStartDate',
        'monthlyIncome',
        'workDutiesDescription',
        'employerStreetAddress1',
        'employerStreetAddress2',
        'ZIPOrPostalCode',
        'StateProvince'
      ])
    } else {
      this.additionalDetailsTab.get('notWorkingExplanation').setErrors(null)
      this.applicationFormService.resetFormControls('additionalDetailsTab', ['notWorkingExplanation'])
    }
  }

  validateDateTime() {
    const today = new Date()
    const selected = this.additionalDetailsTab.get('workingStartDate').value
    if (selected && selected >= today) {
      this.additionalDetailsTab.get('workingStartDate').setErrors({ 'invalid': true });
    }
  }

  onChangeHavePreviouslyEmployed() {
    if (this.additionalDetailsTab.get('havePreviouslyEmployed').value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', ['additionalQuestionsRelatives'], true)
    } else {
      if (this.additionalQuestionsRelatives.value && this.additionalQuestionsRelatives.value.length === 0) { this.addRow(); }
    }
  }

  onChangeHaveEverServedInMilitary() {
    if (this.additionalDetailsTab.get('HaveEverServedInMilitary').value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', ['militaryServices'], true)
    } else {
      if (!this.militaryServices.value.length) { this.addMilitaryServicesRow(); }
    }
  }

  addRow() {
    this.additionalQuestionsRelatives.push(this.fb.group({
      employerName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      jobStartDate: ['', Validators.required],
      jobEndDate: ['', Validators.required],
      jobResponsibilities: ['', Validators.required],
      supervisorGivenName: ['', null],
      supervisorSurName: ['', null],
      phoneNumber: ['', Validators.required],
      PreviousWorkStreetAddress: ['', Validators.required],
      PreviousWorkCity: ['', Validators.required],
      ZIPOrPostalCode: ['', null],
      country: ['', Validators.required],
      StateOrProvince: ['', null],
    }));
  }

  deleteRow(index) {
    this.additionalQuestionsRelatives.removeAt(index);
  }

  onChangeAdditionalQuestion(val: Boolean, index: number) {
    if (val === true) {
      this.addRow();
    } else {
      this.deleteRow(index);
    }
  }

  onChangeHaveAttendedInstitutionAcademic() {
    if (this.additionalDetailsTab.get('haveAttendedInstitutionAcademic').value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', ['highSchoolName',
        'highSchoolCourseOfStudies',
        'highSchoolCity',
        'highSchoolCountry',
        'highSchoolStartDate',
        'highSchoolEndDate',
        'highSchoolStreetAddress',
        'highSchoolZIPOrPostalCode',
        'highSchoolStateProvince'
      ])
    }
  }

  onChangeMilitaryServices(val: Boolean, index: number) {
    if (val === true) {
      this.addMilitaryServicesRow();
    } else {
      this.deleteMilitaryServicesRow(index);
    }
  }

  addMilitaryServicesRow() {
    this.militaryServices.push(this.fb.group({
      country: ['', Validators.required],
      branchOfService: ['', Validators.required],
      rankOrPosition: ['', Validators.required],
      MilitarySpecialty: ['', Validators.required],
      serviceStartDate: ['', Validators.required],
      serviceEndDate: ['', Validators.required],
    }));
  }

  onChangeSpokenLanguages(val: Boolean, index: number) {
    if (val === true) {
      this.addSpokenLanguagesRow();
    } else {
      this.deleteSpokenLanguagesRow(index);
    }
  }

  addSpokenLanguagesRow() {
    this.spokenLanguages.push(this.fb.group({
      language: ['', Validators.required],
    }));
  }

  deleteSpokenLanguagesRow(index) {
    this.spokenLanguages.removeAt(index);
  }

  deleteMilitaryServicesRow(index) {
    this.militaryServices.removeAt(index);
  }

  onChangeRadioButton(formControlName: string, fields: Array<string>) {
    if (this.additionalDetailsTab.get(formControlName).value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', fields)
      fields.forEach(element => {
        this.additionalDetailsTab.get(element).setErrors(null);
      });
    }
  }
  onChangeWorkingField() {
    console.log('Working Field ->' + this.additionalDetailsTab.get('workingField').value)
    if (this.additionalDetailsTab.get('workingField').value !== 'Other') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', ['otherWorkingField'])
    }
  }
}
