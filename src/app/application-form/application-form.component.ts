import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ApplicationFormService } from '../application-form/application-form-service.service';
import {
  infoTab,
  tripInfoTab,
  additionalDetailsTab,
  securityTab,
  formAuthorizationTab,
} from './templates';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { successEmail } from './templates';
import { of, Subscription } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

const chargeCreditCardURL = environment.chargeCreditUrl;
const sendSuccessEmailUrl = environment.confirmationEmailEndpointUrl;

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear = true;
  isSubmit: Boolean = false;
  isSubmitPay: Boolean = false;
  visaType: string;
  mainTab = this.applicationFormService.applicationForm;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 20;
  sub1 = new Subscription();
  sub2 = new Subscription();
  formStatus: string = '';
  submitBtn: string = '';

  constructor(
    public applicationFormService: ApplicationFormService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute,
    private route: Router,
    private http: HttpClient
  ) {
    this.sub1 = this.router.queryParams.subscribe((param) => {
      if (param && param.type) {
        this.applicationFormService.visaType$.next(param.type);
        this.visaType = param.type;
      } else {
        this.route.navigate(['/']);
      }
    });

    this.sub2 = this.applicationFormService.paymentType$.subscribe((val) => {
      if (val && val !== '') {
        this.formStatus = val;
        this.submitBtn = 'Submit';
      } else {
        this.formStatus = 'Submitted';
        this.submitBtn = 'Submit & Pay';
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  next(tabName: string) {
    this.isSubmit = true;
    switch (tabName) {
      case 'infoTab':
        this.infoTab();
        break;
      case 'tripInfoTab':
        this.tripInfoTab();
        break;
      case 'additionalDetailsTab':
        this.additionalDetailsTab();
        break;
      case 'securityTab':
        this.securityTab();
        break;
      case 'submit':
        this.formSubmit();
        break;
    }
  }

  infoTab() {
    this.applicationFormService.onChangeRadioButton('infoTab', infoTab);
    this.applicationFormService.isSubmitInfoTab$.next(true);
    this.stepper.next();
    window.scrollTo(0, 0);
  }
  tripInfoTab() {
    this.applicationFormService.onChangeRadioButton('tripInfoTab', tripInfoTab);
    console.log(this.applicationFormService.applicationForm.get('tripInfoTab'));
    this.applicationFormService.isSubmitTripInfo$.next(true);
    this.stepper.next();
    window.scrollTo(0, 0);
  }
  additionalDetailsTab() {
    this.applicationFormService.onChangeRadioButton(
      'additionalDetailsTab',
      additionalDetailsTab
    );
    console.log(
      this.applicationFormService.applicationForm.get('additionalDetailsTab')
    );
    this.bypassOptionalFields(this.visaType);
    this.applicationFormService.isSubmitAdditionalDetails$.next(true);
    this.stepper.next();
    window.scrollTo(0, 0);
  }
  securityTab() {
    this.applicationFormService.onChangeRadioButton('securityTab', securityTab);
    console.log(this.applicationFormService.applicationForm.get('securityTab'));
    this.applicationFormService.isSubmitSecurity$.next(true);
    this.stepper.next();
    window.scrollTo(0, 0);
  }
  bypassOptionalFields(type: string) {
    if (type !== 'student') {
      const values = [
        'SEVISID',
        'SEVISInfoSchoolName',
        'SEVISInfoCourseOfStudy',
        'SEVISInfoStreetAddress',
        'SEVISInfoCity',
        'SEVISInfoApartmentSuiteUnitNumber',
        'SEVISInfoZIPOrPostalCode',
        'SEVISInfoCountry',
        'SEVISInfoStateProvince',
      ];
      values.forEach((element) => {
        this.mainTab.get('additionalDetailsTab').get(element).setErrors(null);
      });
    }
  }

  /**
   * ***********************************
   *      DO NOT COPY TO DASHBOARD
   * ***********************************
   */
  formSubmit() {
    /** Convert date */
    this.applicationFormService.onChangeRadioButton(
      'formAuthorizationTab',
      formAuthorizationTab
    );
    this.applicationFormService.isSubmitFormAuthorizationTab$.next(true);
    if (this.applicationFormService.creditCardInformation.valid) {
      this.stepper.next();
      if (this.formStatus === 'CASH') {
        this.submitOnly();
      } else {
        this.submitAndPay();
      }
    } else {
      this.applicationFormService.creditCardInformation.markAllAsTouched();
    }
  }

  submitOnly() {
    this.isSubmitPay = true;
    this.snackBar.open(
      'Your submission is being processed, You will get an email when processing is completed.',
      'Close',
      {
        duration: 6000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      }
    );
    this.insertApplicationForm();
    this.isSubmitPay = false;
  }

  submitAndPay() {
    this.isSubmitPay = true;
    this.processTransaction()
      .toPromise()
      .then((resp: any) => {
        console.log('Payment response -->', resp);
        this.isSubmitPay = false;
        if (resp.includes("responsetext=SUCCESS") || resp.includes("Transaction received and approved")) {
          this.snackBar.open(
            'Thanks for your payment, your submission is being processed, You will get an email when processing is completed.',
            'Close',
            {
              duration: 6000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            }
          );
          this.insertApplicationForm()
        } else {
          this.snackBar.open(
            'We could not process your payment, please try another payment method or contact us to further assist you.',
            'Close',
            {
              duration: 7000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            }
          );
        }
      })
      .catch((e) => {
        this.isSubmitPay = false;
        console.log(e);
        this.snackBar.open(
          'Error accursed while inserted your application form, Please try again or contact your administrator if problem persists.',
          'Close',
          {
            duration: 8000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          }
        );
      });
  }

  processTransaction() {
    const paymentInfo = this.applicationFormService.creditCardInformation.value
    const expDate = paymentInfo.expirationMonth + paymentInfo.expirationYear.toString().slice(-2)

    const cardData = {
      ccnumber: paymentInfo.cardNumber,
      cvv: paymentInfo.securityCode,
      ccexp: expDate,
      amount: paymentInfo.amount && paymentInfo.amount !== '' ? paymentInfo.amount.toString() : '1240.00'
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(chargeCreditCardURL, cardData, {
      responseType: 'text',
      headers,
    });
  }

  insertApplicationForm() {
    this.mainTab.value.visaType = this.visaType;
    this.mainTab.value.submitDate = new Date().toDateString();
    this.mainTab.value.status = this.formStatus;
    const paymentInfo = this.applicationFormService.creditCardInformation.value;
    this.mainTab.value.paymentInfo = {
      cardNumber: paymentInfo.cardNumber,
      expirationMonth: paymentInfo.expirationMonth,
      expirationYear: paymentInfo.expirationYear,
      amount: '100.00',
    };

    this.applicationFormService
      .insertApplicationForm()
      .then((res) => {
        console.log('submit res ->', res);
        this.route.navigate(['/']);
        //Do Not Delete
        //localStorage.removeItem('applicationForm')
        // this.applicationFormService.applicationForm.reset()
        // this.applicationFormService.creditCardInformation.reset()
        this.sendConfirmationEmail();
      })
      .catch((err) => {
        console.log('Error While inserting new Application Form =>', err);
        this.snackBar.open(
          'Error accursed while inserted your data, Please try again or contact your administrator if problem persists.',
          'Close',
          {
            duration: 6000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          }
        );
      });
  }

  sendConfirmationEmail() {
    console.log(
      'user mail' +
        this.applicationFormService.applicationForm.get('infoTab').get('email')
          .value
    );
    const userEmail = this.applicationFormService.applicationForm
      .get('infoTab')
      .get('email').value;
    let email = successEmail;
    email.toEmail = userEmail;
    this.http
      .post(sendSuccessEmailUrl, email)
      .toPromise()
      .then(
        (res) => {
          console.log('res==', res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
