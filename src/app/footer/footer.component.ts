import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toTouristVisa(){
    this.router.navigate(['/application-form'], { queryParams: { type:'tourist' }});
  }
  toStudentVisa(){
    this.router.navigate(['/application-form'], { queryParams: { type:'student' }});
  }
  toTransitVisa(){
    this.router.navigate(['/application-form'], { queryParams: { type:'transit' }});
  }
}
