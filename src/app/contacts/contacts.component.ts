import { Component, OnInit } from '@angular/core';
import { signedIn } from '../sign-in/sign-in.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute) { 
    
    // if(!signedIn) {
    //   this.router.navigate([''])
    //   return
    // }



  }

  ngOnInit(): void {
  }

  customers = [
    {
      department: 'Marketing',
      firstName: 'Test',
      lastName: 'Test',
      email: 'maketing@gmail.com',
      phone: '1234567891'
    },
    {
      department: 'Finance',
      firstName: 'Test',
      lastName: 'Test',
      email: 'finance@gmail.com',
      phone: '1344567891'
    },
    {
      department: 'Sales',
      firstName: 'Test',
      lastName: 'Test',
      email: 'sales@gmail.com',
      phone: '1344567834'
    },
    {
      department: 'Purchase',
      firstName: 'Test',
      lastName: 'Test',
      email: 'purchase@gmail.com',
      phone: '1344567882'
    }
  ]

}
