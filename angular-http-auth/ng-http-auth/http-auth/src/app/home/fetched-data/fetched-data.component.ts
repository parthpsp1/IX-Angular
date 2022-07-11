import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-fetched-data',
  templateUrl: './fetched-data.component.html',
  styleUrls: ['./fetched-data.component.scss']
})
export class FetchedDataComponent implements OnInit {

  fetched_data = [{
    id: '',
    name: '',
    username: '',
    email: ''
  }];

  constructor(private auth_service: AuthService) { }

  ngOnInit(): void {
    this.auth_service.getDataFromJSONPlaceholder().subscribe(data => {
      this.fetched_data = data;
      console.log(this.fetched_data);
    });
  }
}
