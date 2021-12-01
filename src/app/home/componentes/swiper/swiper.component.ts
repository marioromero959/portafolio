import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper,{Autoplay} from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit {
  icons = [
    "./../../../../assets/stack.png",
  "./../../../../assets/angularLogo.png",
  "./../../../../assets/typeLogo.png",
  "./../../../../assets/sa.png",
  "./../../../../assets/ionicLogo.png",
  "./../../../../assets/nodejsLogo.png",
  "./../../../../assets/gitLogo.png",
  "./../../../../assets/bootstrapLogo.png"
]
   swiper:Swiper
  constructor() {}

  ngOnInit(){
  }
ngAfterViewInit(){
  Swiper.use([Autoplay]);
  this.swiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
      delay:1000,
      disableOnInteraction:false},
    slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },}
  });
} 
}
