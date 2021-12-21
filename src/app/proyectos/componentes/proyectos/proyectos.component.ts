import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  animarCard(id){
    const card = document.querySelector(`.card${id}`);
    card.classList.add('animate__animated', 'animate__rubberBand');
    card.addEventListener('animationend', () => {
      card.classList.remove('animate__animated', 'animate__rubberBand');
    });
  }

}
