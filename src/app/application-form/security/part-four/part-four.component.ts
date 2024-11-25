import { Component, OnInit, Input } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'

@Component({
  selector: 'app-part-four',
  templateUrl: './part-four.component.html',
  styleUrls: ['./part-four.component.scss']
})
export class PartFourComponent implements OnInit {
  @Input() isSubmit: Boolean;
  securityTab = this.applicationFormService.applicationForm.get('securityTab');

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void { }

}
