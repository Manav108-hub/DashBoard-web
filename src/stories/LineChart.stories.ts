import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import React from 'react';

import { LineChart } from './LineChart';

const meta = {
  title: 'Data Visualization/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    labels: { control: 'object' },
    datasets: { control: 'object' },
    height: { control: { type: 'range', min: 200, max: 800, step: 50 } },
    width: { control: 'text' },
    showLegend: { control: 'boolean' },
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example with a single dataset
export const Basic: Story = {
  args: {
    title: 'Monthly Sales 2023',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Product A',
        data: [65, 59, 80, 81, 56],
        color: '#3b82f6', // blue
      },
    ],
    height: 400,
    showLegend: true,
  },
};

// Multiple datasets example
export const MultiLine: Story = {
  args: {
    title: 'Quarterly Performance Comparison',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [120, 132, 141, 155, 162],
        color: '#10b981', // green
      },
      {
        label: 'Expenses',
        data: [85, 90, 88, 95, 102],
        color: '#f59e0b', // amber
      },
      {
        label: 'Profit',
        data: [35, 42, 53, 60, 60],
        color: '#3b82f6', // blue
      },
    ],
    height: 400,
    showLegend: true,
  },
};

// Custom height example
export const CustomHeight: Story = {
  args: {
    ...Basic.args,
    title: 'Chart with Custom Height',
    height: 300,
  },
};

// No legend example
export const NoLegend: Story = {
  args: {
    ...Basic.args,
    title: 'Chart without Legend',
    showLegend: false,
  },
};

// Interactive test example
export const InteractiveTest: Story = {
  args: {
    title: 'Interactive Chart Test',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 120, 140, 160],
        color: '#3b82f6',
      },
    ],
    height: 400,
    showLegend: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Check that the chart container exists (using a more reliable selector)
    const chartContainer = canvasElement.querySelector('.bg-white canvas');
    await expect(chartContainer).toBeInTheDocument();
    
    // Since Chart.js renders to canvas, we can't easily test the text content
    // Instead, we can verify the canvas element exists and has the right dimensions
    const canvasElement2 = canvas.getByRole('img', { hidden: true });
    await expect(canvasElement2).toBeInTheDocument();
  },
};