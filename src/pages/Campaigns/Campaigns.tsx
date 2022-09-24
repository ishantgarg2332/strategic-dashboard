import { FunctionComponent } from 'react';
import { Tabs } from 'antd'
import AllCampaigns from '../All-Campaigns/All-Campaigns';
import DraftedCampaigns from '../Drafted-Campaigns/Drafted-Campaigns';
import { MailOutlined, LineChartOutlined } from '@ant-design/icons'
import { LooseObject } from '../../globalTypes';
import { StyledWrapper } from './Campaign.styled'

const campaignTabItems = [{
    icon: LineChartOutlined,
    label: 'All Campaigns',
    key: 1,
    child: AllCampaigns
},
{
    icon: MailOutlined,
    label: 'Drafted Campaigns',
    key: 2,
    child: DraftedCampaigns
}];

const Campaigns: FunctionComponent = () => {
    return (
      <StyledWrapper>
        <Tabs defaultActiveKey="1"
          items={campaignTabItems.map((item: LooseObject) => {
        const Icon = item.icon
        const ChildComponent = item.child
            return {
                key: item.key,
                label: (
                  <span>
                    <Icon />
                    {item.label}
                  </span>
                ),
                children: <ChildComponent />
            }
        })}
          size='large'
        />
      </StyledWrapper>
    )
}

export default Campaigns;