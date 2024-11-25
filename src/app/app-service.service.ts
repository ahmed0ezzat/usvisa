import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  lang$ = new BehaviorSubject<string>('')
  constructor() { }
}
