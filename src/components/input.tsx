import * as React from 'react';
import './input.css';

// components
import ValidationBadge from './validation-badge';

type Props = {
  id: string;
  name: string;
  value?: string;
  onChange?: () => void;
  className?: string;
  label?: string;
  width?: string | null;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  showValidation?: boolean;
  styleName?: string;
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  type?: string;
  datalist?: string[] | null;
  maxLength?: number;
  pattern?: string;
  max?: string;
  min?: string;
  title?: string;
  autocomplete?: string;
  onKeyDown?: () => void;
  onClick?: () => void;
};

type State = {
  isSafari: boolean;
  isInteracted: boolean;
};

export default class Input extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text',
    label: undefined,
    required: false,
    disabled: false,
    showValidation: false,
    placeholder: '',
    value: '',
    onChange: null,
    className: '',
    styleName: '',
    width: null,
    datalist: null,
  };

  static filterDatalist(list: string[], value: string): string[] {
    const lValue = value.toLowerCase();
    const occurrences = list.map(item => ({
      value: item,
      index: item.toLowerCase().indexOf(lValue),
    }));
    return occurrences
      .filter(item => item.index !== -1)
      .slice(0, 10)
      .sort((a, b) => (a.index > b.index ? 1 : a.index === b.index ? 0 : -1))
      .map(item => item.value);
  }

  constructor(props: Props) {
    super(props);
    let isSafari = false;
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    this.state = {
      isSafari,
      isInteracted: Boolean(this.props.value),
    };
  }

  input: React.Ref<unknown>;

  safariDatalist: React.Ref<unknown>;

  render() {
    const {
      type,
      inputMode,
      label,
      required,
      disabled,
      placeholder = '',
      width,
      datalist,
      id,
      name,
      showValidation,
      className = '',
      value = '',
      styleName,
      ...attrs
    } = this.props;

    const filteredDatalist = datalist ? this.constructor.filterDatalist(datalist, value) : [];
    const additionalAttrs: $Shape<{
      list: string;
      onKeyDown: () => void;
    }> = {};
    if (this.state.isSafari && datalist) {
      additionalAttrs.onKeyDown = e => {
        if (this.state.isSafari) {
          if (e.keyCode === 13 && filteredDatalist.length > 0) {
            this.input.value = this.safariDatalist.value;
            if (typeof attrs.onChange === 'function') {
              attrs.onChange({ target: this.input });
            }
            e.preventDefault();
          }

          if (e.keyCode === 40) {
            if (value && this.safariDatalist) {
              e.preventDefault();
              this.safariDatalist.focus();
            }
          }
        }
      };
    }

    if (datalist) {
      additionalAttrs.list = `${name}-datalist`;
    }

    /*
      даем возможность показать иконки валидации если в компонент пришел пропс showValidation и
      пользователь взаимодействовал и инпутом и есть введенные данны
    */
    const isEnabledShowValidation = showValidation && this.state.isInteracted && value;

    return (
      <label
        htmlFor={id}
        className={className}
        styleName="text-input-label"
        style={width ? { width } : {}}
      >
        {label ? (
          <span styleName="text-lebel">
            {label}
            {typeof label === 'string' && required ? '*' : ''}
          </span>
        ) : (
          ''
        )}
        <input
          type={type}
          {...(inputMode && { inputMode })}
          styleName={`text-input ${isEnabledShowValidation ? 'show-validation' : ''}`}
          required={required}
          disabled={disabled}
          ref={el => {
            this.input = el;
          }}
          name={name}
          placeholder={`${placeholder}${placeholder && required ? '*' : ''}`}
          onBlur={() => this.setState({ isInteracted: true })}
          id={id}
          value={value}
          {...additionalAttrs}
          {...attrs}
        />
        {datalist ? (
          this.state.isSafari ? (
            value && filteredDatalist.length > 0 ? (
              <select
                multiple
                styleName="select-multiple"
                size={filteredDatalist.length}
                ref={c => {
                  this.safariDatalist = c;
                }}
                onMouseUp={() => {
                  this.input.value = this.safariDatalist.value;
                  if (typeof attrs.onChange === 'function') {
                    attrs.onChange({ target: this.input });
                  }
                }}
                onKeyDown={e => {
                  if (e.keyCode !== 40 && e.keyCode !== 38) {
                    if (e.keyCode === 13) {
                      this.input.value = this.safariDatalist.value;
                      if (typeof attrs.onChange === 'function') {
                        attrs.onChange({ target: this.input });
                      }
                    } else {
                      this.input.focus();
                    }
                  }
                }}
              >
                {filteredDatalist.map(elm => (
                  <option key={elm} value={elm}>
                    {elm}
                  </option>
                ))}
              </select>
            ) : null
          ) : (
            <datalist id={`${name}-datalist`}>
              {filteredDatalist.map(elm => (
                <option key={elm} value={elm} />
              ))}
            </datalist>
          )
        ) : null}
        {showValidation ? <ValidationBadge /> : null}
      </label>
    );
  }
}
