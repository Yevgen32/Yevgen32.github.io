import * as React from 'react';

import { Trans } from '@lingui/macro';
import Heading from '../typography/h.block';
import Link from '../link/link';
import Img404 from './assets/404.png';
import Picture from '../img/picture';

import './not-found-content.block.css';

type Props = {
  children: React.ReactNode;
};

function NotFoundContent(props: Props) {
  return (
    <div styleName="page-not-fund">
      {props.children}
      <Heading level={3} center>
        <Trans>Приглашаем Вас на основные разделы сайта</Trans>:
      </Heading>
      <Link styleName="bordered-btn" to="/">
        <Trans>Перейти на главную</Trans>
      </Link>
      <div styleName="page-not-fund-info">
        <p>
          <Trans>Если у Вас возникли какие-то вопросы – свяжитесь с нами по тел</Trans>.{' '}
          <a href="tel:+380800505124">0-800-505-124</a> (<Trans>бесплатно</Trans>){' '}
          <Trans>или же напишите на</Trans> e-mail &nbsp;
          <a href="mailto:support@megasport.ua?Subject=404">support@megasport.ua</a>
        </p>
      </div>
      <figure styleName="figure">
        <Picture notGetImage src={Img404} />
      </figure>
    </div>
  );
}

export default NotFoundContent;
