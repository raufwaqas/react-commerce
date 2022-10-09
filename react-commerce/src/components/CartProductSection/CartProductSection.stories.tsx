import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartProductSection from './CartProductSection';
import { Data } from '../Data/Data';

export default {
  title: 'E-commerce/components/CartProductSection',
  component: CartProductSection,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof CartProductSection>;

const Template: ComponentStory<typeof CartProductSection> = (args) => (
  <CartProductSection {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  artnr: Data[0].artnr,
  img: 'https://user-images.githubusercontent.com/102884659/189200857-a9b159d1-5fc9-4ace-a2e9-6bfe7fbb986d.png',
  name: Data[0].name,
  price: Data[0].price,
  qty: 1,
  total: Data[0].price,
};
