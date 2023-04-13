import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  stationary=["pen","pencil","paper","Eraser","note"]
  userDetail={
    uid:"U101",
    username:"Ponvizhi.U",
  }
  Name = "";
  Number = '';
}
