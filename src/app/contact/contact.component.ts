import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  getName=""
  getEmail=""
  getMob=""
  getMsg=""

  onSubmit(form:NgForm)
  {
    console.log(form.value)
    this.getName=form.value.name
    this.getEmail=form.value.email
    this.getMob=form.value.mobile
    this.getMsg=form.value.message
  }
  constructor() { }

  ngOnInit() {
  }

}
