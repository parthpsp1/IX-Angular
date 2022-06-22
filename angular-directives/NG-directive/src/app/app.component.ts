import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG-directive';
  bgColor: any =
    {
      'background-color': '#999999'
    };
  click = true;
  hiddenText = 'Hide';
  user_data =
    [
      {
        first_name: 'Parth',
        last_name: 'Pujari',
        zipcode: '411030',
        phoneno: '123456890',
      },
      {
        first_name: 'Vedant',
        last_name: 'Mishra',
        zipcode: '411020',
        phoneno: '123456890',
      },
      {
        first_name: 'Vaibhavi',
        last_name: 'Zende',
        zipcode: '411010',
        phoneno: '321456890',
      },
      {
        first_name: 'Shardul',
        last_name: 'Bhingardive',
        zipcode: '411009',
        phoneno: '321458190',
      },
      {
        first_name: 'Bhagyesh',
        last_name: 'Chorde',
        zipcode: '411001',
        phoneno: '321458910',
      },
      {
        first_name: 'Atharva',
        last_name: 'Dhavale',
        zipcode: '411020',
        phoneno: '321485910',
      },
      {
        first_name: 'Isha',
        last_name: 'Kanhere',
        zipcode: '411000',
        phoneno: '321485190',
      }
    ]
  hidePhoneNoCol() {
    this.click = !this.click;
    if (this.click == false) {
      //alert("False aloy me");
      this.hiddenText = 'Show';
    }
    else if (this.click == true) {
      //alert("TRUE ALOY ME");
      this.hiddenText = 'Hide';
    }
    return this.click;
  }
}
