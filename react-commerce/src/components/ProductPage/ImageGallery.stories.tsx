import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageGallery from './ImageGallery';
import '../Data/Data';

export default {
  title: 'E-commerce/components/ImageGallery',
  component: ImageGallery,
  argTypes: {},
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <ImageGallery {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  img: 'https://user-images.githubusercontent.com/102884659/189200857-a9b159d1-5fc9-4ace-a2e9-6bfe7fbb986d.webp',
  colorgroup: 'group1',
};
