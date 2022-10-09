import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopHeader from './TopHeader';
import '../Data/Data';

export default {
  title: 'E-commerce/components/TopHeader',
  component: TopHeader,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof TopHeader>;

const Template: ComponentStory<typeof TopHeader> = (args) => (
  <TopHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  promotion: 'Refreshing Cleansing Lotion NP',
};
