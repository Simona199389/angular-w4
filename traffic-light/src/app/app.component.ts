import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  trafficLightColors: string[] = ['red', 'yellow', 'green'];
  currentColorIndex: number = 0;
  currentColorIndexV: number = 2;
  timerV: any
  timer: any
  isRed: boolean = true;
  isRedV: boolean = false;
  isCyclingColors: boolean = true;
  isWarned: boolean = false;

  constructor() {}

  ngOnInit(): void {
      this.cycleColors();
  }

  cycleColors() {
    setInterval(() => {
      if (!this.isCyclingColors) return;
      switch (this.currentColorIndex) {
        case 0:
          this.isRed = false;
          this.currentColorIndex = 1;
          this.timer = setTimeout(() => {
            this.currentColorIndex = 2;
          }, 2000);
          break;
        case 1:
          this.isRed = false;
          break;
        case 2:
          this.isRed = false;
          this.currentColorIndex = 1;
          this.timer = setTimeout(() => {
            this.isRed = true;
            this.currentColorIndex = 0;
          }, 2000);
          break;
      }
    }, 5000);

    setInterval(() => {
      if (!this.isCyclingColors) return;
      switch (this.currentColorIndexV) {
        case 0:
          this.isRedV = false;
          this.currentColorIndexV = 1;
          this.timerV = setTimeout(() => {
            this.currentColorIndexV = 2;
          }, 2000);
          break;
        case 1:
          this.isRedV = false;
          break;
        case 2:
          this.isRedV = false;
          this.currentColorIndexV = 1;
          this.timerV = setTimeout(() => {
            this.isRedV = true;
            this.currentColorIndexV = 0;
          }, 2000);
          break;
      }
    }, 5000);
  }

  handleButtonClick() {
    if (this.currentColorIndex == 1 || this.currentColorIndexV == 1) {
      alert('Неправилно пресичане !');
    }
  }
  
  handleEmergency() {
    clearTimeout(this.timer)
    clearTimeout(this.timerV)

    this.currentColorIndex = 1;
    this.currentColorIndexV = 1;

    const interval = setInterval(()=> {
      this.currentColorIndex = this.currentColorIndex === 1 ? 3 : 1 ;
      this.currentColorIndexV = this.currentColorIndexV === 1 ? 3 : 1 ;
    }, 700)

    this.isWarned = true;

    setTimeout(() => {
      this.currentColorIndex = 0;
      this.currentColorIndexV = 2;
      this.isWarned = false;
      clearInterval(interval)
    }, 10000);
  }
}
