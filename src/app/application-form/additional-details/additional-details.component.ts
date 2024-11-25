import { Component, OnInit } from '@angular/core';
import { ApplicationFormService } from '../application-form-service.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.scss']
})
export class AdditionalDetailsComponent implements OnInit {
  visaType: string
  sub1 = new Subscription()
  sub2 = new Subscription()
  additionalDetailsTab = this.applicationFormService.applicationForm.get('additionalDetailsTab');
  isSubmit: Boolean = false
  constructor(private applicationFormService: ApplicationFormService, private snackBar: MatSnackBar) {
    this.sub1 =  this.applicationFormService.isSubmitAdditionalDetails$.subscribe(data => {
      this.isSubmit = data
    })
    this.sub2 = this.applicationFormService.visaType$.subscribe(val => {
      return this.visaType = val
    })
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
  }

}
