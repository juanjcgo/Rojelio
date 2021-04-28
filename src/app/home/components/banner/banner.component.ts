import { Component, OnInit, AfterViewInit } from '@angular/core';

 import Swiper from 'swiper';
 import 'swiper/swiper-bundle.css';
 import SwiperCore, { Navigation, Pagination } from 'swiper/core';
 SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  images: string[] = [
		'assets/images/verdura-1.jpg',
    'assets/images/2.jpg',
    'assets/images/1.jpg',
	];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}
