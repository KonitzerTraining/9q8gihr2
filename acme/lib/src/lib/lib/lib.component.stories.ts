import type { Meta, StoryObj } from '@storybook/angular';
import { LibComponent } from './lib.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LibComponent> = {
  component: LibComponent,
  title: 'LibComponent',
};
export default meta;
type Story = StoryObj<LibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/lib works!/gi)).toBeTruthy();
  },
};
