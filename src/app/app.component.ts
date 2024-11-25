import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { TranslateService } from '@ngx-translate/core';
import { AppServiceService } from './app-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub1 = new Subscription()
  constructor(public translate: TranslateService, private appServiceService: AppServiceService, private router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    translate.addLangs(['en', 'es', 'pr']);
    translate.setDefaultLang('en');

    this.sub1 = this.appServiceService.lang$.subscribe(val => {
      if (val) {
        this.switchLang(val)
      }
    })
  }
  title = 'usvisa';

  ngOnDestroy() {
    this.sub1.unsubscribe()
  }
  closeMenu(): void {
    document.getElementById('navigation').style.display = 'none'
  }
  openMenu(): void {
    document.getElementById('navigation').style.display = 'block'
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
