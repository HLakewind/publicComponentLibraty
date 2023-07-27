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
  color: '#fff',
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
  color: '#fff',
  backgroundColor: '#7dbcea',
});
export const collapsedBtn = style({
  fontSize: '16px',
  position: 'absolute',
  top: '40%',
  right: -27,
});
