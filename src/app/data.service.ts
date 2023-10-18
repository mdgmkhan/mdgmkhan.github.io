// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userData = new BehaviorSubject<any>(null);
  userData$ = this.userData.asObservable();

  setUserData(data: any) {
    this.userData.next(data);
  }
}
