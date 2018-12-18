import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users=[];
  error ='';

  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }


  ngOnInit() {
  }

  login(username, password, email) {
    this.userservice.login(username, password, email)
    .subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        this.error = error;
      }
    )
  }
   
    }
