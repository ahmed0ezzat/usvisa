import { Component, OnInit, Input } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss']
})
export class PartOneComponent implements OnInit {
  @Input() isSubmit: Boolean;
  securityTab = this.applicationFormService.applicationForm.get('securityTab');

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
  }

}
