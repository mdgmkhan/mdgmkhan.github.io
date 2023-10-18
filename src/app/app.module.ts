import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PricingComponent } from './pricing/pricing.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'pricing', component: PricingComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    ThankyouComponent,
    PricingComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)], // Include FormsModule here
  bootstrap: [AppComponent],
})
export class AppModule {}
