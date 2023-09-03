import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
  group,
  state,
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          right: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '600ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const skewAnimation = trigger('skewAnimation', [
  state(
    'void',
    style({
      transform: 'skew(20deg) translateY(-10%) translateX(10%) rotateX(-20deg)',
    })
  ),
  transition('void<=>*', animate('1000ms ease')),
]);
