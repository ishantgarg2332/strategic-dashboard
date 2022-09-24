import { createElement } from 'react';
import { BarChartOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const sidebarOptions: MenuProps['items'] = [{
  icon: PlusCircleOutlined,
  label: '',
},{
    icon: BarChartOutlined,
    label: ''
}].map(
    (options, index) => {
      const key = `${index + 1}`;
  
      return {
        key,
        icon: createElement(options.icon),
        label: options.label,
      };
    },
  );
