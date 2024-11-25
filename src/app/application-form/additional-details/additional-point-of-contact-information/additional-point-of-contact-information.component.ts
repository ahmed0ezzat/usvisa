import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder, Validators } from '@angular/forms'
import { ApplicationFormService } from '../../application-form-service.service'
import { countries } from 'typed-countries'

@Component({
  selector: 'app-additional-point-of-contact-information',
  templateUrl: './additional-point-of-contact-information.component.html',
  styleUrls: ['./additional-point-of-contact-information.component.scss']
})
export class AdditionalPointOfContactInformationComponent implements OnInit {
  additionalDetailsTab = this.applicationFormService.applicationForm.get('additionalDetailsTab')
  @Input() isSubmit: Boolean
  contactsForm =  this.additionalDetailsTab.get('contactsForm') as FormArray;
  formsCount: number = 2
  countryList: any[] = []
  constructor(private applicationFormService: ApplicationFormService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.countryList = countries
    if (!this.contactsForm.value.length) {
      for (let i = 0; i < this.formsCount; i++) {
        this.addRow()
      }
    }
  }

  addRow() {
    this.contactsForm.push(
      this.fb.group(
        {
          contactGivenNames: ['', Validators.required],
          contactSurnames: ['', Validators.required],
          schoolPhoneNumber: ['', Validators.required],
          email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required,], null,],
          streetAddress: ['', Validators.required],
          city: ['', Validators.required],
          apartmentSuiteUnitNumber: ['', null],
          ZIPOrPostalCode: ['', null],
          country: ['', Validators.required],
          stateProvince: ['', null],
        }
      )
    )
  }

  onChangeAddContact(val: Boolean, index: number) {
    if (val === true) {
      this.addRow()
    } else {
      this.deleteRow(index)
    }
  }

  deleteRow(index) {
    this.contactsForm.removeAt(index)
  }

}
