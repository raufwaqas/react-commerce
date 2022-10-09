// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'E-commerce/components/Text',
  component: Text,
  argTypes: {
    fontSize: {
      options: [
        'pcard-title',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'small-text',
      ],
      control: { type: 'select' },
    },
    fontWeight: {
      options: [
        'font-extra-light',
        'font-light',
        'font-normal',
        'font-medium',
        'font-bold',
        'font-Extra-bold',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
  fontSize: 'p',
  fontWeight: 'font-normal',
};
