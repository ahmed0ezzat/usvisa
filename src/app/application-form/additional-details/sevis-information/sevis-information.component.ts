import { Component, Input, OnInit } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'
import { countries } from 'typed-countries'

@Component({
  selector: 'app-sevis-information',
  templateUrl: './sevis-information.component.html',
  styleUrls: ['./sevis-information.component.scss']
})
export class SevisInformationComponent implements OnInit {
  additionalDetailsTab = this.applicationFormService.applicationForm.get('additionalDetailsTab')
  @Input() isSubmit: Boolean
  countryList: any[] = []

  constructor(private applicationFormService: ApplicationFormService) { }
  ngOnInit(): void {
    this.countryList = countries
  }

}
