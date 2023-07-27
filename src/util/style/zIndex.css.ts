import { style } from '@vanilla-extract/css';

export const zIndexTop = style(
  {
    zIndex: 9999,
  },
  'zIndexTop',
);
export const zIndexDialog = style({
  zIndex: 1000,
});
export const zIndexNav = style({
  zIndex: 999,
});
