import { Directive, Renderer2, ElementRef, OnInit, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';

@Directive({
  selector: '[appPaginator]'
})
export class PaginatorDirective implements OnInit{

  @Input() adminTemplate: boolean;
  @Output() clicked = new EventEmitter();
  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit() {
    if (this.adminTemplate) {
      const BUTTON = this.renderer.createElement('button');
      this.renderer.appendChild(BUTTON, this.renderer.createText('Agregar alimento'));
      this.renderer.addClass(BUTTON, 'ng-tns-c3-0');
      this.renderer.addClass(BUTTON, 'mat-raised-button');
      this.renderer.addClass(BUTTON, 'mat-button-base');
      this.renderer.addClass(BUTTON, 'mat-accent');
      this.renderer.setProperty(BUTTON, '_ngcontent-uoo-c3', '');
      this.renderer.setProperty(BUTTON, 'mat-raised-button', '');
      this.renderer.setProperty(BUTTON, 'ng-reflect-color', 'accent');
      const raised = new MatButton(new ElementRef(BUTTON), new FocusMonitor(new NgZone({enableLongStackTrace: false}), new Platform()), 'MatRipple');
      this.renderer.addClass(BUTTON, 'pagButton');
      this.renderer.listen(BUTTON, 'click', () => this.clicked.emit());
      this.renderer.appendChild(this.host.nativeElement.children[0], BUTTON);
    }
  }
}
