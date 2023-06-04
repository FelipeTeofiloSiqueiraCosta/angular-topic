import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  public topicId: string | null = '';
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.topicId = this.activateRoute.snapshot.paramMap.get('topicId');
  }
}
