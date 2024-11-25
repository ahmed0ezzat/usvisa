export interface ApplicationForm {
    id?: string
    submitDate: string
    visaType: string
    infoTab: infoTab
    tripInfoTab: tripInfoTab
    additionalDetailsTab: additionalDetailsTab
    securityTab: securityTab
    paymentInfo: _paymentInfo
    status: string
}

export interface infoTab {
    applyLocation: string
    ZIPOrPostalCode: string
    anotherFirstName?: string
    anotherMiddleName?: string
    anotherSurName?: string
    apartmentSuiteUnitNumber: string
    city: string
    contactsInfoCity: string
    country: string
    dateOfBirth: string
    email: string
    usedOtherEmail: string
    otherEmailArray: otherEmailArray
    soicalMediaArray: socialMediaArray
    additionalSocialMedia: string
    additionalSocialMediaArray: string
    explainOtherRelations: string
    fatherDateOfBirth: string
    fatherGivenName: string
    fatherLastName: string
    firstName: string
    fullName?: string
    gender: string
    haveFatherDateOfBirth: string
    haveOtherNames: string
    haveMotherDateOfBirth: string
    havetelecode: string
    homeAddress: string
    isFatherInUSA: string
    isMailingAddressDifferentFromHomeAddress: string
    isMotherHaveImmediateRelativesInUSA: string
    isMotherHaveOtherRelativesInUSA: string
    isMotherInUSA: string
    isOtherNationality: string
    isOtherResidentCountry: string
    nationalIdentificationNumber?: string
    socialSecurityNumber?: string
    taxpayerID?: string
    mailingState: string
    mailingCity: string
    mailingCountry: string
    mailingStreetAddress1: string
    mailingStreetAddress2?: string
    mailingZIPOrPostalCode: string
    maritalStatus: string
    middleName?: string
    motherDateOfBirth: string
    motherGivenName: string
    motherSurName: string
    nationality: string
    additionalNamesArray: additionalNamesArray
    phoneNumber: string
    motherUSCitizenStatus?: string
    residentCountryName?: string
    fatherUSCitizenStatus?: string
    secondaryPhoneNumber?: string
    workPhoneNumber?: string
    usedOtherPhoneNumbers: string
    additionalPhoneNumbersArray?: additionalPhoneNumbersArray
    stateName: string
    surName: string
    countryName: string
    telecodeGivenNames: string
    telecodeSurnames: string
    spouseGivenName?: string
    spouseSurName?: string
    spouseDateOfBirth?: string
    spouseNationality?: string
    spouseCountryOfBirth?: string
    spouseCityOfBirth?: string
    spouseAddressType?: string
    spouseAddress?: string
    spouseCity?: string
    spouseState?: string
    spouseZIPOrPostalCode?: string
    spouseCountry?: string
    /** tab relatives */
    basicInfoRelatives?: basicInfoRelatives
    additionalNationality?: additionalNationality
    DivorcedForm?: DivorcedForm
}
export interface tripInfoTab {
    Apartment: string
    cityStaying: string
    contactOrganizationOrPerson: string
    contactPerson_name: string
    contactPerson_surname: string
    dateArrival?: string
    dateDepature?: string
    depatureCity?: string
    depatureFlight?: string
    estaRejected: string
    filledImmigration: string
    payingPersonGivenNames: string
    groupName: string
    hadEstaRejected: string
    hasDriverLicense: string
    hasImmigration: string
    hasRefusedEntryUs: string
    haveTravelPlans: string
    hotelName: string
    intendedDate?: string
    intendedDuration?: string
    intendedNumber?: string
    isAddressStreet2?: string
    isAddressCity?: string
    isAddressCountry?: string
    isAddressParty: string
    isAddressState?: string
    isAddressStreet?: string
    isAddressZIP?: string
    isUnitedStates: string
    issuedUsVisa: string
    knowWhereStaying: string
    organizationName?: string
    payingPersonSurnames: string
    payingPersonEmail?: string
    payingPhone: string
    tripSponsor: string
    planLocation?: string
    purposeOfTrip: string
    refuseExplain: string
    refusedEntryUs: string
    refusedUsVisa: string
    relationship: string
    payingCompanyName?: string
    payingPersonRelationship: string
    // relationship_with_you?: string
    specify: string
    state: string
    stateStaying: string
    stayingWithApartment: string
    stayingWithEmail: string
    stayingWithPhone: string
    stayingWithRelation: string
    stayingWithStreetAddress: string
    stayingWithZIPcode: string
    streetAddress: string
    travelAsAGroup: string
    travelWithName?: string
    travelWithRelation?: string
    travelWithSurname?: string
    travelWithYou: string
    upcommingCity: string
    upcommingEmail?: string
    upcommingPhone: string
    zip_postalCode?: string
    haveEverBeenTenPrinted: string
    dateOfArrival?: string
    dateOfDeparture?: string
    arrivalFlight?: string
    arrivalCity?: string
    departureFlight?: string
    departureCity?: string
    /** tab relatives */
    usVisasArray?: usVisasArray
    unitedStatesArray?: unitedStatesArray
    driverLicenseArray?: driverLicenseArray
    travelWithYouArray?: travelWithYouArray
    travelPlansArray?: travelPlansArray
    willStayStreetAddress1: string
    willStayStreetAddress2?: string
    willStayCity: string
    willStayState: string
    willStayZIP?: string

}

export interface additionalDetailsTab {
    HaveEverServedInMilitary: string
    InTheCityOf: string
    NameOfEmployer: string
    PassportCountryOfIssue: string
    passportDocumentNumber: string
    passportBookNumber?: string
    passportType: string
    SEVISID: string
    SEVISInfoApartmentSuiteUnitNumber: string
    SEVISInfoCity: string
    SEVISInfoCountry: string
    SEVISInfoCourseOfStudy: string
    SEVISInfoSchoolName: string
    SEVISInfoStateProvince: string
    SEVISInfoStreetAddress: string
    SEVISInfoZIPOrPostalCode: string
    StateProvince: string
    WorkingCity: string
    ZIPOrPostalCode: string
    schoolStreetAddress: string
    additionalDetailStreetAddressTwo: string
    additionalDetailsStateProvinceOne: string
    apartmentSuiteUnitNumber: string
    areYouCurrentlyWorking: string
    belongToClanOrTribe: string
    belongToClanOrTribeName?: string
    city: string
    country: string
    countryThatIssuedPassportDocument: string
    otherWorkingField: string
    employerPhoneNumber: string
    employerStreetAddress1: string
    employerStreetAddress2: string
    haveAttendedInstitutionAcademic: string
    haveEverBeenMemberOfTaliban: string
    haveEverBeenMemberOfTalibanExplanation: string
    haveEverInvolvedWithUnit: string
    haveEverInvolvedWithUnitExplanation: string
    haveEverLostPassport: string
    haveEverWorkedForOrganization: string
    haveEverWorkedForOrganizationName: string
    havePreviouslyEmployed: string
    haveTraveledOutsideYourCountry: string
    haveTraveledOutsideYourCountryName?: string | Array<any>
    highSchoolApartmentSuiteUnitNumber: string
    highSchoolCity: string
    highSchoolCountry: string
    highSchoolCourseOfStudies: string
    highSchoolEndDate: string
    highSchoolName: string
    highSchoolStartDate: string
    highSchoolStateProvince: string
    highSchoolStreetAddress: string
    highSchoolZIPOrPostalCode: string
    major: string
    missedPassportTravelDocumentNumber: string
    explainLostPassport: string
    monthlyIncome: number | string
    otherPassportType?: string
    passportExpirationDate: string
    passportIssuedOn: string
    passportState: string
    schoolName: string
    schoolPhoneNumber: string
    selectEmbassy: string
    specializedSkills: string
    specializedSkillsExplanation: string
    startDate: string
    workDutiesDescription: string
    workingCountry: string
    workingField?: string
    workingStartDate: string
    notWorkingExplanation?: string
    /** tab relatives */
    additionalQuestionsRelatives?: additionalQuestionsRelatives
    militaryServices?: militaryServices
    spokenLanguages?: spokenLanguages
    contactsForm?: contactsForm
}
export interface securityTab {
    /** Part One */
    haveCommunicableDisease: string
    explainCommunicableDisease: string
    haveDisorder: string
    explainDisorder: string
    haveBeenAddict: string
    explainBeenAddict: string

    /** Part Two */
    haveBeenArrested: string
    explainBeenArrested: string
    haveYouViolated: string
    explainYouViolated: string
    engagedInProstitution: string
    explainProstitution: string
    moneyLaundering: string
    explainLaundering: string
    humanTrafficking: string
    explainTrafficking: string
    aidedHumanTrafficking: string
    explainAidedTrafficking: string
    sonHumanTrafficking: string
    explainSonTrafficking: string

    /** Part Three */
    seekEspionage: string
    explainSeekEspionage: string
    seekTerrorism: string
    explainSeekTerrorism: string
    financialAssistance: string
    explainFinancialAssistance: string
    representTerrorism: string
    explainRepresentTerrorism: string
    terroristRelative: string
    ExplainTerroristRelative: string
    committedGenocide: string
    explainCommittedGenocide: string
    committedTorture: string
    explainCommittedTorture: string
    committedViolence: string
    explainCommittedViolence: string
    childSoldier: string
    explainChildSoldier: string
    religiousFreedom: string
    explainReligiousFreedom: string
    freeWill: string
    explainFreeWill: string
    humanOrgans: string
    explainHumanOrgans: string

    /** Part Four */
    assistImmigration: string
    explainAssistImmigration: string
    beenDeported: string
    explainBeenDeported: string

    /** Part Five */
    withheldCustody: string
    explainWithheldCustody: string
    lawViolation: string
    explainLawViolation: string
    avoidTaxation: string
    explainAvoidTaxation: string

}
export interface additionalNamesArray {
    [index: number]:
    {
        additionalGivenName: string
        additionalSurname: string
    }
}
export interface additionalPhoneNumbersArray {
    [index: number]:
    {
        additionalPhoneNumber: string
    }
}
export interface otherEmailArray {
    [index: number]:
    {
        otherEmail: string
    }
}

export interface socialMediaArray {
    [index: number]:
    {
        socialMediaProvider: string
        socialMediaIdentifier: string
    }
}

export interface additionalSocialMediaArray {
    [index: number]:
    {
        additionalSocialMediaPlatform: string
        additionalSocialMediaHandle: string
    }
}
export interface militaryServices {
    [index: number]:
    {
        MilitarySpecialty: string
        branchOfService: string
        country: string
        rankOrPosition: string
        serviceEndDate: string
        serviceStartDate: string
    }
}
export interface unitedStatesArray {
    [index: number]:
    {
        tripDate: string
        tripDuration: string
        tripTime: string
    }
}
export interface spokenLanguages {
    [index: number]:
    {
        language: string
    }
}
export interface travelPlansArray {
    [index: number]:
    {
        arrivalCity: string
        arrivalFlight: string
        dateArrival: string
        dateDepature: string
        depatureCity: string
        depatureFlight: string
        planLocation: string
    }
}

export interface travelWithYouArray {
    [index: number]:
    {
        travelWithName: string
        travelWithSurname: string
        travelWithRelation: string
    }
}
export interface additionalQuestionsRelatives {
    [index: number]:
    {
        PreviousWorkCity: string
        PreviousWorkStreetAddress: string
        StateOrProvince: string
        ZIPOrPostalCode: string
        country: string
        employerName: string
        jobEndDate: string
        jobResponsibilities: string
        jobStartDate: string
        jobTitle: string
        phoneNumber: string
        supervisorGivenName: string
        supervisorSurName: string
    }
}

interface basicInfoRelatives {
    [index: number]:
    {
        motherRelativeGivenName: string
        motherRelativeRelation: string
        motherRelativeSurName: string
        motherRelativeTelephone: string
        motherRelativeUSCitizenStatus: string
    }
}
interface contactsForm {
    [index: number]:
    {
        ZIPOrPostalCode: string
        apartmentSuiteUnitNumber: string
        city: string
        contactGivenNames: string
        contactSurnames: string
        country: string
        email: string
        schoolPhoneNumber: string
        stateProvince: string
        streetAddress: string
    }
}
interface driverLicenseArray {
    [index: number]:
    {
        driverLicenseNumber: string
        driverLicenseState: string
    }
}
interface usVisasArray {
    [index: number]:
    {
        DateLastVisaWasIssued: string
        expirationDate: string
        visaNumber: string
        applyingForTheSameTypeOfVisa: string
        haveEverBeenTenPrinted: string
        applyingInTheSameCountry: string
        visaEverBeenCancelledOrRevoked: string
        cancellationDate: string
        pleaseExplain: string
        visaEverBeenLostOrStolen: string
        lostVisaYear: string
        stolenVisaPleaseExplain: string
    }
}
export interface additionalNationality {
    [index: number]:
    {
        additionalPassportNumber?: string
        additionalCountryName: string
    }
}

export interface formInfo {
    visaType: string
    submittingDate: string
}

export interface DivorcedForm {
    [index: number]:
    {

        numberOfFormerSpouses?: string,
        spouseGivenName?: string,
        spouseSurName?: string,
        spouseDateOfBirth?: string,
        spouseCountryName?: string,
        spouseCountryOfBirth?: string,
        spouseCityOfBirth?: string,
        marriageStartDate?: string,
        marriageEndDate?: string,
        howMarriageEnded?: string,
        countryRegionMarriageWasTerminated?: string,
    }

}

export interface DropDownList {
    value: string
    name: string
}

export interface FormDate {
    tab: string
    field: string
}

export interface FormDateArray {
    tab: string
    arr: string
    field: string
}

export interface _FormArray {
    tab: string
    arr: string
}

export interface _paymentInfo {
    cardNumber: string
    expirationMonth: string
    expirationYear: string
    amount: string
  }