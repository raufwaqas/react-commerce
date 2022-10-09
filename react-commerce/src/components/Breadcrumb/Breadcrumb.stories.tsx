import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'E-commerce/components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
  decorators: [(Story) => <section>{Story()}</section>],
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
