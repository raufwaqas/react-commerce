import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductTitleSection from './ProductTitleSection';
import '../Data/Data';

export default {
  title: 'E-commerce/components/ProductTitleSection',
  component: ProductTitleSection,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof ProductTitleSection>;

const Template: ComponentStory<typeof ProductTitleSection> = (args) => (
  <ProductTitleSection {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'Refreshing Cleansing Lotion NP',
  artnr: 101472,
  price: 200,
  shortdesc:
    'Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone. ',
};
