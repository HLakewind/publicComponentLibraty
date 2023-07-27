import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const theme = createGlobalThemeContract({
  color: {
    foreground: 'foreground',
    primary: 'primary',
    // 淡化的theme.color.primary
    primaryHalfAlpha: 'primary-half-alpha',
    textPrimary: 'text-primary',
    '字体/灰': 'text-gray',
    '字体/深蓝': 'text-deep-blue',
    danger: 'danger',
    iconMain: 'icon-main',
    selected: 'item-selected',
  },
  typo: {
    fontFamily: 'font-family',
  },
  len: {
    navBarHeight: 'navbar-height',
  },
});
createGlobalTheme(':root', theme, {
  color: {
    foreground: '#F9FBFD',
    primary: '#4E85CA',
    primaryHalfAlpha: '#4E85CA80',
    textPrimary: '#303133',
    '字体/灰': '#9095A2',
    '字体/深蓝': '#2A3256',
    danger: '#F56C6C',
    iconMain: '#4E5969',
    selected: '#C2D3E9',
  },
  typo: {
    fontFamily:
      '"Microsoft YaHei UI","Microsoft YaHei","PingFang SC","WenQuanYi Micro Hei",Helvetica,sans-serif',
  },
  len: {
    navBarHeight: '48px',
  },
});
