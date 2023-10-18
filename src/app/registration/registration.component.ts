import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  mobile: string = '';
  university: string = '';
  course: string = '';
  yearofgraduation: string = '';
  nationality: string = '';
  socialmediaprofile: string = '';
  
  constructor(private router: Router, private http: HttpClient, private dataService: DataService) {}

  userData: any = {}; // Initialize an object to store user data


  onProceed() {
    console.log('user data : ' + this.firstname + ',' + this.lastname + ',' + this.email + ',' + this.mobile + ',' + this.course + ',' + this.university + ',' + this.yearofgraduation + ',' + this.nationality + ',' + this.socialmediaprofile);
    
    this.userData.firstname= this.firstname;
    this.userData.lastname= this.lastname;
    this.userData.email= this.email;
    this.userData.mobile= this.mobile;
    this.userData.university= this.university;
    this.userData.course= this.course;
    this.userData.yearofgraduation= this.yearofgraduation;
    this.userData.nationality= this.nationality;
    this.userData.socialmediaprofile= this.socialmediaprofile;

    // Send the data to the service
    this.dataService.setUserData(this.userData);

    this.router.navigate(['/pricing']);
  }
}
