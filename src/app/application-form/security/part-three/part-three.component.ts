import { Component, OnInit, Input } from '@angular/core'
import { ApplicationFormService } from '../../application-form-service.service'

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.scss']
})
export class PartThreeComponent implements OnInit {
  @Input() isSubmit: Boolean;
  securityTab = this.applicationFormService.applicationForm.get('securityTab');

  constructor(public applicationFormService: ApplicationFormService) { }

  ngOnInit(): void { }

}
