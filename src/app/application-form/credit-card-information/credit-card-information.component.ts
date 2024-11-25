import { Component, OnInit } from '@angular/core';
import { ApplicationFormService } from '../../application-form/application-form-service.service';

@Component({
  selector: 'app-credit-card-information',
  templateUrl: './credit-card-information.component.html',
  styleUrls: ['./credit-card-information.component.scss']
})
export class CreditCardInformationComponent implements OnInit {
  creditInfo = this.applicationFormService.creditCardInformation
  countryList = []
  months = []
  years = []
  constructor(private applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
      this.creditInfo.get('cardNumber').reset()
      this.creditInfo.get('expirationMonth').reset()
      this.creditInfo.get('expirationYear').reset()
      this.creditInfo.get('securityCode').reset()
      this.creditInfo.get('cardNumber').setErrors(null)
      this.creditInfo.get('expirationMonth').setErrors(null)
      this.creditInfo.get('expirationYear').setErrors(null)
      this.creditInfo.get('securityCode').setErrors(null)
      this.applicationFormService.paymentType$.next('CASH')
    
    for (let i = 1; i < 13; i++) {
      if (i <= 9) {
        this.months.push({ val: `0${i}` })
      } else {
        this.months.push({ val: i })
      }
    }

    const thisYear = new Date().getFullYear()

    for (let i = Number(thisYear); i <= Number(thisYear) + 20; i++) {
      this.years.push({ val: i })
    }
    if (this.creditInfo.get('payInCash').value === 'yes') {
      this.applicationFormService.paymentType$.next('CASH')
    }else {
      this.applicationFormService.paymentType$.next('')
    }
  }

  onChangePayInCash() {
    if (this.creditInfo.get('payInCash').value === 'yes') {
      this.creditInfo.get('cardNumber').reset()
      this.creditInfo.get('expirationMonth').reset()
      this.creditInfo.get('expirationYear').reset()
      this.creditInfo.get('securityCode').reset()
      this.creditInfo.get('cardNumber').setErrors(null)
      this.creditInfo.get('expirationMonth').setErrors(null)
      this.creditInfo.get('expirationYear').setErrors(null)
      this.creditInfo.get('securityCode').setErrors(null)
      this.applicationFormService.paymentType$.next('CASH')
    }else {
      this.applicationFormService.paymentType$.next('')
    }
  }

}
