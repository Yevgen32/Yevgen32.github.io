import * as React from 'react';
import { Route } from 'react-router-dom';
import { Trans } from '@lingui/macro';

import Heading from '../typography/h.block';
import NotFoundContent from './not-found-content.block';

type StatusType = {
  code: number;
  children?: React.ReactNode;
};

type Props = {
  noAccess?: boolean;
};

const Status = ({ code, children = null }: StatusType) => (
  <Route
    render={({ staticContext }) => {
      /* eslint-disable no-param-reassign */
      /* $FlowFixMe */
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const PageNotFound = (props: Props) => {
  const { noAccess = false } = props;

  return (
    <Status code={404}>
      <NotFoundContent>
        <Heading level={1} center>
          {noAccess ? (
            <Trans>У Вас нет прав для просмотра этой страницы</Trans>
          ) : (
            <Trans>Вы попали на несуществующую страницу</Trans>
          )}
        </Heading>
      </NotFoundContent>
    </Status>
  );
};

export default PageNotFound;
