import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo : string;

  constructor() { }

  ngOnInit() {
    this.title = 'Curso Angular Aubay';
    this.logo = '../../assets/logo.svg';
  }

}
