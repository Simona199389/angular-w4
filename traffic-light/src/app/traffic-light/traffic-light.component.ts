import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'traffic-light',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css',
})
export class TrafficLightComponent implements OnInit, OnChanges {
  trafficLightColors: string[] = ['red', 'yellow', 'green'];
  currentColorIndex: number = 0;
  timer: any;
  isRed: boolean = true;
  isCyclingColors: boolean = true;
  isWarned: boolean = false;

  @Input() public inputState: number = 0

  constructor() {}

  ngOnInit(): void {
    this.currentColorIndex = this.inputState
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentColorIndex = changes['inputState'].currentValue
  }

  handleButtonClick() {
    if (this.currentColorIndex == 1) {
      alert('Неправилно пресичане !');
    }
  }
}
