import { ComponentStory, ComponentMeta } from '@storybook/react';
import Btn from './Btn';

export default {
  title: 'E-commerce/components/Btn',
  component: Btn,
  argTypes: {
    bgcolor: {
      options: [
        'primary',
        'dark',
        'light',
        'primary-full',
        'dark-full',
        'light-full',
        'small-primary',
        'small-light-grey',
        'small-dark-grey',
      ],
      control: { type: 'select' },
      // options: ['full', 'half', 'small'],
    },
  },
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Next',
  bgcolor: 'primary',
};
