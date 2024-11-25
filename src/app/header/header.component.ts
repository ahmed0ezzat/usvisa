import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sub1 = new Subscription()
  showSearch = false;
  activeLang: any = {}
  langList = []
  allLangs = [
    {
      title: 'EN',
      flagURL: 'https://img.icons8.com/fluent/48/000000/usa-circular.png'
    },
    {
      title: 'ES',
      flagURL: 'https://img.icons8.com/color/48/000000/spain2-circular.png'
    },
    {
      title: 'PR',
      flagURL: 'https://img.icons8.com/color/48/000000/brazil-circular.png'
    }
  ]

  constructor(private router: Router, private active: ActivatedRoute, private appServiceService: AppServiceService) {
    const currentLang = localStorage.getItem('lang')
    if (currentLang) {
      const selectedLng = this.allLangs.filter(lang => lang.title == currentLang)
      if (selectedLng && selectedLng.length > 0) {
        this.activeLang = selectedLng
        this.activeLang = this.activeLang[0]
        this.langList = this.allLangs.filter(lang => lang.title != currentLang)
        this.switchLang(String(this.activeLang.title).toLowerCase())
      } else {
        this.activeLang = this.allLangs.filter(lang => lang.title == 'EN')
        this.activeLang = this.activeLang[0]
        this.langList = this.allLangs.filter(lang => lang.title != 'EN')
        this.switchLang('en')
      }
    } else {
      // RESET LANGUAGE TO BE (EN)
      localStorage.setItem('lang', 'EN')
      this.activeLang = this.allLangs.filter(lang => lang.title == localStorage.getItem('lang'))
      this.activeLang = this.activeLang[0]
      this.langList = this.allLangs.filter(lang => lang.title != localStorage.getItem('lang'))
      this.switchLang(localStorage.getItem('lang').toLocaleLowerCase())
    }
  }
  
  ngOnInit() { }

  closeMenu(): void {
    document.getElementById('navigation').style.display = 'none';
  }

  openMenu(): void {
    document.getElementById('navigation').style.display = 'block';
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

  selectedLang(val) {
    console.log(val)
    this.activeLang = this.allLangs.filter(lang => lang.title == val.title)
    this.activeLang = this.activeLang[0]
    this.langList = this.allLangs.filter(lang => lang.title != val.title)
    localStorage.setItem('lang', val.title)
    this.switchLang(val.title.toLocaleLowerCase())
  }

  switchLang(val: string) {
    return this.appServiceService.lang$.next(val)
  }

  scrollBottom() {
    const scrollHeight = document.body.scrollHeight
    window.scrollTo(0, scrollHeight)
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }
}
