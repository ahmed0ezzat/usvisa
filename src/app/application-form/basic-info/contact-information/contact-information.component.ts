import { Component, OnInit, Input } from '@angular/core';
import { ApplicationFormService } from '../../application-form-service.service';
import { countries } from 'typed-countries';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  @Input() isSubmit: Boolean;
  countryList: any[] = [];
  basicInfoTab = this.applicationFormService.applicationForm.get('infoTab');
  additionalPhoneNumbersArray = this.basicInfoTab.get('additionalPhoneNumbersArray') as FormArray

  constructor(private applicationFormService: ApplicationFormService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.countryList = countries;
  }

  onChangeisMailingAddressDifferentFromHomeAddress() {
    if (this.basicInfoTab.get('isMailingAddressDifferentFromHomeAddress').value === 'no') {
      this.applicationFormService.resetFormControls('infoTab',['mailingStreetAddress1','mailingStreetAddress2','mailingCity','mailingCountry','mailingState','mailingZIPOrPostalCode'])
    }
  }

  onChangeUsedOtherPhoneNumbers() {
    if (this.basicInfoTab.get('usedOtherPhoneNumbers').value === 'yes') {
      this.addAdditionalPhoneNumber()
    } else {
      this.applicationFormService.resetFormControls('infoTab', ['additionalPhoneNumbersArray'], true)
    }
  }

  addAdditionalPhoneNumber() {
    this.additionalPhoneNumbersArray.push(this.fb.group({
      additionalPhoneNumber: ['', Validators.pattern('^[0-9\s]{5,15}$')]
    }))
  }

  onChangeAdditionalPhoneNumbersArray(value: Boolean, index) {
    if (value === true) {
      this.addAdditionalPhoneNumber()
    } else {
      this.additionalPhoneNumbersArray.removeAt(index)
    }
  }

}
