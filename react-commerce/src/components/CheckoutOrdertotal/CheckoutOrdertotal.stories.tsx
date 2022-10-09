import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckoutOrdertotal from './CheckoutOrdertotal';

export default {
  title: 'E-commerce/components/CheckoutOrdertotal',
  component: CheckoutOrdertotal,
  argTypes: {},
  decorators: [(Story) => <section>{Story()}</section>],
} as ComponentMeta<typeof CheckoutOrdertotal>;

const Template: ComponentStory<typeof CheckoutOrdertotal> = (args) => (
  <CheckoutOrdertotal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
