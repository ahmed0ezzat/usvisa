import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  toTouristVisa() {
    this.router.navigate(['/application-form'], { queryParams: { type: 'tourist' } });
  }
  toStudentVisa() {
    this.router.navigate(['/application-form'], { queryParams: { type: 'student' } });
  }
  toTransitVisa() {
    this.router.navigate(['/application-form'], { queryParams: { type: 'transit' } });
  }
}
