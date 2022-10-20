import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from './ProductCard';
import { BrowserRouter } from 'react-router-dom';
import { Data } from '../Data/Data';

export default {
  title: 'E-commerce/components/ProductCard',
  component: ProductCard,
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: '320px' }}>{Story()}</div>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  img: 'https://user-images.githubusercontent.com/102884659/189200857-a9b159d1-5fc9-4ace-a2e9-6bfe7fbb986d.webp',
  label: 'new',
  name: Data[0].name,
  price: Data[0].price,
  shortdesc: Data[0].shortdesc,
  colorgroup: Data[0].colorgroup,
};
