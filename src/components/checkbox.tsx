import * as React from 'react';
import './checkbox.css';

type Props = {
  id: string;
  name: string;
  label?: React.ReactNode | string;
  className?: string;
  checked: boolean;
  value: string;
  disabled?: boolean;
};

// $FlowFixMe
const Checkbox = React.memo(function CheckboxFunction(props: Props) {
  const { label = '', id, className = '', disabled = false, ...attrs } = props;
  return (
    <div className={className} styleName={`custom-checkbox ${disabled ? 'disabled' : ''}`}>
      <input type="checkbox" id={id} styleName="checkbox" disabled={disabled} {...attrs} />
      <label htmlFor={id} styleName="label">
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
