import React, { ChangeEvent } from 'react';
import './callnotes.css';

export interface CallNotesProps {
    /** Placeholder text for the input */
    placeholder?: string;
    /** The initial content for the notes */
    initialValue?: string;
    /** Optional CSS class */
    className?: string;
    /** Optional callback when input changes */
    onInput?: (value: string) => void;
    /** Optional callback when input loses focus */
    onBlur?: () => void;
}

/** UI component for capturing notes during calls */
export const CallNotes: React.FC<CallNotesProps> = ({
                                                        placeholder = 'Enter your notes here...',
                                                        initialValue = '',
                                                        className = '',
                                                        onInput,
                                                        onBlur,
                                                        ...props
                                                    }) => {
    const [value, setValue] = React.useState<string>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onInput) onInput(newValue);  // Trigger onInput callback with new value
    };

    return (
        <textarea
            className={['callnotes-textarea', className].join(' ')}
            placeholder={placeholder}
            value={value}
           // onChange={handleChange}  // Correctly typed for <textarea>
            onBlur={onBlur}
            {...props}
        />
    );
};
