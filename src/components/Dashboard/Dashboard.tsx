import {  FunctionComponent } from 'react';
import 'antd/dist/antd.css';
import { Outlet } from 'react-router-dom'
import { sidebarOptions } from './LayoutConfig'
import { Layout, Menu, Typography } from 'antd';

const { Header, Content, Sider } = Layout;

const { Title } = Typography;

const Dashboard: FunctionComponent = () => {
    return <>
      <Layout>
        <Header className="header"
          style={{ paddingLeft: 0 }}
        >
          <Title style={{ color: 'white', marginTop: '5px', marginLeft: '5px' }}>Orion Dashboard</Title>
        </Header>
        <Layout>
          <Sider className="site-layout-background"
            width={200}
          >
            <Menu defaultSelectedKeys={['1']}
              items={sidebarOptions}
              mode="inline"
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content className="site-layout-background">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
}

export default Dashboard;