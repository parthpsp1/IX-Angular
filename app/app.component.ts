import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-interaction';
  newArray: any = [
    //   {
    //   firstname: 'Parth',
    //   lastname: 'Pujari',
    //   email: 'parthpsp123@gmail.com'
    // },
    // {
    //   firstname: 'Pranav',
    //   lastname: 'Pujari',
    //   email: 'parthpsp123@gmail.com'
    // }
  ];

  details(event: any) {
    this.newArray = event;
  }

  editArray: any = [];
  data(event: any) {
    this.editArray = event;
  }
}
