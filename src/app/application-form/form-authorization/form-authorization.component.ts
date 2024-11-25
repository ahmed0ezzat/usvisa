import { Component, OnInit } from '@angular/core';
import { ApplicationFormService } from '../../application-form/application-form-service.service';
import { countries } from 'typed-countries'



@Component({
  selector: 'app-form-authorization',
  templateUrl: './form-authorization.component.html',
  styleUrls: ['./form-authorization.component.scss']
})
export class FormAuthorizationComponent implements OnInit {
  formAuthorizationTab = this.applicationFormService.applicationForm.get('formAuthorizationTab')
  countryList: any[] = []

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
    this.countryList = countries
  }

}
