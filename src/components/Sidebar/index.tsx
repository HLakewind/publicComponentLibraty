import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  CSSProperties,
} from 'react';
import clsx from 'clsx';

import {
  sidebarRoot,
  collapseButton,
  collapseButtonIconOverride,
  sidebarInner,
} from './SideBar.css';
import 'element-theme-chalk/src/icon.scss';

export interface SidebarProps
  extends PropsWithChildren<Pick<CSSProperties, 'width'>> {
  collapsible?: boolean;
  collapsed: boolean;
  style?: CSSProperties;
  onChange: Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({
  collapsible: collapsable,
  children,
  collapsed,
  style,
  onChange,
}: SidebarProps) {
  return (
    <aside
      className={clsx(sidebarRoot, collapsed && 'collapsed')}
      style={style}
    >
      <div className={sidebarInner}>
        {children}
        {collapsable && (
          <button
            className={collapseButton({ flip: collapsed ? 1 : 0 })}
            onClick={() => onChange(prev => !prev)}
            title="收起/展开（Tab）"
          >
            <i
              className={clsx(collapseButtonIconOverride, 'el-icon-arrow-left')}
            />
          </button>
        )}
      </div>
    </aside>
  );
}
