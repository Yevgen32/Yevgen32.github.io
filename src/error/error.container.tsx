import React from 'react';

// import { Trans } from '@lingui/macro';
// import Link from '../link/link';
// import Heading from '../typography/h.block';
import './errors.css';

type ErrorPageProps = {
  children: React.ReactNode;
};

export default function ErrorContainer(props: ErrorPageProps) {
  return (
    <main styleName="error-page">
      <section styleName="error-section-wrap">
        <article styleName="error-section">
          <header styleName="error-section-header">
            <Heading level={1} center>
              Ой!
            </Heading>
            <p styleName="error-text">{props.children}</p>
          </header>
          {/* <Link btn success to="/">
            <Trans>Вернуться на главную</Trans>
          </Link> */}
        </article>
      </section>
    </main>
  );
}
