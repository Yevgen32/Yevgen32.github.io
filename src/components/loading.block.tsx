import * as React from 'react';
import './loading.block.css';

// icons
// import { IconLoading } from '../icon/glyphs';

type Props = {
  size?: string;
  className?: string;
  white?: boolean;
  grayDark?: boolean;
};

function Loading(props: Props) {
  const { size, className, white, grayDark } = props;

  return (
    <span styleName="spinner" className={className}>
      ..Loading
      {/* <IconLoading
        styleName="loading"
        width={size}
        height={size}
        white={white}
        grayDark={grayDark}
      /> */}
    </span>
  );
}

Loading.defaultProps = {
  size: '24px',
  className: '',
  white: false,
  grayDark: false,
};

export default Loading;
