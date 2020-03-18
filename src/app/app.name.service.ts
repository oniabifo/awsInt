import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const API_URL:string = 'https://bxeqzkf2uh.execute-api.us-east-2.amazonaws.com/beta/Aecktan';


@Injectable()
export class UserService {

  private serviceUrl = 'https://bxeqzkf2uh.execute-api.us-east-2.amazonaws.com/beta/88888888';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL).map((users: Array<any>)=>{
        let userMap = users;
      return userMap;
    });
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
}