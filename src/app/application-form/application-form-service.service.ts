import { ApplicationForm, FormDate, FormDateArray, _FormArray } from '../../models/application-form-interface'
import { Injectable } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { MatDialog } from '@angular/material/dialog'
import { FormAuthPopulationDialogComponent } from '../dialogs/form-auth-population-dialog/form-auth-population-dialog.component'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApplicationFormComponent } from './application-form.component'
@Injectable({
  providedIn: 'root',
})
export class ApplicationFormService {
  isSubmitInfoTab$ = new BehaviorSubject<Boolean>(false)
  isSubmitTripInfo$ = new BehaviorSubject<Boolean>(false)
  isSubmitAdditionalDetails$ = new BehaviorSubject<Boolean>(false)
  isSubmitSecurity$ = new BehaviorSubject<Boolean>(false)
  isSubmitFormAuthorizationTab$ = new BehaviorSubject<Boolean>(false)
  visaType$ = new BehaviorSubject<string>('')
  paymentType$ = new BehaviorSubject<string>('')
  storageHaveData: Boolean = false
  applicationFormValue: ApplicationForm
  sub1 = new Subscription()
  sub2 = new Subscription()
  sub3 = new Subscription()
  applicationsRef: AngularFirestoreCollection<ApplicationForm>
  applications$: Observable<ApplicationForm[]>
  lastID: Number
  /**
   * Do all your form controls declarations and validations in here
   */
  applicationForm = this.formBuilder.group({
    infoTab: this.formBuilder.group({
      // personal info section
      applyLocation: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      surName: ['', Validators.required],
      anotherFirstName: [''],
      anotherMiddleName: [''],
      anotherSurName: [''],
      fullName: [''],
      email: [
        '',
        [
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ],
        null,
      ],
      usedOtherEmail: ['', Validators.required],
      otherEmailArray: this.formBuilder.array([]),
      socialMediaArray: this.formBuilder.array([]),
      additionalSocialMedia: ['', Validators.required],
      additionalSocialMediaArray: this.formBuilder.array([]),
      country: ['', Validators.required],
      stateName: [''],
      city: ['', Validators.required],
      nationality: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      haveOtherNames: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      additionalNamesArray: this.formBuilder.array([]),
      havetelecode: ['', Validators.required],
      telecodeGivenNames: ['', [Validators.pattern('^[0-9\s]{4}'), Validators.required]],
      telecodeSurnames: ['', [Validators.pattern('^[0-9\s]{4}'), Validators.required]],

      // additional info section
      isOtherNationality: ['', Validators.required],
      isOtherResidentCountry: ['', Validators.required],
      fatherUSCitizenStatus: ['', Validators.required],
      motherUSCitizenStatus: ['', Validators.required],
      residentCountryName: ['', Validators.required],
      nationalIdentificationNumber: [''],
      socialSecurityNumber: [''],
      taxpayerID: [''],

      //about your parents section
      fatherGivenName: [''],
      fatherLastName: [''],
      fatherDateOfBirth: [''],
      isFatherInUSA: ['', Validators.required],
      motherGivenName: [''],
      motherSurName: [''],
      motherDateOfBirth: [''],
      isMotherInUSA: ['', Validators.required],
      isMotherHaveImmediateRelativesInUSA: ['', Validators.required],
      isMotherHaveOtherRelativesInUSA: ['', Validators.required],
      explainOtherRelations: [''],

      //contacts information tab
      phoneNumber: ['', [Validators.pattern('^[0-9\s]{5,15}$'), Validators.required]],
      secondaryPhoneNumber: ['', Validators.pattern('^[0-9\s]{5,15}$')],
      workPhoneNumber: [''],
      usedOtherPhoneNumbers: ['', Validators.required],
      additionalPhoneNumbersArray: this.formBuilder.array([]),
      homeAddress: ['', Validators.required],
      contactsInfoCity: ['', Validators.required],
      apartmentSuiteUnitNumber: [''],
      ZIPOrPostalCode: [''],
      countryName: ['', Validators.required],
      isMailingAddressDifferentFromHomeAddress: ['', Validators.required],
      mailingStreetAddress1: ['', Validators.required],
      mailingStreetAddress2: [''],
      mailingCity: ['', Validators.required],
      mailingState: [''],
      mailingZIPOrPostalCode: [''],
      mailingCountry: ['', Validators.required],

      spouseGivenName: ['', Validators.required],
      spouseSurName: ['', Validators.required],
      spouseDateOfBirth: ['', Validators.required],
      spouseNationality: ['', Validators.required],
      spouseCountryOfBirth: ['', Validators.required],
      spouseCityOfBirth: ['', Validators.required],
      spouseAddressType: ['', Validators.required],
      spouseAddress: ['', Validators.required],
      spouseCity: ['', Validators.required],
      spouseState: [''],
      spouseZIPOrPostalCode: [''],
      spouseCountry: ['', Validators.required],
      /* tap relatives */
      basicInfoRelatives: this.formBuilder.array([]),
      additionalNationality: this.formBuilder.array([]),
      DivorcedForm: this.formBuilder.array([]),
    }),
    tripInfoTab: this.formBuilder.group({
      // past travel and application section
      isUnitedStates: ['', Validators.required],
      hasDriverLicense: ['', Validators.required],
      driverLicenseNumber: [''],
      driverLicenseState: [''],
      issuedUsVisa: ['', Validators.required],
      refusedUsVisa: ['', Validators.required],
      refuseExplain: [''],
      filledImmigration: ['', Validators.required],
      hasImmigration: [''],
      hadEstaRejected: ['', Validators.required],
      estaRejected: [''],
      refusedEntryUs: ['', Validators.required],
      hasRefusedEntryUs: [''],

      // upcomming trip to us
      purposeOfTrip: ['', Validators.required],
      specify: ['', Validators.required],
      contactOrganizationOrPerson: ['', Validators.required],
      contactPerson_name: ['', Validators.required],
      contactPerson_surname: ['', Validators.required],
      organizationName: ['', Validators.required],
      relationship: ['', Validators.required],
      upcommingEmail: [''],
      upcommingPhone: ['', [Validators.pattern('^[0-9\s]{5,15}$'), Validators.required]],
      streetAddress: ['', Validators.required],
      upcommingCity: ['', Validators.required],
      Apartment: [''],
      zip_postalCode: [''],
      state: ['', Validators.required],
      tripSponsor: ['', Validators.required],
      payingCompanyRelationship: [''],
      payingPersonGivenNames: ['', Validators.required],
      payingPersonSurnames: ['', Validators.required],
      // relationship_with_you: [''],
      payingPersonEmail: [''],
      payingPhone: ['', Validators.pattern('^[0-9\s]{5,15}$')],
      payingCompanyName: [''],
      payingPersonRelationship: ['', Validators.required],
      isAddressParty: ['', Validators.required],
      isAddressStreet: [''],
      isAddressCity: [''],
      isAddressStreet2: [''],
      isAddressZIP: [''],
      isAddressCountry: [''],
      isAddressState: [''],
      travelAsAGroup: ['', Validators.required],
      groupName: [''],
      travelWithYou: ['', Validators.required],
      travelWithName: [''],
      travelWithSurname: [''],
      travelWithRelation: [''],
      knowWhereStaying: ['', Validators.required],
      cityStaying: ['', Validators.required],
      stateStaying: ['', Validators.required],
      hotelName: ['', Validators.required],
      stayingWithRelation: [''],
      stayingWithEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),]],
      stayingWithPhone: ['', Validators.pattern('^[0-9\s]{5,15}$')],
      stayingWithStreetAddress: [''],
      stayingWithApartment: [''],
      stayingWithZIPcode: [''],
      haveTravelPlans: ['', Validators.required],
      intendedDate: [''],
      intendedNumber: [''],
      intendedDuration: [''],
      dateArrival: [''],
      dateDepature: [''],
      depatureFlight: [''],
      depatureCity: [''],
      planLocation: [''],
      dateOfArrival: ['', Validators.required],
      dateOfDeparture: ['', Validators.required],
      arrivalFlight: [''],
      arrivalCity: ['', Validators.required],
      departureFlight: [''],
      departureCity: ['', Validators.required],
      willStayStreetAddress1: ['', Validators.required],
      willStayStreetAddress2: [''],
      willStayCity: ['', Validators.required],
      willStayState: ['', Validators.required],
      willStayZIP: [''],
      /** tab relatives */
      usVisasArray: this.formBuilder.array([]),
      unitedStatesArray: this.formBuilder.array([]),
      driverLicenseArray: this.formBuilder.array([]),
      travelWithYouArray: this.formBuilder.array([]),
      travelPlansArray: this.formBuilder.array([]),
    }),
    additionalDetailsTab: this.formBuilder.group({
      notWorkingExplanation: ['', Validators.required],

      areYouCurrentlyWorking: ['', Validators.required],
      workingField: ['', Validators.required],
      otherWorkingField: ['', Validators.required],
      NameOfEmployer: ['', Validators.required],
      employerPhoneNumber: ['', [Validators.pattern('^[0-9\s]{5,15}$'), Validators.required]],
      employerStreetAddress1: ['', Validators.required],
      employerStreetAddress2: ['', null],
      WorkingCity: ['', Validators.required],
      apartmentSuiteUnitNumber: [''],
      ZIPOrPostalCode: [''],
      workingCountry: ['', Validators.required],
      StateProvince: [''],
      workingStartDate: ['', Validators.required],
      monthlyIncome: ['', [Validators.pattern('^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$')]],
      workDutiesDescription: ['', Validators.required],

      havePreviouslyEmployed: ['', Validators.required],
      haveAttendedInstitutionAcademic: ['', Validators.required],
      highSchoolName: ['', Validators.required],
      highSchoolCourseOfStudies: ['', Validators.required],
      highSchoolStreetAddress: ['', Validators.required],
      highSchoolCity: ['', Validators.required],
      highSchoolZIPOrPostalCode: [''],
      highSchoolCountry: ['', Validators.required],
      highSchoolStateProvince: [''],
      highSchoolStartDate: ['', Validators.required],
      highSchoolEndDate: ['', Validators.required],

      HaveEverServedInMilitary: ['', Validators.required],

      haveEverInvolvedWithUnit: ['', Validators.required],
      haveEverInvolvedWithUnitExplanation: ['', Validators.required],

      haveEverWorkedForOrganization: ['', Validators.required],
      haveEverWorkedForOrganizationName: ['', Validators.required],

      belongToClanOrTribe: ['', Validators.required],
      belongToClanOrTribeName: ['', Validators.required],

      haveEverBeenMemberOfTaliban: ['', Validators.required],
      haveEverBeenMemberOfTalibanExplanation: ['', Validators.required],
      specializedSkills: ['', Validators.required],
      specializedSkillsExplanation: ['', Validators.required],

      haveTraveledOutsideYourCountry: ['', Validators.required],
      haveTraveledOutsideYourCountryName: ['', Validators.required],

      selectEmbassy: ['', Validators.required],
      passportType: ['', Validators.required],
      otherPassportType: [''],
      passportDocumentNumber: ['', [Validators.required, Validators.minLength]],
      passportBookNumber: [''],
      PassportCountryOfIssue: ['', Validators.required],
      InTheCityOf: ['', Validators.required],
      passportState: [''],
      passportIssuedOn: ['', Validators.required],
      passportExpirationDate: ['', Validators.required],

      haveEverLostPassport: ['', Validators.required],
      missedPassportTravelDocumentNumber: ['', Validators.required],
      countryThatIssuedPassportDocument: ['', Validators.required],
      explainLostPassport: ['', Validators.required],

      SEVISID: ['', Validators.required],
      SEVISInfoSchoolName: ['', Validators.required],
      SEVISInfoCourseOfStudy: ['', Validators.required],
      SEVISInfoStreetAddress: ['', Validators.required],
      SEVISInfoCity: ['', Validators.required],
      SEVISInfoApartmentSuiteUnitNumber: [''],
      SEVISInfoZIPOrPostalCode: [''],
      SEVISInfoCountry: ['', Validators.required],
      SEVISInfoStateProvince: [''],

      /**tab relatives */
      additionalQuestionsRelatives: this.formBuilder.array([]),
      militaryServices: this.formBuilder.array([]),
      spokenLanguages: this.formBuilder.array([]),
      contactsForm: this.formBuilder.array([]),
    }),
    securityTab: this.formBuilder.group({
      /** Part One */
      haveCommunicableDisease: ['', Validators.required],
      explainCommunicableDisease: ['', Validators.required],
      haveDisorder: ['', Validators.required],
      explainDisorder: ['', Validators.required],
      haveBeenAddict: ['', Validators.required],
      explainBeenAddict: ['', Validators.required],

      /** Part Two */
      haveBeenArrested: ['', Validators.required],
      explainBeenArrested: ['', Validators.required],
      haveYouViolated: ['', Validators.required],
      explainYouViolated: ['', Validators.required],
      engagedInProstitution: ['', Validators.required],
      explainProstitution: ['', Validators.required],
      moneyLaundering: ['', Validators.required],
      explainLaundering: ['', Validators.required],
      humanTrafficking: ['', Validators.required],
      explainTrafficking: ['', Validators.required],
      aidedHumanTrafficking: ['', Validators.required],
      explainAidedTrafficking: ['', Validators.required],
      sonHumanTrafficking: ['', Validators.required],
      explainSonTrafficking: ['', Validators.required],

      /** Part Three */
      seekEspionage: ['', Validators.required],
      explainSeekEspionage: ['', Validators.required],
      seekTerrorism: ['', Validators.required],
      explainSeekTerrorism: ['', Validators.required],
      financialAssistance: ['', Validators.required],
      explainFinancialAssistance: ['', Validators.required],
      representTerrorism: ['', Validators.required],
      explainRepresentTerrorism: ['', Validators.required],
      terroristRelative: ['', Validators.required],
      ExplainTerroristRelative: ['', Validators.required],
      committedGenocide: ['', Validators.required],
      explainCommittedGenocide: ['', Validators.required],
      committedTorture: ['', Validators.required],
      explainCommittedTorture: ['', Validators.required],
      committedViolence: ['', Validators.required],
      explainCommittedViolence: ['', Validators.required],
      childSoldier: ['', Validators.required],
      explainChildSoldier: ['', Validators.required],
      religiousFreedom: ['', Validators.required],
      explainReligiousFreedom: ['', Validators.required],
      freeWill: ['', Validators.required],
      explainFreeWill: ['', Validators.required],
      humanOrgans: ['', Validators.required],
      explainHumanOrgans: ['', Validators.required],

      /** Part Four */
      assistImmigration: ['', Validators.required],
      explainAssistImmigration: ['', Validators.required],
      beenDeported: ['', Validators.required],
      explainBeenDeported: ['', Validators.required],

      /** Part Five */
      withheldCustody: ['', Validators.required],
      explainWithheldCustody: ['', Validators.required],
      lawViolation: ['', Validators.required],
      explainLawViolation: ['', Validators.required],
      avoidTaxation: ['', Validators.required],
      explainAvoidTaxation: ['', Validators.required],
      removalHearing: ['', Validators.required],
      explainRemovalHearing: ['', Validators.required],
      attendHearing: ['', Validators.required],
      explainAttendHearing: ['', Validators.required],
      unlawfullyPresent: ['', Validators.required],
      explainUnlawfullyPresent: ['', Validators.required]
    }),
    formAuthorizationTab: this.formBuilder.group({
      phoneNumber: ['', [Validators.pattern('^[0-9\s]{5,15}$'), Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipOrPostalCode: ['', Validators.required],
      country: ['', Validators.required],
      state: [''],
    })
  })
  creditCardInformation = this.formBuilder.group({
    payInCash: ['yes', Validators.required],
    cardNumber: [''],
    expirationMonth: [''],
    expirationYear: [''],
    securityCode: [''],
    amount: ['']
  })

  allDates = [
    { tab: 'infoTab', field: 'dateOfBirth' },
    { tab: 'infoTab', field: 'fatherDateOfBirth' },
    { tab: 'infoTab', field: 'motherDateOfBirth' },
    { tab: 'infoTab', field: 'spouseDateOfBirth' },
    /* tap relatives */
    { tab: 'tripInfoTab', field: 'intendedDate' },
    { tab: 'tripInfoTab', field: 'dateArrival' },
    { tab: 'tripInfoTab', field: 'dateDepature' },
    { tab: 'tripInfoTab', field: 'dateOfArrival' },
    { tab: 'tripInfoTab', field: 'dateOfDeparture' },
    /** tab relatives */
    { tab: 'additionalDetailsTab', field: 'workingStartDate' },
    { tab: 'additionalDetailsTab', field: 'highSchoolStartDate' },
    { tab: 'additionalDetailsTab', field: 'highSchoolEndDate' },
    { tab: 'additionalDetailsTab', field: 'passportExpirationDate' },
    { tab: 'additionalDetailsTab', field: 'passportIssuedOn' }
  ] as FormDate[]

  allDatesArrays = [
    { tab: 'tripInfoTab', arr: 'unitedStatesArray', field: 'tripDate' },
    { tab: 'additionalDetailsTab', arr: 'additionalQuestionsRelatives', field: 'jobStartDate' },
    { tab: 'additionalDetailsTab', arr: 'additionalQuestionsRelatives', field: 'jobEndDate' },
    { tab: 'additionalDetailsTab', arr: 'militaryServices', field: 'serviceStartDate' },
    { tab: 'additionalDetailsTab', arr: 'militaryServices', field: 'serviceEndDate' },
    { tab: 'tripInfoTab', arr: 'usVisasArray', field: 'DateLastVisaWasIssued' },
    { tab: 'tripInfoTab', arr: 'usVisasArray', field: 'expirationDate' },
    { tab: 'tripInfoTab', arr: 'usVisasArray', field: 'cancellationDate' },
    { tab: 'infoTab', arr: 'DivorcedForm', field: 'spouseDateOfBirth' },
    { tab: 'infoTab', arr: 'DivorcedForm', field: 'marriageStartDate' },
    { tab: 'infoTab', arr: 'DivorcedForm', field: 'marriageEndDate' }
  ] as FormDateArray[]

  requiredArrays = [
    { tab: 'additionalDetailsTab', arr: 'spokenLanguages' },
    { tab: 'additionalDetailsTab', arr: 'contactsForm' },
    { tab: 'infoTab', arr: 'socialMediaArray' }
  ] as _FormArray[]

  requiredError = 'This field is required!'
  invalidIBMEmailError = 'Please enter a valid IBM email!'
  invalidNumberError = 'Please enter a valid number!'

  constructor(public formBuilder: FormBuilder, private afs: AngularFirestore, public dialog: MatDialog) {
    
    if (localStorage.getItem('applicationForm')) {
      const firstTab: object = Object.values(JSON.parse(localStorage.getItem('applicationForm')).infoTab)
      for (const key in firstTab) {
        if (firstTab[key] !== '' && (firstTab[key] && firstTab[key].length !== 0)) {
          this.storageHaveData = true
        }
      }
      if (this.storageHaveData) {
        const dialogRef = this.dialog.open(FormAuthPopulationDialogComponent)
        this.sub2 = dialogRef.afterClosed().subscribe(async (result) => {
          if (result == undefined || result == true) {
            await this.setupFormData()
            this.sub1 = this.applicationForm.valueChanges.subscribe((result) => {
              console.log('applicationForm ->', )
              localStorage.setItem('applicationForm', JSON.stringify(result))
            })
          } else {
            //::TODO Resting application form
            console.log(' resting the form ')
            this.sub1 = this.applicationForm.valueChanges.subscribe((result) => {
              localStorage.setItem('applicationForm', JSON.stringify(result))
            })
          }
        })
      }
      this.applicationsRef = this.afs.collection('applications', ref => {
        return ref.orderBy('submitDate', 'desc').limit(1)
      })
      this.applications$ = this.applicationsRef.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as ApplicationForm
            const id = a.payload.doc.id
            return { id, ...data }
          })
        })
      )
      this.sub3 = this.applications$.subscribe((val: any[]) => {
        this.lastID = val && val.length > 0 && val[0].id ? Number(val[0].id) : undefined
        console.log('set lastID to ' + this.lastID)
      })
    }
  }
  async setupFormData() {
    const formData = JSON.parse((localStorage.getItem('applicationForm')))
    console.log('storage form data ->', formData)
    await this.resetRequiredArrays()
    const keys = Object.keys(formData)
    keys.forEach(element => {
      const formItem = formData[element] // Obj Value
      const tab = this.applicationForm.get(element)
      /** populate form values **/
      this.populateFormData(this.applicationForm.value[element], tab, formItem, element)
    })
    return true
  }
  resetRequiredArrays(): Promise<boolean> {
    return new Promise(resolve => {
      this.requiredArrays.forEach((e: _FormArray) => {
        const arr = this.applicationForm.get(e.tab).get(e.arr) as FormArray
        while (arr.length > 0)
          arr.removeAt(0)
      })
      resolve(true)
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
    this.sub3.unsubscribe()
  }

  insertApplicationForm() {
    const nextID: string = this.lastID ? (Number(this.lastID) + 1).toString() : '10000'
    console.log('nextID ->', nextID)
    this.applicationFormValue = this.applicationForm.value as ApplicationForm
    /** Convert Dates */
    this.stringifyDates(this.applicationFormValue, this.allDates)
    this.stringifyDatesArr(this.applicationFormValue, this.allDatesArrays)
    console.log('application form value -->', this.applicationFormValue)
    return this.afs.collection('applications').doc(nextID).set(this.applicationFormValue)
  }

  stringifyDates(form: ApplicationForm, dates: FormDate[]) {
    dates.forEach((element: FormDate) => {
      console.log('form[element.tab][element.field] ==>', form[element.tab][element.field])
      form[element.tab][element.field] =
        form[element.tab][element.field] && form[element.tab][element.field] !== '' ?
          new Date(form[element.tab][element.field]).toDateString() :
          form[element.tab][element.field]

      console.log('form[element.tab][element.field] ==>', form[element.tab][element.field])
    });
  }

  stringifyDatesArr(form: ApplicationForm, datesArr: FormDateArray[]) {
    datesArr.forEach((element: FormDateArray) => {
      console.log('current array =>', element.arr)
      console.log('current array object', form[element.tab][element.arr])
      if (form[element.tab][element.arr]?.length > 0) {
        form[element.tab][element.arr].forEach(row => {
          console.log('current row =>', row)
          console.log('current date =>', row[element.field])
          row[element.field] =
            row[element.field] && row[element.field] !== '' ?
              new Date(row[element.field]).toDateString() :
              row[element.field]
          console.log('current formated date', row[element.field])
        })

      }
    });
  }

  updateApplicationForm(id: string) {
    this.applicationFormValue = this.applicationForm.value as ApplicationForm
    return this.afs.doc('applications/' + id).update(this.applicationFormValue)
  }

  deleteApplicationForm(id: string) {
    return this.afs.doc('applications/' + id).delete()
  }

  populateFormData(data: any, tabName: AbstractControl, formItem: any, subTabName: string) {
    for (const key in data) {
      if (data[key] && data[key] !== '') {
        const formArr = this.applicationForm.get(subTabName).get(key) as FormArray
        formItem[key].forEach(element => {
          formArr.push(this.formBuilder.group(element))
        })
      } else {
        tabName.get(key).setValue(formItem[key])
      }
    }
  }

  addRow(rowsNumber: Number, formArrayName: string, subTabName?: string, val?: any) {
    const formArray = subTabName ? this.applicationForm.get(subTabName).get(formArrayName) as FormArray : this.applicationForm.get(formArrayName) as FormArray
    for (let i = 0; i < rowsNumber; i++) {
      formArray.push(
        this.formBuilder.group(val)
      )
    }
  }

  onChangeRadioButton(tabName: string, items: Array<any>) {
    const tab = this.applicationForm.get(tabName)
    items.map(element => {
      const dependencyName = element.dependencyName
      const value = element.valueToCheck
      const dependencyFields = element.dependencyFields
      if (tab.get(dependencyName).value && tab.get(dependencyName).value == value) {
        dependencyFields.forEach(element => {
          tab.get(element).reset()
          tab.get(element).markAsUntouched()
          tab.get(element).setErrors(null)
        })
      }
    })
  }

  resetFormControls(mainTab: string, subTabs: Array<any>, isFormArray?: boolean) {
    subTabs.map(element => {
      if (isFormArray) {
        let form = this.applicationForm.get(mainTab).get(element) as FormArray
        while (form.length !== 0) {
          form.removeAt(0)
        }
        form.reset()
        form.markAsUntouched()
      } else {
        this.applicationForm.get(mainTab).get(element).markAsUntouched()
        this.applicationForm.get(mainTab).get(element).reset()
        this.applicationForm.get(mainTab).get(element).setErrors(null)
      }
    })
  }

  onFieldChange(tab: string, parentField: string, value: string, dependencyFields: string[]) {
    if (this.applicationForm.get(tab).get(parentField).value === value) {
      dependencyFields.forEach((field: string) => {
        this.applicationForm.get(tab).get(field).setValidators(Validators.required)
      })
    } else {
      dependencyFields.forEach((field: string) => {
        this.resetFormControls(tab, [field])
        this.applicationForm.get(tab).get(field).setErrors(null)
      })
    }
  }
}
