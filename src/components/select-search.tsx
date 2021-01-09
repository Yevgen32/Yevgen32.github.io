import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { t } from '@lingui/macro';
import { withI18n } from '@lingui/react';
import type { I18n } from '@lingui/core';

import ReactSelect from 'react-select';
// $FlowFixMe
import 'react-select/dist/react-select.css';

import { languageSelector } from '../route/route.selectors';
import './select-search.css';
import type { Option, Options } from '../form/select';
import type { Language } from '../../@types/types';

// components
import ValidationBadge from './validation-badge';

type OwnProps = {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly label?: React.ReactNode;
  readonly width?: string;
  readonly placeholder?: string;
  readonly onInputChange?: () => void;
  readonly isLoading?: boolean;
  readonly onChange?: () => void;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly clearable?: boolean;
  readonly styleName?: string;
  readonly className?: string;
  readonly options: Options;
  readonly filterOptions?: (
    options: Options,
    filter?: string,
    currentValues?: Array<string>,
  ) => Options;
  readonly inputProps: {
    autoComplete: string;
  };
  readonly showValidation?: boolean;
  readonly getSelectRef?: () => void;
};

type Props = {
  i18n: I18n;
  readonly language: Language;
} & OwnProps;

type State = {
  isInteracted: boolean;
};

class SelectSearch extends React.PureComponent<Props, State> {
  // static defaultProps = {
  //   label: undefined,
  //   required: false,
  //   disabled: false,
  //   placeholder: '',
  //   className: '',
  //   showValidation: false,
  // };

  state = {
    isInteracted: Boolean(this.props.value),
  };

  onChange = (option: Option) => {
    if (this.props.onChange) {
      this.props.onChange({
        [this.props.name]: option ? option.value : '',
      });
    }
  };

  render() {
    const {
      i18n,
      label,
      required = false,
      disabled = false,
      placeholder = '',
      clearable,
      width,
      id,
      name,
      isLoading,
      onInputChange,
      value,
      onChange,
      className = '',
      showValidation = false,
      getSelectRef,
      ...attrs
    } = this.props;

    /*
      даем возможность показать иконки валидации если в компонент пришел пропс showValidation и
      пользователь взаимодействовал и селектом
    */

    const isEnabledShowValidation = showValidation && this.state.isInteracted;

    return (
      <label
        htmlFor={id}
        styleName={`text-input-label ${isEnabledShowValidation ? 'show-validation' : ''} ${
          value ? 'label-valid' : 'label-invalid'
        }`}
        style={{ width }}
        className={className}
      >
        {label ? (
          <span styleName="text-lebel">
            {label}
            {typeof label === 'string' && required ? '*' : ''}
          </span>
        ) : null}
        {/* $FlowFixMe */}
        <ReactSelect
          isLoading={isLoading}
          onInputChange={onInputChange}
          clearable={clearable}
          clearValueText={t`Очистить поле`}
          id={id}
          noResultsText={t`Варианты не найдены`}
          onChange={this.onChange}
          onBlur={() => this.setState({ isInteracted: true })}
          required={required}
          searchPromptText={t`Начните ввод для поиска`}
          disabled={disabled}
          name={name}
          placeholder={`${placeholder}${placeholder && required ? '*' : ''}`}
          value={value}
          ref={getSelectRef}
          {...attrs}
        />
        {showValidation ? <ValidationBadge /> : null}
      </label>
    );
  }
}

const mapStateToProps = state => ({
  language: languageSelector(state),
});

export default compose(
  withI18n(),
  connect<Props, OwnProps, _, _, _, _>(mapStateToProps, {}),
)(SelectSearch);
