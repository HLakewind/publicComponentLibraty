import { recipe } from '@vanilla-extract/recipes';

export const tagCard = recipe(
  {
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 9,
      gap: '4px',
      height: '30px',
      background: '#EDEFF2',

      flexGrow: '1',
      boxSizing: 'border-box',
      border: 'none',
      cursor: 'pointer',

      whiteSpace: 'nowrap',
    },
    variants: {
      state: {
        active: {
          boxShadow:
            '0.5px 2px 0px #5B7FF3, inset -1px 0px 1px rgba(61, 99, 126, 0.25)',
        },
        default: {
          boxShadow: 'inset -1px 0px 1px rgba(61, 99, 126, 0.25)',
        },
      },
    },
  },
  'tagCard',
);
