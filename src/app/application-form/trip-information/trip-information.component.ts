import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ApplicationFormService } from '../application-form-service.service'

@Component({
  selector: 'app-trip-information',
  templateUrl: './trip-information.component.html',
  styleUrls: ['./trip-information.component.scss'],
})
export class TripInformationComponent implements OnInit {
  isSubmit: Boolean = false
  sub1 = new Subscription()
  tripInformationTab = this.applicationFormService.applicationForm.get(
    'tripInfoTab'
  )

  constructor(private applicationFormService: ApplicationFormService) {
    this.sub1 = this.applicationFormService.isSubmitTripInfo$.subscribe(data => {
      this.isSubmit = data
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

  next() {
    this.isSubmit = true
    console.log(this.tripInformationTab)
  }
}
