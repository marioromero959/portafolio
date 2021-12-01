import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  imagenes = [
    "./../../../../assets/stack.png",
    "./../../../../assets/angularLogo.png",
    "./../../../../assets/typeLogo.png",
    "./../../../../assets/scss.png",
    "./../../../../assets/ionicLogo.png",
    "./../../../../assets/nodeLogo.png",
    "./../../../../assets/gitLogo.png",
    "./../../../../assets/bootstrapLogo.png"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
