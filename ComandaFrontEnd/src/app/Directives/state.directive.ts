import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements AfterViewInit {

  constructor(private host: ElementRef) {}

    ngAfterViewInit(): void {
      switch (this.host.nativeElement.innerText) {
        case 'Pendiente':
          this.host.nativeElement.style.color = '#ee8637';
          break;

        case 'En preparacion':
        case 'Listo para servir':
          this.host.nativeElement.style.color = '#0ec704';
          break;

        case 'Entregado':
          this.host.nativeElement.style.color = '#0ec704';
          this.host.nativeElement.innerText = 'Entregado ✔️';
          break;

        case 'Cancelado':
          this.host.nativeElement.style.color = 'red';
          this.host.nativeElement.innerText = 'Cancelado ❌';
          break;
      }
    }
}
