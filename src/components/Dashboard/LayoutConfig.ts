import { createElement } from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const sidebarOptions: MenuProps['items'] = [{
    icon: BarChartOutlined,
    label: 'Campaigns'
}].map(
    (options, index) => {
      const key = String(index + 1);
  
      return {
        key,
        icon: createElement(options.icon),
        label: options.label,
      };
    },
  );
