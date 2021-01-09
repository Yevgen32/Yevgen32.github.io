import * as React from 'react';
import './radio.css';

type Props = {
  id: string;
  name: string;
  label?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  value: string;
  type?: string;
  className?: string;
  styleName?: string;
  required?: boolean;
} & FieldAttrs;

export default class Radio extends React.Component<Props> {
  static defaultProps = {
    className: '',
    disabled: false,
  };

  render() {
    const { label, className, disabled, id, ...attrs } = this.props;

    return (
      <label htmlFor={id} styleName={`radio-input-label ${disabled ? 'disabled' : ''}`}>
        <div>
          <input type="radio" id={id} styleName="radio-input" {...attrs} disabled={disabled} />
          <div styleName="radio-box" />
        </div>
        {label ? (
          <div className={className} styleName="radio-input-label-text">
            {label}
          </div>
        ) : null}
      </label>
    );
  }
}
