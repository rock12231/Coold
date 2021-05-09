import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  self: any = true;

  constructor(private meta: Meta, private title: Title) {
  }
  ngOnInit() {
    const domain = window.location.hostname;
    if (domain.indexOf('.') > 0) {
      if (domain.split('.')[0] === 'www' || domain.split('.')[0] === 'coold') {
        this.self = true
      } else if (domain.split('.')[0] === 'shubham') {
        this.self = false
      }
    } else {
      this.self = true
    }
    console.log(domain, this.self)

  }
}
