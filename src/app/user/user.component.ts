import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      name: 'Amit',
      email: 'amit@gmail.com',
      mobile: '12345678',
      role: 'Sales person'
    },
    {
      name: 'Lokesh',
      email: 'lokesh@gmail.com',
      mobile: '12345678',
      role: 'Branch Account team'
    },
    {
      name: 'Rahul',
      email: 'rahul@gmail.com',
      mobile: '12345678',
      role: 'Branch Account team'
    },
    {
      name: 'Safal',
      email: 'safal@gmail.com',
      mobile: '12345678',
      role: 'Sales person'
    }
  ]

}
