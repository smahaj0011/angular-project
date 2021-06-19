import { Component, OnInit } from '@angular/core';
import { signedIn } from '../sign-in/sign-in.component';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute) { 

    if(!signedIn) {
      this.router.navigate([''])
      return
    }


    
  }

  ngOnInit(): void {
  }

  contactManagment() {
    this.router.navigate(['contactmanagment'])
  }

  userManagment() {
    this.router.navigate(['usermanagment'])
  }

  dashboard() {
    this.router.navigate(['dashboard'])
  }

  logout() {
    this.router.navigate([''])
  }

}

