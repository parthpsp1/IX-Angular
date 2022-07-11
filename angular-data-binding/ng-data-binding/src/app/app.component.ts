import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

  birthdate: any;
  age: any;
  image = "https://thumbs.dreamstime.com/b/default-avatar-user_profile-icon-social-media-user-vector-default-avatar-user_profile-icon-social-media-user-vector-portrait-176194876.jpg"
  redcolor: string = "red";
  greencolor: string = "green";
  size: string = '2px';
  user_profile = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
  }

  ngOnInit(): void {
  }

  calculateAge() {
    if (this.birthdate) {
      const convertAge = new Date(this.birthdate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(this.age);
    }
  }
  getDetails() {
    console.log(this.user_profile);
  }
}
