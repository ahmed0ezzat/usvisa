import { Component, Input, OnInit } from '@angular/core';
import { ApplicationFormService } from '../../application-form-service.service'

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.scss']
})
export class PartTwoComponent implements OnInit {
  @Input() isSubmit: Boolean;
  securityTab = this.applicationFormService.applicationForm.get('securityTab');

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
  }

}
