import { Component, HostListener, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private shared: SharedService,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 768) {
      this.shared.sidebarActived = false;
    } else {
      this.shared.sidebarActived = true;
    }
  }
}
