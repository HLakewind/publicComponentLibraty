import { Menu, MenuProps } from 'antd';
import { useMatches, useNavigate } from '@modern-js/runtime/router';
import { useMemo } from 'react';
import { siderMenu } from './style.css';

export default function SiderMenu() {
  const navigate = useNavigate();
  const matches = useMatches();

  // 保证页面刷新路由一致
  const cur = useMemo(() => {
    return matches[matches.length - 1].pathname;
  }, [matches]);
  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      className={siderMenu}
      defaultSelectedKeys={[cur]}
      items={[
        {
          key: '/collapse-table/',
          //   icon: <UserOutlined />,
          label: '可折叠表格',
        },
        {
          key: '/complex-transfer/',
          //   icon: <VideoCameraOutlined />,
          label: '复杂穿梭框',
        },
      ]}
    />
  );
}
