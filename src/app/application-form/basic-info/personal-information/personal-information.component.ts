import { Component, Input, OnInit } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'
import { countries } from 'typed-countries'
import { FormArray, FormBuilder, Validators } from '@angular/forms'
import { DropDownList } from '../../../../models/application-form-interface'
import { birthPlaceList, applyLocationList, socialMediaList } from '../../dropdownLists'

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  @Input() isSubmit: Boolean
  basicInfoTab = this.applicationFormService.applicationForm.get('infoTab')
  DivorcedForm = this.basicInfoTab.get('DivorcedForm') as FormArray
  otherEmailArray = this.basicInfoTab.get('otherEmailArray') as FormArray
  socialMediaArray = this.basicInfoTab.get('socialMediaArray') as FormArray
  additionalSocialMediaArray = this.basicInfoTab.get('additionalSocialMediaArray') as FormArray
  additionalNamesArray = this.basicInfoTab.get('additionalNamesArray') as FormArray
  countryList: any[] = []
  isAdditionalInfo: Boolean = false
  today = new Date().getDate()
  myFilter: any
  labelPosition = []
  maritalStatusList = []
  birthPlaceList: DropDownList[] = []
  applyLocationList: DropDownList[] = []
  socialMediaList: DropDownList[] = []
  constructor(public applicationFormService: ApplicationFormService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.birthPlaceList = birthPlaceList
    this.applyLocationList = applyLocationList
    this.socialMediaList = socialMediaList
    this.countryList = countries
    this.maritalStatusList.push(
      { val: 'SINGLE' },
      { val: 'MARRIED' },
      { val: 'COMMON LAW MARRIAGE' },
      { val: 'CIVIL UNION / DOMESTIC PARTNERSHIP' },
      { val: 'WIDOWED' },
      { val: 'DIVORCED' },
      { val: 'SEPARATED' },
      { val: 'OTHER' },
    )
    console.log('length -> ' + this.socialMediaArray.length)
    if(this.socialMediaArray.length === 0)
      this.addSocialMedia()
  }
  onChangeUsedOtherEmail() {
    if (this.basicInfoTab.get('usedOtherEmail').value === 'yes') {
      this.addOtherEmail()
    } else if (this.basicInfoTab.get('usedOtherEmail').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab', ['otherEmailArray'], true)
    }
  }

  onChangeAdditionalSocialMedia() {
    if (this.basicInfoTab.get('additionalSocialMedia').value === 'yes') {
      this.addAdditionalSocialMedia()
    } else if (this.basicInfoTab.get('additionalSocialMedia').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab', ['additionalSocialMediaArray'], true)
    }
  }

  onChangeOtherEmailArray(value: Boolean, index) {
    if (value === true) {
      this.addOtherEmail()
    } else {
      this.otherEmailArray.removeAt(index)
    }
  }

  onChangeSocialMediaArray(value: Boolean, index) {
    if (value === true) {
      this.addSocialMedia()
    } else {
      this.socialMediaArray.removeAt(index)
    }
  }

  onChangeAdditionalSocialMediaArray(value: Boolean, index) {
    if (value === true) {
      this.addAdditionalSocialMedia()
    } else {
      this.additionalSocialMediaArray.removeAt(index)
    }
  }

  addSocialMedia() {
    this.socialMediaArray.push(this.fb.group({
      socialMediaProvider: ['', Validators.required],
      socialMediaIdentifier: ['', Validators.required]
    }))
  }

  addAdditionalSocialMedia() {
    this.additionalSocialMediaArray.push(this.fb.group({
      additionalSocialMediaPlatform: ['', Validators.required],
      additionalSocialMediaHandle: ['', Validators.required]
    }))
  }

  addOtherEmail() {
    this.otherEmailArray.push(this.fb.group({
      otherEmail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]]
    })) 
  }
  
  onChangeTelCode() {
    if (this.basicInfoTab.get('havetelecode').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab', ['telecodeGivenNames', 'telecodeSurnames'])
    }
  }

  onChangeHaveOtherNames() {
    if (this.basicInfoTab.get('haveOtherNames').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab', ['additionalNamesArray'], true)
    } else if(this.basicInfoTab.get('haveOtherNames').value === 'yes'){
      this.addOtherNames()
    }
  }

  validateDateTime() {
    const today = new Date()
    const selected = this.basicInfoTab.get('dateOfBirth').value
    if (selected && selected >= today) {
      this.basicInfoTab.get('dateOfBirth').setErrors({ 'invalid': true })
    }
  }

  validateSpouseDateOfBirth() {
    const today = new Date()
    const selected = this.basicInfoTab.get('spouseDateOfBirth').value
    if (selected && selected >= today) {
      this.basicInfoTab.get('spouseDateOfBirth').setErrors({ 'invalid': true })
    }
  }

  addRow() {
    this.DivorcedForm.push(this.fb.group({
      numberOfFormerSpouses: ['', Validators.required],
      spouseGivenName: ['', Validators.required],
      spouseSurName: ['', Validators.required],
      spouseDateOfBirth: ['', Validators.required],
      spouseCountryName: ['', Validators.required],
      spouseCountryOfBirth: ['', Validators.required],
      spouseCityOfBirth: ['', Validators.required],
      marriageStartDate: ['', Validators.required],
      marriageEndDate: ['', Validators.required],
      howMarriageEnded: ['', Validators.required],
      countryRegionMarriageWasTerminated: ['', Validators.required],
    }))
  }

  onChangeDivorcedForm(val: Boolean, index: number) {
    if (val === true) {
      this.addRow()
    } else {
      this.deleteRow(index)
    }
  }

  deleteRow(index) {
    this.DivorcedForm.removeAt(index)
  }

  onChangeMaritalStatus() {
    if (this.basicInfoTab.get('maritalStatus').value !== 'MARRIED' ||
      this.basicInfoTab.get('maritalStatus').value !== 'COMMON LAW MARRIAGE' ||
      this.basicInfoTab.get('maritalStatus').value !== 'CIVIL UNION / DOMESTIC PARTNERSHIP' ||
      this.basicInfoTab.get('maritalStatus').value !== 'SEPARATED'
    ) {
      this.basicInfoTab.get('spouseGivenName').setErrors(null)
      this.basicInfoTab.get('spouseSurName').setErrors(null)
      this.basicInfoTab.get('spouseDateOfBirth').setErrors(null)
      this.basicInfoTab.get('spouseNationality').setErrors(null)
      this.basicInfoTab.get('spouseCountryOfBirth').setErrors(null)
      this.basicInfoTab.get('spouseCityOfBirth').setErrors(null)
      this.basicInfoTab.get('spouseAddressType').setErrors(null)
      this.basicInfoTab.get('spouseAddress').setErrors(null)
      this.basicInfoTab.get('spouseCity').setErrors(null)
      this.basicInfoTab.get('spouseCountry').setErrors(null)
      this.applicationFormService.resetFormControls('infoTab', ['spouseGivenName', 'spouseSurName', 'spouseDateOfBirth', 'spouseNationality', 'spouseCountryOfBirth', 'spouseCityOfBirth', 'spouseAddressType', 'spouseAddress', 'spouseCity', 'spouseCountry'])
    }
    if (this.basicInfoTab.get('maritalStatus').value === 'DIVORCED') {
      this.applicationFormService.resetFormControls('infoTab', ['DivorcedForm'], true)
      if (!this.DivorcedForm.length) { this.addRow() }
    }
  }

  onChangeSpouseAddressType() {
    if (this.basicInfoTab.get('spouseAddressType').value !== 'Other (Specify Address)') {
      this.basicInfoTab.get('spouseAddress').setErrors(null)
      this.basicInfoTab.get('spouseCity').setErrors(null)
      this.basicInfoTab.get('spouseCountry').setErrors(null)
      this.applicationFormService.resetFormControls('infoTab',['spouseAddress','spouseCity','spouseCountry','spouseState','spouseZIPOrPostalCode','spouseCountry'])
    }
  }

  onChangeAdditionalNamesArray(value: Boolean, index) {
    if (value === true) {
      this.addOtherNames()
    } else {
      this.otherEmailArray.removeAt(index)
    }
  }

  addOtherNames() {
    this.additionalNamesArray.push(this.fb.group({
      additionalGivenName: ['', Validators.required],
      additionalSurname: ['', Validators.required]
    }))
  }
}
