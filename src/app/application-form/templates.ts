import { Validators } from '@angular/forms';
import * as interfaces from '../../models/application-form-interface'

export const usVisasArray = {
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
} as interfaces.unitedStatesArray

export const additionalNationality = {
    additionalPassportNumber: [''],
    additionalCountryName: ['', Validators.required],
}

export const basicInfoRelatives = {
    motherRelativeGivenName: ['', Validators.required],
    motherRelativeSurName: ['', Validators.required],
    motherRelativeRelation: ['', Validators.required],
    motherRelativeUSCitizenStatus: ['', Validators.required],
    motherRelativeTelephone: ['', Validators.required],
}

export const unitedStatesArray = {
    tripDate: ['', Validators.required],
    tripDuration: ['', Validators.required],
    tripTime: ['', Validators.required],
} as interfaces.unitedStatesArray

export const driverLicenseArray = {
    driverLicenseNumber: ['', Validators.required],
    driverLicenseState: ['', Validators.required],
}

export const travelWithYouArray = {
    travelWithName: ['', Validators.required],
    travelWithSurname: ['', Validators.required],
    travelWithRelation: ['', Validators.required],
} as interfaces.travelWithYouArray

export const travelPlansArray = {
    planLocation: ['', Validators.required],
} as interfaces.travelPlansArray

export const additionalQuestionsRelatives = {
    employerName: ['', Validators.required],
    jobTitle: ['', Validators.required],
    jobStartDate: ['', Validators.required],
    jobEndDate: ['', Validators.required],
    jobResponsibilities: ['', Validators.required],
    supervisorGivenName: ['', null],
    supervisorSurName: ['', null],
    phoneNumber: ['', Validators.required],
    PreviousWorkStreetAddress: ['', Validators.required],
    PreviousWorkCity: ['', Validators.required],
    apartmentSuiteUnitNumber: ['', null],
    ZIPOrPostalCode: ['', null],
    country: ['', Validators.required],
    StateOrProvince: ['', null],
} as interfaces.additionalQuestionsRelatives

export const militaryServices = {
    country: ['', Validators.required],
    branchOfService: ['', Validators.required],
    rankOrPosition: ['', Validators.required],
    MilitarySpecialty: ['', Validators.required],
    serviceStartDate: ['', Validators.required],
    serviceEndDate: ['', Validators.required],
} as interfaces.militaryServices

export const spokenLanguages = {
    language: ['', Validators.required],
} as interfaces.spokenLanguages

export const contactsForm = {
    contactGivenNames: ['', Validators.required],
    contactSurnames: ['', Validators.required],
    email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required,], null,],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    apartmentSuiteUnitNumber: ['', null],
    ZIPOrPostalCode: ['', null],
    country: ['', Validators.required],
    stateProvince: [''],
}

export const DivorcedForm = {
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
}

/*** ****/
export const infoTab = [
    {
        dependencyName: "isFatherInUSA",
        valueToCheck: 'no',
        dependencyFields: ['fatherUSCitizenStatus']
    },
    {
        dependencyName: "isMotherHaveImmediateRelativesInUSA",
        valueToCheck: 'no',
        dependencyFields: ['explainOtherRelations','basicInfoRelatives']
    },
    {
        dependencyName: "isMailingAddressDifferentFromHomeAddress",
        valueToCheck: 'no',
        dependencyFields: ['mailingStreetAddress1', 'mailingStreetAddress2', 'mailingCity', 'mailingCountry']
    },
    {
        dependencyName: "havetelecode",
        valueToCheck: 'no',
        dependencyFields: ['telecodeGivenNames', 'telecodeSurnames']
    },
    {
        dependencyName: "isOtherResidentCountry",
        valueToCheck: 'no',
        dependencyFields: ['residentCountryName']
    },
    {
        dependencyName: "isMotherInUSA",
        valueToCheck: 'no',
        dependencyFields: ['motherUSCitizenStatus']
    },
    {
        dependencyName: "maritalStatus",
        valueToCheck: 'WIDOWED',
        dependencyFields: ['spouseGivenName',
        'spouseSurName',
        'spouseDateOfBirth',
        'spouseNationality',
        'spouseCountryOfBirth',
        'spouseCityOfBirth',
        'spouseAddressType',
        'spouseAddress',
        'spouseCity',
        'spouseCountry']
    },
    {
        dependencyName: "maritalStatus",
        valueToCheck: 'DIVORCED',
        dependencyFields: ['spouseGivenName',
        'spouseSurName',
        'spouseDateOfBirth',
        'spouseNationality',
        'spouseCountryOfBirth',
        'spouseCityOfBirth',
        'spouseAddressType',
        'spouseAddress',
        'spouseCity',
        'spouseCountry']
    },
    {
        dependencyName: "maritalStatus",
        valueToCheck: 'SINGLE',
        dependencyFields: ['spouseGivenName',
        'spouseSurName',
        'spouseDateOfBirth',
        'spouseNationality',
        'spouseCountryOfBirth',
        'spouseCityOfBirth',
        'spouseAddressType',
        'spouseAddress',
        'spouseCity',
        'spouseCountry']
    },
    {
        dependencyName: "maritalStatus",
        valueToCheck: 'OTHER',
        dependencyFields: ['spouseGivenName',
        'spouseSurName',
        'spouseDateOfBirth',
        'spouseNationality',
        'spouseCountryOfBirth',
        'spouseCityOfBirth',
        'spouseAddressType',
        'spouseAddress',
        'spouseCity',
        'spouseCountry']
    },
    {
        dependencyName: "spouseAddressType",
        valueToCheck: 'yes',
        dependencyFields: ['spouseAddress',
        'spouseCity',
        'spouseCountry',
        ]
    },
]
export const tripInfoTab = [
    {
        dependencyName: "contactOrganizationOrPerson",
        valueToCheck: 'Organization',
        dependencyFields: ['contactPerson_name', 'contactPerson_surname']
    },
    {
        dependencyName: "contactOrganizationOrPerson",
        valueToCheck: 'Contact Person',
        dependencyFields: ['organizationName']
    },
    {
        dependencyName: "knowWhereStaying",
        valueToCheck: 'no',
        dependencyFields: ['stayingWithRelation', 'stayingWithEmail', 'stayingWithPhone', 'stayingWithStreetAddress', 'stayingWithApartment', 'stayingWithZIPcode']
    },
    {
        dependencyName: "knowWhereStaying",
        valueToCheck: 'yes',
        dependencyFields: ['cityStaying', 'stateStaying', 'hotelName']
    },
    {
        dependencyName: "tripSponsor",
        valueToCheck: 'Self',
        dependencyFields: ['payingCompanyName', 'payingCompanyRelationship', 'payingPersonGivenNames', 'payingPersonSurnames', 'payingPersonEmail', 'payingPhone', 'payingCompanyName', 'payingPersonRelationship', 'isAddressParty', 'isAddressStreet', 'isAddressStreet2', 'isAddressCity', 'isAddressZIP', 'isAddressState', 'isAddressCountry']
    },
    {
        dependencyName: "tripSponsor",
        valueToCheck: 'Other Person',
        dependencyFields: ['payingCompanyName']
    },
    {
        dependencyName: "tripSponsor",
        valueToCheck: 'Other Company / Organization',
        dependencyFields: ['payingPersonGivenNames', 'payingPersonSurnames', 'isAddressParty']
    },
    {
        dependencyName: "haveTravelPlans",
        valueToCheck: 'no',
        dependencyFields: ['travelWithName', 'travelWithSurname','travelWithRelation','dateOfArrival','dateOfDeparture','arrivalFlight','arrivalCity','departureFlight','departureCity']
    },
    {
        dependencyName: "haveTravelPlans",
        valueToCheck: 'yes',
        dependencyFields: ['intendedNumber', 'intendedDuration','intendedDate']
    },
    {
        dependencyName: "isUnitedStates",
        valueToCheck: 'no',
        dependencyFields: ['hasDriverLicense', 'driverLicenseArray']
    },
    {
        dependencyName: "travelWithYou",
        valueToCheck: 'no',
        dependencyFields: ['travelAsAGroup', 'groupName', 'travelWithYouArray']
    },
    {
        dependencyName: "travelAsAGroup",
        valueToCheck: 'no',
        dependencyFields: ['groupName']
    },
    {
        dependencyName: "travelAsAGroup",
        valueToCheck: 'yes',
        dependencyFields: ['travelWithYouArray']
    }
]

export const additionalDetailsTab = [
    {
        dependencyName: "areYouCurrentlyWorking",
        valueToCheck: 'yes',
        dependencyFields: [
            'notWorkingExplanation'
        ]
    },
    {
        dependencyName: "areYouCurrentlyWorking",
        valueToCheck: 'no',
        dependencyFields: [
            'workingField',
            'otherWorkingField',
            'NameOfEmployer',
            'employerPhoneNumber',
            'WorkingCity',
            'workingCountry',
            'workingStartDate',
            'monthlyIncome',
            'workDutiesDescription',
            'employerStreetAddress1',
            'employerStreetAddress2'
        ]
    },
    {
        dependencyName: "workingField",
        valueToCheck: "Retired",
        dependencyFields: [
            'otherWorkingField',
            'NameOfEmployer',
            'employerPhoneNumber',
            'WorkingCity',
            'workingCountry',
            'workingStartDate',
            'monthlyIncome',
            'workDutiesDescription',
            'employerStreetAddress1'
        ]
    },
    {
        dependencyName: "belongToClanOrTribe",
        valueToCheck: 'no',
        dependencyFields: ['belongToClanOrTribeName']
    },
    {
        dependencyName: "haveEverLostPassport",
        valueToCheck: 'no',
        dependencyFields: ['missedPassportTravelDocumentNumber', 'countryThatIssuedPassportDocument', 'explainLostPassport']
    },
    {
        dependencyName: "haveEverBeenMemberOfTaliban",
        valueToCheck: 'no',
        dependencyFields: ['haveEverBeenMemberOfTalibanExplanation']
    },
    {
        dependencyName: "haveEverInvolvedWithUnit",
        valueToCheck: 'no',
        dependencyFields: ['haveEverInvolvedWithUnitExplanation']
    },
    {
        dependencyName: "haveEverWorkedForOrganization",
        valueToCheck: 'no',
        dependencyFields: ['haveEverWorkedForOrganizationName']
    },
    {
        dependencyName: "haveTraveledOutsideYourCountry",
        valueToCheck: 'no',
        dependencyFields: ['haveTraveledOutsideYourCountryName']
    },
    {
        dependencyName: "haveAttendedInstitutionAcademic",
        valueToCheck: 'no',
        dependencyFields: ['highSchoolName', 'highSchoolCourseOfStudies', 'highSchoolCity', 'highSchoolCountry', 'highSchoolStartDate', 'highSchoolEndDate', 'highSchoolStreetAddress', 'highSchoolZIPOrPostalCode', 'highSchoolStateProvince']
    },
    {
        dependencyName: "specializedSkills",
        valueToCheck: 'no',
        dependencyFields: ['specializedSkillsExplanation']
    },
]
export const securityTab = [
    /** Part One */
    {
        dependencyName: "haveCommunicableDisease",
        valueToCheck: 'no',
        dependencyFields: ['explainCommunicableDisease']
    },
    {
        dependencyName: "haveDisorder",
        valueToCheck: 'no',
        dependencyFields: ['explainDisorder']
    },
    {
        dependencyName: "haveBeenAddict",
        valueToCheck: 'no',
        dependencyFields: ['explainBeenAddict']
    },

    /** Part Two */
    {
        dependencyName: "haveBeenArrested",
        valueToCheck: 'no',
        dependencyFields: ['explainBeenArrested']
    },
    {
        dependencyName: "haveYouViolated",
        valueToCheck: 'no',
        dependencyFields: ['explainYouViolated']
    },
    {
        dependencyName: "engagedInProstitution",
        valueToCheck: 'no',
        dependencyFields: ['explainProstitution']
    },
    {
        dependencyName: "moneyLaundering",
        valueToCheck: 'no',
        dependencyFields: ['explainLaundering']
    },
    {
        dependencyName: "humanTrafficking",
        valueToCheck: 'no',
        dependencyFields: ['explainTrafficking']
    },
    {
        dependencyName: "aidedHumanTrafficking",
        valueToCheck: 'no',
        dependencyFields: ['explainAidedTrafficking']
    },
    {
        dependencyName: "sonHumanTrafficking",
        valueToCheck: 'no',
        dependencyFields: ['explainSonTrafficking']
    },

    /** Part Three */
    {
        dependencyName: "seekEspionage",
        valueToCheck: 'no',
        dependencyFields: ['explainSeekEspionage']
    },
    {
        dependencyName: "seekTerrorism",
        valueToCheck: 'no',
        dependencyFields: ['explainSeekTerrorism']
    },
    {
        dependencyName: "financialAssistance",
        valueToCheck: 'no',
        dependencyFields: ['explainFinancialAssistance']
    },
    {
        dependencyName: "representTerrorism",
        valueToCheck: 'no',
        dependencyFields: ['explainRepresentTerrorism']
    },
    {
        dependencyName: "terroristRelative",
        valueToCheck: 'no',
        dependencyFields: ['ExplainTerroristRelative']
    },
    {
        dependencyName: "committedGenocide",
        valueToCheck: 'no',
        dependencyFields: ['explainCommittedGenocide']
    },
    {
        dependencyName: "committedTorture",
        valueToCheck: 'no',
        dependencyFields: ['explainCommittedTorture']
    },
    {
        dependencyName: "committedViolence",
        valueToCheck: 'no',
        dependencyFields: ['explainCommittedViolence']
    },
    {
        dependencyName: "childSoldier",
        valueToCheck: 'no',
        dependencyFields: ['explainChildSoldier']
    },
    {
        dependencyName: "religiousFreedom",
        valueToCheck: 'no',
        dependencyFields: ['explainReligiousFreedom']
    },
    {
        dependencyName: "freeWill",
        valueToCheck: 'no',
        dependencyFields: ['explainFreeWill']
    },
    {
        dependencyName: "humanOrgans",
        valueToCheck: 'no',
        dependencyFields: ['explainHumanOrgans']
    },

    /** Part Four */
    {
        dependencyName: "assistImmigration",
        valueToCheck: 'no',
        dependencyFields: ['explainAssistImmigration']
    },
    {
        dependencyName: "beenDeported",
        valueToCheck: 'no',
        dependencyFields: ['explainBeenDeported']
    },

    /** Part Five */
    {
        dependencyName: "withheldCustody",
        valueToCheck: 'no',
        dependencyFields: ['explainWithheldCustody']
    },
    {
        dependencyName: "lawViolation",
        valueToCheck: 'no',
        dependencyFields: ['explainLawViolation']
    },
    {
        dependencyName: "avoidTaxation",
        valueToCheck: 'no',
        dependencyFields: ['explainAvoidTaxation']
    },
    {
        dependencyName: "removalHearing",
        valueToCheck: "no",
        dependencyFields: ['explainRemovalHearing']
    },
    {
        dependencyName: "attendHearing",
        valueToCheck: "no",
        dependencyFields: ['explainAttendHearing']
    },
    {
        dependencyName: "unlawfullyPresent",
        valueToCheck: "no",
        dependencyFields: ['explainUnlawfullyPresent']
    }
]
export const formAuthorizationTab = []

/** Email templates */
export const successEmail = {
    toEmail:'',
    text:'Success',
    message:`Test Email`    
}