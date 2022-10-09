import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Nav from './Nav';

export default {
  title: 'E-commerce/components/Nav',
  component: Nav,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
