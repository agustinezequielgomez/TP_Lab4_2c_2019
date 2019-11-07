import { trigger, state, style, transition, animate } from '@angular/animations';

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