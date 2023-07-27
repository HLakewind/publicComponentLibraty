import { globalStyle, style } from '@vanilla-extract/css';

export const headerStyle = style({
  color: '#fff',
  height: 48,
  paddingInline: 50,
  lineHeight: '48px',
  backgroundColor: '#273e61',
});

export const contentStyle = style({
  height: '100%',
  backgroundColor: '#f0f2f5',
  padding: 24,
});

export const siderStyle = style({
  position: 'relative',
});
globalStyle(`.${siderStyle}>.ant-layout-sider-children`, {
  backgroundColor: '#fff',
});

export const footerStyle = style({
  textAlign: 'center',
  backgroundColor: '#7dbcea',
});
export const collapsedBtn = style({
  fontSize: '16px',
  position: 'absolute',
  top: '40%',
  right: -27,
});
export const siderMenu = style({
  height: '100%',
  borderRight: 0,
  paddingTop: '10px',
  fontSize: '12px',
});
globalStyle(`.${siderMenu}.ant-menu-vertical >.ant-menu-item`, {
  lineHeight: '32px',
  height: 32,
});
