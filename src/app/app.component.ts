import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileShopping';
  name = 'Ponvizhi Uday';
  Mobilenumber = 9094109443;
  age = 22;
  company = 'aspire systems';
  position='center';
  message = 'Good Morning';
  empName = "";
  Number: '' | undefined;
  changeMessage(){
    this.message="Greetings!!"
  }
}
