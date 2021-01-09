import React, { useContext } from 'react';
import { t } from '@lingui/macro';

// context
import { localesContext } from '../locales/locales.provider';

// components
import Select from '../form/select';

// types
import { SelectProps } from './select';

function SelectMonth(props: SelectProps) {
  const { placeholder, ...attrs } = props;
  const { i18n } = useContext(localesContext);

  return (
    <Select
      options={[
        {
          label: placeholder || t`Выберите месяц`,
          value: '',
        },
        {
          label: t`Январь`,
          value: '01',
        },
        {
          label: t`Февраль`,
          value: '02',
        },
        {
          label: t`Март`,
          value: '03',
        },
        {
          label: t`Апрель`,
          value: '04',
        },
        {
          label: t`Май`,
          value: '05',
        },
        {
          label: t`Июнь`,
          value: '06',
        },
        {
          label: t`Июль`,
          value: '07',
        },
        {
          label: t`Август`,
          value: '08',
        },
        {
          label: t`Сентябрь`,
          value: '09',
        },
        {
          label: t`Октябрь`,
          value: '10',
        },
        {
          label: t`Ноябрь`,
          value: '11',
        },
        {
          label: t`Декабрь`,
          value: '12',
        },
      ]}
      {...attrs}
    />
  );
}

export default SelectMonth;
