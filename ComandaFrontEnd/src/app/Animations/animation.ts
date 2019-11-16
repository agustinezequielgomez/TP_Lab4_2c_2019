import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const ExpandRow  = trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]);

export const ExpandDiv = trigger('expandDiv', [
    transition(':enter', [style({height: '0px', minHeight: '0', opacity: '0'}),
                animate('1s ease-in-out', style({height: '*', opacity: '1'}))]),
    transition(':leave', [style({height: '*', opacity: '1'}),
    animate('1s ease-in-out', style({height: '0px', minHeight: '0', opacity: '0'}))]),
]);

export const ExpandForm = trigger('expandForm', [
  transition(':enter', [
      animate('1s ease-in-out', keyframes([
          style({ height: '0px', opacity: 0, offset: 0 }),
          style({ height: '*', opacity: '100%', offset: 1.0 })
      ]))
  ]),
  transition(':leave', [
      animate('1s ease-in-out', keyframes([
          style({ height: '*', opacity: '100%', offset: 0 }),
          style({ height: '0px', opacity: 0, offset: 1.0 })
      ]))
  ])
]);

export const FormOut = trigger('formOut', [
  transition(':leave', [
      animate('1s ease-in-out', keyframes([
          style({ height: '*', opacity: '100%', offset: 0 }),
          style({ height: '0px', opacity: 0, offset: 1.0 })
      ]))
  ])
]);
