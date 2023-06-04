import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
  private isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    localStorage.theme = this.isDarkMode ? 'dark' : 'light';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    localStorage.theme = this.isDarkMode ? 'dark' : 'light';

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
