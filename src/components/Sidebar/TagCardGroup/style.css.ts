import { style } from '@vanilla-extract/css';

export const tagCardGroup = style(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    filter:
      'drop-shadow(0px 1px 2px rgba(54, 78, 114, 0.25)) drop-shadow(0px 1px 4px rgba(36, 58, 80, 0.35))',
    flexWrap: 'nowrap',
    userSelect: 'none',
  },
  'tagCardGroup',
);
