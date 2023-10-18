import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  userData: any;
  price: string = '';

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) {}

  ngOnInit() {
    // Subscribe to the user data from the service
    this.dataService.userData$.subscribe(data => {
      this.userData = data;
    });
  }

  onConfirm() {
    console.log('user price : ' + this.price);
    
    //call backend to save data
    this.userData.price=this.price;

    const requestBody = {
      firstname: this.userData.firstname,
      lastname: this.userData.lastname,
      email: this.userData.email,
      mobile: this.userData.mobile,
      university: this.userData.university,
      course: this.userData.course,
      yearofgraduation: this.userData.yearofgraduation,
      nationality: this.userData.nationality,
      socialmediaprofile: this.userData.socialmediaprofile,
      price : this.userData.price  };

  this.http.post('http://localhost:3000/register', requestBody).subscribe(
    // this.http.post('https://8d9f-2405-201-c016-201e-e9f1-7702-5358-7b31.ngrok-free.app/register', requestBody).subscribe(
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
