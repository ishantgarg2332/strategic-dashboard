import {  FunctionComponent, useCallback, useState } from 'react';
import 'antd/dist/antd.css';
import { Outlet } from 'react-router-dom'
import { sidebarOptions } from './LayoutConfig'
import { Layout, Menu, Typography, Modal } from 'antd';
import { LooseObject } from '../../globalTypes';

const { Header, Content, Sider } = Layout;

const { Title } = Typography;

const Dashboard: FunctionComponent = () => {

  const [openNewCampaignModal, setOpenNewCampaignModal] = useState<boolean>(false);

  const onClickMenuItems = useCallback((item: LooseObject) => {
    const { key } = item;

    if(key === '1'){
      setOpenNewCampaignModal(true)
    }
  }, [])

    return <>
      <Modal onCancel={() => setOpenNewCampaignModal(false)}
        onOk={() => {}}
        open={openNewCampaignModal}
        style={{ top: 20 }}
        title="Create a new campaign"
        width={'100vw'}
      >
        <div style={{ height: '425px', overflowY: 'scroll' }}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </Modal>
      <Layout>
        <Header className="header"
          style={{ paddingLeft: 0 }}
        >
          <Title style={{ color: 'white', marginTop: '5px', marginLeft: '5px' }}>Orion Dashboard</Title>
        </Header>
        <Layout>
          <Sider className="site-layout-background"
            style={{ 
              background: '#fff',  
            }}
            width={65}
          >
            <Menu defaultSelectedKeys={['2']}
              items={sidebarOptions}
              mode="inline"
              onClick={onClickMenuItems}
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