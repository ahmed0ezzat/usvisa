import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationFormService } from '../application-form-service.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  basicInfoTab = this.applicationFormService.applicationForm.get('infoTab');
  sub1 = new Subscription()
  isSubmit: Boolean = false;
  constructor(private applicationFormService: ApplicationFormService) { 
    this.sub1 = this.applicationFormService.isSubmitInfoTab$.subscribe(data => {
      this.isSubmit = data
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

}
