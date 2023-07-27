import { Outlet } from '@modern-js/runtime/router';
import { Layout } from 'antd';
import { useState } from 'react';
import { contentStyle, headerStyle, siderStyle } from './style.css';
import SiderMenu from './SiderMenu';
import CollapsedBtn from './CollapsedBtn';

const { Header, Sider, Content } = Layout;

export default function Basic() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className={headerStyle}>前端公共组件</Header>
      <Layout hasSider>
        <Sider
          className={siderStyle}
          trigger={null}
          collapsedWidth={0}
          collapsible
          collapsed={collapsed}
        >
          <SiderMenu />
          <CollapsedBtn collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>
        <Content className={contentStyle}>
          <div
            style={{
              padding: 12,
              background: '#fff',
              height: `calc(100vh - 96px)`,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      {/* <Footer className={footerStyle}>Footer</Footer> */}
    </Layout>
  );
}
