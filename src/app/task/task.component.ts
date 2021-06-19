import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  num = 0
  classString
  text




  



  constructor() { 
    if(this.num == 0) {
      this.text = "Task Completed 0%"
      return
    }
  }

  ngOnInit(): void {
  }

  complete() {

    if(this.num == 100) {
      this.text = "Congrats!!"
      return
    }
    this.num += 25
    this.classString="progress-bar w-"+this.num
    this.text = `Task completed: ${this.num}%`
  }

  reset() {
    this.num = 0
    this.classString="progress-bar w-"+this.num
    this.text = `Task completed: ${this.num}%`
  }

}
