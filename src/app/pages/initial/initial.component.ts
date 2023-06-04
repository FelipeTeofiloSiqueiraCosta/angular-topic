import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
})
export class InitialComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.signIn('adm@adm.com', 'felipe123').then((result) => {
    //   console.log(result);
    // });
  }
}
