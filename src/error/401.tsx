import React from 'react';
import { Trans } from '@lingui/macro';
import ErrorPage from '../errors/error.container';

function PageNoAccess() {
  return (
    <ErrorPage>
      <Trans>В доступе отказано</Trans>
    </ErrorPage>
  );
}

export default PageNoAccess;
