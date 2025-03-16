import { fn } from '@storybook/test';
import WaterButton from './WaterButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/WaterButton',
  component: WaterButton,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    variant: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'outline'] 
    },
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'] 
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg
  args: { onClick: fn() },
};

export default meta;

// Default button
export const Default = {
  args: {
    label: 'Click Me',
    variant: 'primary',
    size: 'medium',
  },
};

// Button with link
export const WithLink = {
  args: {
    label: 'Go to Google',
    href: 'https://www.google.com',
    variant: 'primary',
    size: 'medium',
  },
};

// Secondary variant
export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

// Outline variant
export const Outline = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'medium',
  },
};

// Small size
export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

// Large size
export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

// Full width button
export const FullWidth = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Disabled button
export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};