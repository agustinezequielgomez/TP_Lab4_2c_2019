import { Directive, OnInit, OnChanges, Renderer2, ElementRef, SimpleChanges, Input, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[appDisableOrders]'
})
export class DisableOrdersDirective implements AfterViewInit, OnChanges {

  private DIV;
  private P;
  private first = true;
  @Input() disable: boolean;
  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.alterRender();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.first) {
      timer(1000).subscribe(() => this.first = false);
    } else {
      this.alterRender();
    }
  }

  alterRender() {
    if (this.disable) {
      const DIV = this.renderer.createElement('div');
      const P = this.renderer.createElement('p');
      this.renderer.appendChild(P, this.renderer.createText('Solo podes preparar un pedido al mismo tiempo'));
      this.renderer.setAttribute(P, 'id', 'orderDisableText');
      this.renderer.setAttribute(DIV, 'id', 'orderDisableDiv');
      this.renderer.appendChild(DIV, P);
      this.renderer.insertBefore(this.host.nativeElement.parentNode, DIV, this.host.nativeElement);
      this.renderer.appendChild(DIV, this.host.nativeElement);
      this.DIV = DIV;
      this.P = P;
      this.renderer.destroyNode = this.host.nativeElement;
    } else if (this.disable === false && this.first === false) {
      this.renderer.removeChild(this.DIV, this.P);
      this.renderer.destroyNode = this.DIV;
    }
  }

}
