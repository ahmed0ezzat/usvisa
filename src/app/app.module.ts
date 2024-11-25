import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops.component';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BasicInfoComponent } from './application-form/basic-info/basic-info.component'
import { FooterComponent } from './footer/footer.component';
import { PersonalInformationComponent } from './application-form/basic-info/personal-information/personal-information.component';
import { AdditionalNationalitiesComponent } from './application-form/basic-info/additional-nationalities/additional-nationalities.component';
import { AboutYourParentsComponent } from './application-form/basic-info/about-your-parents/about-your-parents.component';
import { ContactInformationComponent } from './application-form/basic-info/contact-information/contact-information.component';
import { HeaderComponent } from './header/header.component';
import { TripInformationComponent } from './application-form/trip-information/trip-information.component';
import { PastTravelApplicationsComponent } from './application-form/trip-information/past-travel-applications/past-travel-applications.component';
import { UpcommingTripComponent } from './application-form/trip-information/upcomming-trip/upcomming-trip.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { AdditionalDetailsComponent } from './application-form/additional-details/additional-details.component';
import { AdditionalQuestionsComponent } from './application-form/additional-details/additional-questions/additional-questions.component';
import { PassportInformationComponent } from './application-form/additional-details/passport-information/passport-information.component';
import { SevisInformationComponent } from './application-form/additional-details/sevis-information/sevis-information.component';
import { AdditionalPointOfContactInformationComponent } from './application-form/additional-details/additional-point-of-contact-information/additional-point-of-contact-information.component';
import { FormAuthorizationComponent } from './application-form/form-authorization/form-authorization.component';
import { CreditCardInformationComponent } from './application-form/credit-card-information/credit-card-information.component';
import { FormAuthPopulationDialogComponent } from './dialogs/form-auth-population-dialog/form-auth-population-dialog.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { SecurityComponent } from './application-form/security/security.component';
import { PartOneComponent } from './application-form/security/part-one/part-one.component';
import { PartTwoComponent } from './application-form/security/part-two/part-two.component';
import { PartThreeComponent } from './application-form/security/part-three/part-three.component';
import { PartFourComponent } from './application-form/security/part-four/part-four.component';
import { PartFiveComponent } from './application-form/security/part-five/part-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OopsComponent,
    ApplicationFormComponent,
    BasicInfoComponent,
    FooterComponent,
    PersonalInformationComponent,
    AdditionalNationalitiesComponent,
    AboutYourParentsComponent,
    ContactInformationComponent,
    HeaderComponent,
    TripInformationComponent,
    PastTravelApplicationsComponent,
    UpcommingTripComponent,
    AdditionalDetailsComponent,
    AdditionalQuestionsComponent,
    PassportInformationComponent,
    SevisInformationComponent,
    AdditionalPointOfContactInformationComponent,
    FormAuthorizationComponent,
    CreditCardInformationComponent,
    FormAuthPopulationDialogComponent,
    AboutComponent,
    TermsComponent,
    FaqComponent,
    SecurityComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent,
    PartFourComponent,
    PartFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}