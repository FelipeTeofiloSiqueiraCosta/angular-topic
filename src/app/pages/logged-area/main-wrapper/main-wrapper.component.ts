import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-initial',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css'],
})
export class MainWrapperComponent implements OnInit {
  constructor(public shared: SharedService) {}
  ngOnInit(): void {}
}
