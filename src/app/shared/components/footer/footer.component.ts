import { Component, OnInit } from '@angular/core';
import { icons } from './../../../models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: icons[] = [
    {
      id: '0',
      icon: 'assets/icons/8.png',
      title: 'WhatsApp'
    },
    {
      id: '1',
      icon: 'assets/icons/7.png',
      title: 'Youtube'
    },
    {
      id: '2',
      icon: 'assets/icons/6.png',
      title: 'Facebook'
    },
    {
      id: '3',
      icon: 'assets/icons/9.png',
      title: 'Google Maps'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
