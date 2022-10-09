import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductPage from './ProductPage';
import '../Data/Data';

export default {
  title: 'E-commerce/components/ProductPage',
  component: ProductPage,
  argTypes: {},
} as ComponentMeta<typeof ProductPage>;

const Template: ComponentStory<typeof ProductPage> = (args) => (
  <ProductPage {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
