import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { usaStates } from 'typed-usa-states';
import { ApplicationFormService } from '../../application-form-service.service';

@Component({
  selector: 'app-past-travel-applications',
  templateUrl: './past-travel-applications.component.html',
  styleUrls: ['./past-travel-applications.component.scss'],
})
export class PastTravelApplicationsComponent implements OnInit {
  @Input() isSubmit: Boolean;
  myFilter: any;
  tripInfoTab = this.applicationFormService.applicationForm.get('tripInfoTab');
  tripTimeArray: any[] = [];
  unitedStatesArray = this.tripInfoTab.get('unitedStatesArray') as FormArray;
  driverLicenseArray = this.tripInfoTab.get('driverLicenseArray') as FormArray;
  usVisasArray = this.tripInfoTab.get('usVisasArray') as FormArray;
  statesList: any[] = [];
  isAdditionalInfo: Boolean = false;
  isAddDriverLicense: Boolean = false;

  constructor(
    public applicationFormService: ApplicationFormService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.tripTimeArray.push(
      { val: 'YEAR(S)' },
      { val: 'MONTH(S)' },
      { val: 'WEEK(S)' },
      { val: 'DAY(S)' },
      { val: 'LESS THAN 24 HOURS' }
    );
    this.statesList = usaStates;
  }

  addUnitedStatusRow() {
    this.unitedStatesArray.push(
      this.fb.group({
        tripDate: ['', Validators.required],
        tripDuration: ['', Validators.required],
        tripTime: ['', Validators.required],
      })
    );
  }

  addDriverLicenseRow() {
    this.driverLicenseArray.push(
      this.fb.group({
        driverLicenseNumber: ['', Validators.required],
        driverLicenseState: ['', Validators.required],
      })
    );
  }
  addUsVisasRow() {
    this.usVisasArray.push(
      this.fb.group({
        DateLastVisaWasIssued: ['', Validators.required],
        expirationDate: ['', Validators.required],
        visaNumber: [''],
        applyingForTheSameTypeOfVisa: ['', Validators.required],
        haveEverBeenTenPrinted: ['', Validators.required],
        applyingInTheSameCountry: ['', Validators.required],
        visaEverBeenCancelledOrRevoked: ['', Validators.required],
        cancellationDate: ['', null],
        pleaseExplain: ['', null],
        visaEverBeenLostOrStolen: ['', Validators.required],
        lostVisaYear: ['', null],
        stolenVisaPleaseExplain: ['', null],
      })
    )
  }

  ifVisaEverBeenCancelledOrRevoked(value, index) {
    if (value === true) {
      this.usVisasArray.controls[index].get('cancellationDate').setValidators(Validators.required);
      this.usVisasArray.controls[index].get('pleaseExplain').setValidators(Validators.required);
    }
  }

  ifVisaEverBeenLostOrStolen(value, index) {
    if (value === true) {
      this.usVisasArray.controls[index].get('lostVisaYear').setValidators(Validators.required);
      this.usVisasArray.controls[index].get('stolenVisaPleaseExplain').setValidators(Validators.required);
    }else {
      this.usVisasArray.controls[index].get('lostVisaYear').reset();
      this.usVisasArray.controls[index].get('lostVisaYear').markAsUntouched();
      this.usVisasArray.controls[index].get('stolenVisaPleaseExplain').reset();
      this.usVisasArray.controls[index].get('stolenVisaPleaseExplain').markAsUntouched();
    }
  }
  onChangeAddVisa(val, index) {
    if (val === true) {
      this.addUsVisasRow()
    } else {
      this.deleteUsVisasRow(index)
    }
  }

  deleteUsVisasRow(index) {
    this.usVisasArray.removeAt(index);
  }
  deleteUnitedStatusRow(index) {
    this.unitedStatesArray.removeAt(index);
  }

  deleteDriverLicenseRow(index) {
    this.driverLicenseArray.removeAt(index);
  }

  onChangeTravelUnitedStatus(val: Boolean, index: number) {
    if (val === true) {
      this.addUnitedStatusRow();
    } else {
      this.deleteUnitedStatusRow(index);
    }
  }

  onChangeDriverLicense(val: Boolean, index: number) {
    if (val === true) {
      this.addDriverLicenseRow();
    } else {
      this.deleteDriverLicenseRow(index);
    }
  }

  onChangeisUnitedStates() {
    if (this.tripInfoTab.get('isUnitedStates').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['unitedStatesArray'], true)
      this.applicationFormService.resetFormControls('tripInfoTab',['driverLicenseArray'], true)
      this.applicationFormService.resetFormControls('tripInfoTab',['hasDriverLicense'])
    }else {
      if (!this.unitedStatesArray.value.length) { this.addUnitedStatusRow(); }
    }
  }

  onChangeisDriverLicense() {
    if (this.tripInfoTab.get('hasDriverLicense').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['driverLicenseArray'],true)
    }else {
      if (!this.driverLicenseArray.value.length) { this.addDriverLicenseRow(); }
    }
  }

  onChangeIssuedUsVisa() {
    if (this.tripInfoTab.get('issuedUsVisa').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['usVisasArray'],true)
    }else {
      if (!this.usVisasArray.value.length) { this.addUsVisasRow(); }
    }
  }

  validateDateTime(value, index) {
    const today = new Date();
    const selected = this.unitedStatesArray.controls[index].get(value).value
    if (selected && selected >= today) {
      this.unitedStatesArray.controls[index].get(value).setErrors({ invalid: true });
    }
  }

  onChangeRefusedVisa() {
    if (this.tripInfoTab.get('refusedUsVisa').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['refuseExplain']);
      this.tripInfoTab.get('refuseExplain').setErrors(null);
    }
  }

  onChangeImmigration() {
    if (this.tripInfoTab.get('filledImmigration').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['hasImmigration']);
      this.tripInfoTab.get('hasImmigration').setErrors(null);
    }
  }

  onChangeEstaRejected() {
    if (this.tripInfoTab.get('hadEstaRejected').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['estaRejected']);
      this.tripInfoTab.get('estaRejected').setErrors(null);
    }
  }

  onChangeRefuseEntryUs() {
    if (this.tripInfoTab.get('refusedEntryUs').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab',['hasRefusedEntryUs'])
      this.tripInfoTab.get('hasRefusedEntryUs').setErrors(null);
    }
  }

  onChangeTripTime(time, index) {
    console.log("index => " + index)
    console.log("array of index =>", this.unitedStatesArray.controls[index])
    if (time === 'LESS THAN 24 HOURS') {
      this.unitedStatesArray.controls[index].get('tripDuration').reset()
      this.unitedStatesArray.controls[index].get('tripDuration').setErrors(null)
      this.unitedStatesArray.controls[index].get('tripDuration').markAsUntouched()
    }
  }
}
