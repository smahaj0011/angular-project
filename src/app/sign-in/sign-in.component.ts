import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

let signedIn = false;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  data
  invalidCredentials = false
  constructor(private router:Router,private route :ActivatedRoute) { 
    this.data = new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  

  ngOnInit(): void {
  }

  onSubmit(result) {
    
    if (result.value.email == "admin@test.com" && result.value.password == "admin123") {
      this.router.navigate(['dashboard'])
      signedIn = true
    } else {
      this.invalidCredentials = true
    }
  }

  close() {
    this.invalidCredentials = false
  }

}

export {signedIn}



