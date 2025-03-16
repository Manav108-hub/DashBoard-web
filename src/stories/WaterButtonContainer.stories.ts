import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import WaterButtonContainer from './WaterButtonContainer';

const meta = {
  title: 'Examples/ButtonContainer',
  component: WaterButtonContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    initialLabel: { control: 'text' },
    initialHref: { control: 'text' },
  },
} satisfies Meta<typeof WaterButtonContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default container
export const Default: Story = {
  args: {
    initialLabel: 'Dynamic Button',
    initialHref: '',
  },
};

// Container with initial link
export const WithInitialLink: Story = {
  args: {
    initialLabel: 'Visit Storybook',
    initialHref: 'https://storybook.js.org',
  },
};

// Interactive test example
export const InteractiveTest: Story = {
  args: {
    initialLabel: 'Test Button',
    initialHref: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Get the label input
    const labelInput = canvas.getByLabelText('Button Label');
    await expect(labelInput).toBeInTheDocument();
    
    // Change the label
    await userEvent.clear(labelInput);
    await userEvent.type(labelInput, 'New Label');
    
    // Add a link
    const hrefInput = canvas.getByLabelText(/Button Link/);
    await userEvent.clear(hrefInput);
    await userEvent.type(hrefInput, 'https://example.com');
    
    // Change the variant
    const outlineRadio = canvas.getByLabelText('Outline');
    await userEvent.click(outlineRadio);
    
    // Check that the button shows the new label
    const button = canvas.getByRole('link', { name: /New Label/i });
    await expect(button).toBeInTheDocument();
    
    // Check that it has the right href
    await expect(button).toHaveAttribute('href', 'https://example.com');
  },
};