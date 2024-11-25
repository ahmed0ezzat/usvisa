import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationFormService } from '../application-form-service.service'

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  isSubmit: Boolean;
  sub1 = new Subscription()
  securityTab = this.applicationFormService.applicationForm.get('securityTab');
  
  constructor(private applicationFormService: ApplicationFormService) { }

  ngOnInit(): void {
    this.sub1 = this.applicationFormService.isSubmitSecurity$.subscribe(data => {
      this.isSubmit = data
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }
}
