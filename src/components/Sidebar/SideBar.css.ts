import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '@/theme.css';
import { zIndexNav } from '@/util/style/zIndex.css';

export const sidebarRoot = style(
  {
    position: 'fixed',
    height: '100vh',
    paddingRight: 1,
    left: '0px',
    top: theme.len.navBarHeight,
    background: '#ECEFF3',
    boxShadow:
      '1px 1px 2px rgba(50, 85, 137, 0.25), inset -1px 0px 2px rgba(0, 0, 0, 0.25)',
    transition: 'transform 500ms',
    selectors: {
      '&.collapsed': {
        transform: 'translateX(-100%)',
      },
    },
    zIndex: 2,
  },
  'sidebarRoot',
);
export const sidebarInner = style(
  {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  'inner',
);
export const collapseButton = recipe(
  {
    base: [
      zIndexNav,
      {
        position: 'absolute',
        width: '12px',
        height: '54px',
        top: '63.78%',
        borderRadius: '15px 0px 0px 14px',
        border: 'none',
        padding: 0,
        transition: 'all 500ms',
        right: 0,
      },
    ],
    variants: {
      flip: {
        0: {
          background: '#DDE1E4',
          boxShadow:
            '0px 4px 4px rgba(33, 53, 82, 0.25), 0px 2px 2px rgba(24, 43, 61, 0.25), inset -1px -2px 2px rgba(79, 112, 142, 0.17)',
        },
        1: {
          transform: 'scaleX(-1) translateX(-100%)',
          background: '#ECF0F6',
          boxShadow:
            '2px 3px 8px rgba(33, 53, 82, 0.45), 0px 2px 2px rgba(24, 43, 61, 0.5), inset -1px -2px 2px rgba(79, 112, 142, 0.17)',
        },
      },
    },
    defaultVariants: { flip: 0 },
  },
  'collapseButton',
);

export const collapseButtonIconOverride = style(
  {
    color: '#364A67',
    fontSize: 12,
  },
  'collapseButtonIcon',
);
