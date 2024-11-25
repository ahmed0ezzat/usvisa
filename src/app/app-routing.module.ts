import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops.component';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'application-form', component: ApplicationFormComponent },
  { path: 'about', component: AboutComponent},
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FaqComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: OopsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
