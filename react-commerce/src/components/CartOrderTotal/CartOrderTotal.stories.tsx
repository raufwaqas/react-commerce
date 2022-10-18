import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartOrderTotal from './CartOrderTotal';

export default {
  title: 'E-commerce/components/CartOrderTotal',
  component: CartOrderTotal,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof CartOrderTotal>;

const Template: ComponentStory<typeof CartOrderTotal> = (args) => (
  <CartOrderTotal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  productTotal: 200,
};
