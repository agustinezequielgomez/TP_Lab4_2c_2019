import { trigger, state, style, transition, animate, keyframes, query, animateChild, group } from '@angular/animations';

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

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('RightSide => LeftSide', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('.75s ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('.75s ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('LeftSide => RightSide', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('.75s ease-in-out', style({ left: '-100%'}))
          ]),
          query(':enter', [
            animate('.75s ease-in-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
  ]);
