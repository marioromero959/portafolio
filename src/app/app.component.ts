import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mario Romero Web';
  id = "tsparticles";
  particlesOptions:any = {
      background: {
          color: {
              value: "#000"
          }
      },
      fpsLimit: 60,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push"
              },
              onHover: {
                  enable: false,
                  mode: "repulse"
              },
              resize: true
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 1,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 1
              },
              repulse: {
                  distance: 100,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: "#ffffff"
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          collisions: {
              enable: false
          },
          move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 4,
              straight: true
          },
          number: {
              density: {
                  enable: true,
                  value_area: 1000
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: "circle"
          },
          size: {
              random: true,
              value: 2
          }
      },
      detectRetina: true
  };

  particlesLoaded(container: Container): void {}

particlesInit(main: Main): void {}
ngOnInit(){
    AOS.init()
}
}
