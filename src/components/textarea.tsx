import * as React from 'react';

// components
import ValidationBadge from './validation-badge';

import './textarea.css';

type Props = {
  id: string;
  name: string;
  label?: string;
  width?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  className?: string;
  onChange?: () => void;
  showValidation?: boolean;
  rows?: number;
  styleName?: string;
  value: string;
  autoFocus?: boolean;
  maxLength?: string;
  disabled?: boolean;
};

export default function Textarea(props: Props): JSX.Element {
  const {
    type = 'text',
    label = '',
    required = false,
    value,
    showValidation = false,
    placeholder = '',
    width = '100%',
    maxLength = '120',
    id,
    className,
    autoFocus = false,
    ...attrs
  } = props;

  const isEnabledShowValidation = showValidation && value;

  return (
    <label className={className} htmlFor={id} styleName="textarea-input-label" style={{ width }}>
      <span styleName="text-lebel">{label}</span>
      <textarea
        type={type}
        styleName={`textarea-input ${isEnabledShowValidation ? 'show-validation' : ''}`}
        rows="7"
        required={required}
        placeholder={`${placeholder}${placeholder && required ? '*' : ''}`}
        value={value}
        id={id}
        {...attrs}
      />
      {showValidation ? <ValidationBadge /> : null}
    </label>
  );
}
