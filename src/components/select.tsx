import * as React from 'react';
import './select.css';

// components
import ValidationBadge from './validation-badge';

// icons
import { IconThinArrowBottom } from '../icon/glyphs';

type RenderableValue = number | string;

export type Option = {
  readonly label: RenderableValue;
  readonly value: RenderableValue;
  readonly disabled?: boolean;
  readonly labelInfo?: string;
};

export type Options = ReadonlyArray<Option>;

export function getOption(
  label: RenderableValue,
  value: RenderableValue,
  disabled = false,
): Option {
  return { label, value, disabled };
}

type Values = RenderableValue[];

export function arrayToOptions(values: Values): Option[] {
  return values.map(value => getOption(value, value));
}

export function getRange(start: number, finish: number, step = 1): RenderableValue[] {
  let i = start;
  const range = [];
  while (i <= finish) {
    range.push(i);
    i += step;
  }
  return range;
}

export type SelectProps = {
  id: string;
  name: string;
  label?: React.ReactNode;
  value: string | number | null;
  placeholder?: string | null;
  className?: string;
  required?: boolean;
  type?: string;
  onChange?: () => void;
  showValidation?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  styleName?: string;
  valueKey?: string;
  labelKey?: string;
};

type Props = {
  options: Options;
} & SelectProps;

export default function Select(props: Props): JSX.Element {
  const {
    type,
    label,
    required,
    valueKey,
    labelKey,
    placeholder = '',
    options,
    className = '',
    id,
    value,
    showValidation,
    ...attrs
  } = props;

  const isString = typeof label === 'string';
  const isEnabledShowValidation = showValidation && value;

  return (
    <div data-text-select-wrap styleName="text-select-wrap">
      <label styleName={`text-select-label ${!isString ? 'no-wrap' : ''}`} htmlFor={id}>
        {isString ? <div styleName="label-text-select">{label}</div> : null}
        <div styleName="text-select-section">
          <select
            type={type}
            className={className}
            styleName={`text-select ${isEnabledShowValidation ? 'show-validation' : ''}`}
            required={required}
            id={id}
            value={value}
            {...attrs}
          >
            {placeholder ? (
              <option value="">{`${placeholder}${required ? '*' : ''}`}</option>
            ) : null}
            {options.map(option => (
              // TODO add unique checking or add unique keys for each
              <option
                key={valueKey ? option[valueKey] : option.value}
                value={valueKey ? option[valueKey] : option.value}
                disabled={option.disabled}
              >
                {labelKey ? option[labelKey] : option.label}
              </option>
            ))}
          </select>
          {showValidation ? <ValidationBadge /> : null}
          <IconThinArrowBottom styleName="select-arrow" grayDark width="14px" height="14px" />
        </div>
        {!isString ? <span styleName="string-label">{label}</span> : null}
      </label>
    </div>
  );
}

Select.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  type: 'text',
  // eslint-disable-next-line react/default-props-match-prop-types
  label: undefined,
  // eslint-disable-next-line react/default-props-match-prop-types
  className: '',
  // eslint-disable-next-line react/default-props-match-prop-types
  required: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  placeholder: '',
};
