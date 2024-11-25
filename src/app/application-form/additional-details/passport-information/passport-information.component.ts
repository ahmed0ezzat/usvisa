import { Component, Input, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'
import { ApplicationFormService } from '../../application-form-service.service'
import { countries } from 'typed-countries'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-passport-information',
  templateUrl: './passport-information.component.html',
  styleUrls: ['./passport-information.component.scss']
})
export class PassportInformationComponent implements OnInit {
  additionalDetailsTab = this.applicationFormService.applicationForm.get('additionalDetailsTab')
  sub1 = new Subscription()
  @Input() isSubmit: Boolean
  Passports: any[] = []
  countryList: any[] = []
  visaType :string


  constructor(private applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
    this.sub1 = this.applicationFormService.visaType$.subscribe(val => this.visaType = val)
    this.Passports.push(
      { val: 'Regular' },
      { val: 'Diplomatic' },
      { val: 'Official' },
      { val: 'Laissez-Passer' },
      { val: 'Other' },
    )
    this.countryList = countries
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

  onChangeRadioButton(formControlName: string, fields: Array<string>) {
    if (this.additionalDetailsTab.get(formControlName).value === 'no') {
      this.applicationFormService.resetFormControls('additionalDetailsTab', fields)
      fields.forEach(element => {
        this.additionalDetailsTab.get(element).setErrors(null)

      });
    }
  }
  checkPassportType() {
    if (this.additionalDetailsTab.get('passportType').value) {
      if (this.additionalDetailsTab.get('passportType').value === 'Other') {
        this.additionalDetailsTab.get('otherPassportType').setValidators(Validators.required)
      }
    }
  }
}
