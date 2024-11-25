import { Component, OnInit, Input } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'

@Component({
  selector: 'app-part-five',
  templateUrl: './part-five.component.html',
  styleUrls: ['./part-five.component.scss']
})
export class PartFiveComponent implements OnInit {
  @Input() isSubmit: Boolean;
  securityTab = this.applicationFormService.applicationForm.get('securityTab');

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void { }

}
