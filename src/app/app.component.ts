import { Component,ViewChild, OnInit } from '@angular/core';
import { UserService  } from './app.name.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 


  title = 'awsInterv';
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['username', 'animeid'];
  constructor(private userService: UserService) { }

  ngOnInit() {
 
  }

  
}

export class UserDataSource extends DataSource<any> {
  
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
   
    this.userService.getUser().toPromise().then(x => console.log(x));
    return this.userService.getUser();
  }
  
  disconnect() {}

}