import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public cantidad = 0;
  @Output() quantityUpdate = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  keyUp() {
    this.cantidad += 1;
    this.quantityUpdate.emit(this.cantidad);
  }

  keyDown() {
    if (this.cantidad !== 0) {
      this.cantidad -= 1;
      this.quantityUpdate.emit(this.cantidad);
    }
  }

  test() {
    this.quantityUpdate.emit(this.cantidad);
  }
}
