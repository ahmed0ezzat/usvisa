import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder, Validators } from '@angular/forms'
import { ApplicationFormService } from '../../application-form-service.service'
import { usaStates } from 'typed-usa-states'
import { Subscription } from 'rxjs'
import { stateList, payerCountryList } from '../../dropdownLists'
import { DropDownList } from '../../../../models/application-form-interface'

@Component({
  selector: 'app-upcomming-trip',
  templateUrl: './upcomming-trip.component.html',
  styleUrls: ['./upcomming-trip.component.scss'],
})
export class UpcommingTripComponent implements OnInit {
  sub1 = new Subscription()
  @Input() isSubmit: Boolean
  myFilter: any
  specifyArray: any[] = []
  purposeOfTripArray: any[] = []
  relationshipsArray: any[] = []
  stateArray: any[] = []
  tripInfoTab = this.applicationFormService.applicationForm.get('tripInfoTab')
  travelWithYouArray = this.tripInfoTab.get('travelWithYouArray') as FormArray
  travelPlansArray = this.tripInfoTab.get('travelPlansArray') as FormArray
  relationsArray: any[] = []
  tripTimeArray: any[] = []
  showOtherPersonFields: Boolean = false
  showOtherCompanyFields: Boolean = false
  visaType: string
  stateList: DropDownList[]
  payerCountryList: DropDownList[]

  constructor(
    public applicationFormService: ApplicationFormService,
    private fb: FormBuilder
  ) {
    this.sub1 = this.applicationFormService.visaType$.subscribe(val => {
      this.visaType = val
      this.setupSpecifyArrayValues(this.visaType)
    })
    this.stateList = stateList
    this.payerCountryList = payerCountryList
  }

  ngOnInit(): void {
    this.relationshipsArray.push(
      { val: 'Friend' },
      { val: 'Spouse' },
      { val: 'Other Relative' },
      { val: 'Business Associate' },
      { val: 'School Official' },
      { val: 'Other' }
    )

    this.relationsArray.push(
      { val: 'Self' },
      { val: 'Other Person' },
      { val: 'Other Company / Organization' },
      { val: 'Employer in the U.S.' },
      { val: 'Present Employer' }
    )

    this.stateArray = usaStates
    this.tripTimeArray.push(
      { val: 'YEARS' },
      { val: 'MONTHS' },
      { val: 'WEEKS' },
      { val: 'DAYS' },
      { val: 'HOURS' }
    )
    this.tripInfoTab.get('purposeOfTrip').reset()
    this.tripInfoTab.get('specify').reset()
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }
  onChangeOrganization(value: string) {
    if (value == 'Organization') {
      this.tripInfoTab.get('contactPerson_name').setErrors(null)
      this.tripInfoTab.get('contactPerson_surname').setErrors(null)
      this.applicationFormService.resetFormControls('tripInfoTab', ['contactPerson_name', 'contactPerson_surname'])
    } else {
      this.tripInfoTab.get('organizationName').setErrors(null)
      this.applicationFormService.resetFormControls('tripInfoTab', ['organizationName',])
    }
  }

  changeTripSponsor(event) {
    if (event === 'Other Person') {
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'payingCompanyName',
        'payingCompanyRelationship'
      ])
    } else if (event === 'Other Company / Organization') {
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'payingPersonGivenNames',
        'payingPersonSurnames',
        'payingPersonRelationship',
        'isAddressParty'
      ])
    } else {
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'payingPersonGivenNames',
        'payingPersonSurnames',
        'payingPersonEmail',
        'payingPhone',
        'payingPersonRelationship',
        'payingCompanyName',
        'payingCompanyRelationship',
        'isAddressParty',
        'isAddressStreet',
        'isAddressCity',
        'isAddressStreet2',
        'isAddressZIP',
        'isAddressCountry',
        'isAddressState',
        'isAddressParty'
      ])
    }
  }

  onChangeIsPartyAddress(value: Boolean) {
    if (value) {
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'isAddressStreet',
        'isAddressCity',
        'isAddressStreet2',
        'isAddressZIP',
        'isAddressCountry',
        'isAddressState',
        'isAddressParty'
      ])
    }
  }

  onChangeTravelAsAGroup(value: Boolean) {
    console.log('travel as a group changed ->' + value)
    if (value == false) {
      this.applicationFormService.resetFormControls('tripInfoTab', ['groupName'])
    } else if (value == true) {
      this.applicationFormService.resetFormControls('tripInfoTab', ['travelWithYouArray'], true)
    }
  }

  onChangeTravelWithYou() {
    if (this.tripInfoTab.get('travelWithYou').value === 'no') {
      console.log('no case')
      this.applicationFormService.resetFormControls('tripInfoTab', ['travelWithYouArray'], true)
      this.applicationFormService.resetFormControls('tripInfoTab', ['groupName', 'travelAsAGroup'])
      console.log(this.tripInfoTab.get('travelAsAGroup').value)
    } else {
      if (!this.travelWithYouArray.value.length) { this.addTravelWithYouRow() }
    }
  }

  addTravelWithYouRow() {
    this.travelWithYouArray.push(
      this.fb.group({
        travelWithName: ['', Validators.required],
        travelWithSurname: ['', Validators.required],
        travelWithRelation: ['', Validators.required],
      })
    )
  }
  deleteTravelWithYouRow(index) {
    this.travelWithYouArray.removeAt(index)
  }

  addTravelPlansArray() {
    this.travelPlansArray.push(
      this.fb.group({
        planLocation: ['', Validators.required],
      })
    )
  }
  deleteTravelPlansArray(index) {
    this.travelPlansArray.removeAt(index)
  }

  onChangeAddInfo(val: Boolean, index: number) {
    if (val === true) {
      this.addTravelWithYouRow()
    } else {
      this.deleteTravelWithYouRow(index)
    }
  }

  onChangeHaveTravelPlans() {
    if (this.tripInfoTab.get('haveTravelPlans').value === 'no') {
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'travelWithName',
        'travelWithSurname',
        'travelWithRelation',
        'dateOfArrival',
        'dateOfDeparture',
        'arrivalFlight',
        'arrivalCity',
        'departureFlight',
        'departureCity'
      ])
      if (!this.travelPlansArray.value.length) {
        this.addTravelPlansArray()
      }
    } else {
      this.applicationFormService.resetFormControls('tripInfoTab', ['travelPlansArray'], true)
      this.applicationFormService.resetFormControls('tripInfoTab', [
        'intendedNumber',
        'intendedDuration',
        'intendedDate'
      ])
    }
  }

  onChangeKnowWhereStaying(value: string) {
    if (value == 'yes') {
      this.tripInfoTab.get('stayingWithRelation').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithEmail').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithPhone').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithStreetAddress').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithApartment').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithZIPcode').setValidators(Validators.required)
      this.tripInfoTab.get('cityStaying').setErrors(null)
      this.tripInfoTab.get('stateStaying').setErrors(null)
      this.tripInfoTab.get('hotelName').setErrors(null)
      this.applicationFormService.resetFormControls('tripInfoTab', ['cityStaying', 'stateStaying', 'hotelName'])
    } else {
      this.tripInfoTab.get('cityStaying').setValidators(Validators.required)
      this.tripInfoTab.get('stateStaying').setValidators(Validators.required)
      this.tripInfoTab.get('hotelName').setValidators(Validators.required)
      this.tripInfoTab.get('stayingWithRelation').setErrors(null)
      this.tripInfoTab.get('stayingWithEmail').setErrors(null)
      this.tripInfoTab.get('stayingWithPhone').setErrors(null)
      this.tripInfoTab.get('stayingWithStreetAddress').setErrors(null)
      this.tripInfoTab.get('stayingWithApartment').setErrors(null)
      this.tripInfoTab.get('stayingWithZIPcode').setErrors(null)
      this.applicationFormService.resetFormControls('tripInfoTab', ['stayingWithRelation', 'stayingWithEmail', 'stayingWithPhone', 'stayingWithStreetAddress', 'stayingWithApartment', 'stayingWithZIPcode'])
    }
  }

  copyButton() {
    this.tripInfoTab.get('stayingWithStreetAddress').setValue(this.tripInfoTab.get('streetAddress').value)
    this.tripInfoTab.get('cityStaying').setValue(this.tripInfoTab.get('upcommingCity').value)
    this.tripInfoTab.get('stayingWithApartment').setValue(this.tripInfoTab.get('Apartment').value)
    this.tripInfoTab.get('stayingWithZIPcode').setValue(this.tripInfoTab.get('zip_postalCode').value)
    this.tripInfoTab.get('stateStaying').setValue(this.tripInfoTab.get('state').value)
  }

  onChangeTravelPlans(value: Boolean, index) {
    if (value === true) {
      this.addTravelPlansArray()
    } else {
      this.deleteTravelPlansArray(index)
    }
  }

  setupSpecifyArrayValues(val) {
    this.specifyArray = []
    this.purposeOfTripArray = []
    switch (val) {
      case 'student':
        this.specifyArray.push(
          { val: 'STUDENT (F1)' },
          { val: 'CHILD OF AN F1 (F2)' },
          { val: 'SPOUSE OF AN F1 (F2)' },
        )
        this.purposeOfTripArray.push(
          { val: 'ACADEMIC OR LANGUAGE STUDENT (F)' }
        )
        break
      case 'transit':
        this.specifyArray.push(
          { val: 'CREWMEMBER IN TRANSIT (C1/D)' },
          { val: 'TRANSIT (C1)' },
          { val: 'TRANSIT TO U.N. HEADQUARTERS (C2)' },
          { val: 'CHILD OF A C3 (C3)' },
          { val: 'PERSONAL EMP. OF A C3 (C3)' },
          { val: 'FOREIGN OFFICIAL IN TRANSIT (C3)' },
          { val: 'SPOUSE OF A C3 (C3)' }
        )
        this.purposeOfTripArray.push(
          { val: 'ALIEN IN TRANSIT (C)' }
        )
        break
      case 'tourist':
        this.purposeOfTripArray.push(
          { val: 'TEMP. BUSINESS PLEASURE VISITOR (B)' }
        )
        this.specifyArray.push(
          { val: 'BUSINESS & TOURISM (TEMPORARY VISITOR) (B1/B2)' },
          { val: 'BUSINESS / CONFERENCE (B1)' },
          { val: 'TOURISM / MEDICAL TREATMENT (B2)' },
        )
        break
    }
  }
}
