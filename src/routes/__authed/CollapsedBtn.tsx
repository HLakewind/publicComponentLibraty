import { Button } from 'antd';
import { collapsedBtn } from './style.css';
import { ReactComponent as PandaIcon } from '@/icons/熊猫Icon.svg';

export default function CollapsedBtn({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  return (
    <Button
      type="text"
      icon={
        collapsed ? (
          <PandaIcon style={{ fontSize: '24px', transform: 'rotate(90deg)' }} />
        ) : (
          <PandaIcon
            style={{ fontSize: '24px', transform: 'rotate(270deg)' }}
          />
        )
      }
      onClick={() => setCollapsed(!collapsed)}
      className={collapsedBtn}
    />
  );
}
