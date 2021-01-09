import * as React from 'react';

// icons
import { IconCheck, IconClosed } from '../icon/glyphs';

import './validation-badge.css';

export default function ValidationBadge(): JSX.Element {
  return (
    <React.Fragment>
      <div styleName="validation-element" data-valid-badge>
        <IconCheck white width="10px" height="10px" />
      </div>
      <div styleName="validation-element" data-invalid-badge>
        <IconClosed white width="10px" height="10px" />
      </div>{' '}
    </React.Fragment>
  );
}
