import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartSectionHeader from './CartSectionHeader';

export default {
  title: 'E-commerce/components/CartSectionHeader',
  component: CartSectionHeader,
  argTypes: {},
  decorators: [(Story) => <section>{Story()}</section>],
} as ComponentMeta<typeof CartSectionHeader>;

const Template: ComponentStory<typeof CartSectionHeader> = (args) => (
  <CartSectionHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  cartHeader: 'Test',
};