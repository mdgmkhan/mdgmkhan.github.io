import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
   email: string = '';
   username: string = '';
   mobile: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onProceed() {
    console.log('email data : ' , this.email);
    console.log('mobile data : ' , this.mobile);
    console.log('username data : ' , this.username);
    
    //call backend to save data
    const requestBody = {
      username: this.username,
      email: this.email,
      mobile: this.mobile
  };
  this.http.post('http://localhost:3000/register', requestBody).subscribe(
    (response) => {
      // Handle a successful response, if needed
      console.log('Registration successful', response);
    },
    (error) => {
      // Handle errors
      console.error('Error during registration', error);
    }
  );

    this.router.navigate(['/thankyou']);
  }
}
