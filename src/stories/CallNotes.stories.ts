import type { Meta, StoryObj } from '@storybook/react';
import { CallNotes, CallNotesProps } from './CallNotes';
import { fn } from '@storybook/test';

// Meta configuration for CallNotes
const meta: Meta<typeof CallNotes> = {
    title: 'Components/CallNotes',
    component: CallNotes,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
    },
    args: {
        onInput: fn(),
    },
} satisfies Meta<typeof CallNotes>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Story
export const Default: Story = {
    args: {
        placeholder: 'Add notes here...',
    },
};

// Additional Variants
export const WithCustomPlaceholder: Story = {
    args: {
        placeholder: 'Custom placeholder text...',
    },
};

export const Empty: Story = {
    args: {
        placeholder: '',
    },
};
