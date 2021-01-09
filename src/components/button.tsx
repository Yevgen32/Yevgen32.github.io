import * as React from 'react';
import Loading from './loading.block';

import './button.css';

type classNameParams = {
  primary?: boolean;
  success?: boolean;
  secondary?: boolean;
  orange?: boolean;
  bordered?: boolean;
  danger?: boolean;
  dashed?: boolean;
  white?: boolean;
  transparent?: boolean;
  isLoading?: boolean;
  borderedLight?: boolean;
};

export function getBtnClassName(params: classNameParams = {}) {
  let className = 'btn';
  if (params.primary) {
    className += ' btn-primary';
  }
  if (params.success) {
    className += ' btn-success';
  }
  if (params.secondary) {
    className += ' btn-secondary';
  }
  if (params.orange) {
    className += ' btn-orange';
  }
  if (params.bordered) {
    className += ' btn-bordered';
  }
  if (params.dashed) {
    className += ' btn-dashed';
  }
  if (params.white) {
    className += ' btn-white';
  }
  if (params.transparent) {
    className += ' btn-transparent';
  }
  if (params.danger) {
    className += ' btn-danger';
  }
  if (params.isLoading) {
    className += ' btn-loading';
  }
  if (params.borderedLight) {
    className += ' btn-light-bordered';
  }
  return className;
}

type Props = {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  loadingSpinerDark?: boolean;
  className?: string;
  primary?: boolean;
  success?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  orange?: boolean;
  bordered?: boolean;
  dashed?: boolean;
  white?: boolean;
  danger?: boolean;
  transparent?: boolean;
  styleName?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onMouseEnter?: (e?: React.SyntheticEvent) => void;
  onMouseLeave?: (e?: React.SyntheticEvent) => void;
  onTouchStart?: (e?: React.SyntheticEvent) => void;
  onTouchCancel?: (e?: React.SyntheticEvent) => void;
  onTouchMove?: (e?: React.SyntheticEvent) => void;
  onTouchEnd?: (e?: React.SyntheticEvent) => void;
  isProgress?: boolean;
  disable?:
    | {
        load: boolean;
      }
    | boolean;
  form?: string;
  setModal?: () => void;
  setDefaultOrderValues?: () => void;
  setOrderForm?: () => void;
  setRouteParams?: () => void;
  trackBasketStep?: () => void;
  title?: string;
  match?: Record<string, unknown>;
  productId?: number;
  size?: string;
};

const Button = React.forwardRef((props: Props, ref: null | HTMLButtonElement) => {
  const {
    children,
    className,
    isLoading = false,
    loadingSpinerDark = false,
    primary = false,
    success = false,
    secondary = false,
    orange = false,
    bordered = false,
    dashed = false,
    white = false,
    danger = false,
    transparent = false,
    ...attrs
  } = props;

  return (
    <button
      className={className}
      ref={ref}
      styleName={getBtnClassName({
        primary,
        success,
        secondary,
        orange,
        bordered,
        dashed,
        white,
        transparent,
        danger,
        isLoading,
      })}
      {...attrs}
    >
      {isLoading ? <Loading styleName="spinner" white={!loadingSpinerDark} /> : null}
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  loadingSpinerDark: false,
  primary: false,
  success: false,
  secondary: false,
  orange: false,
  bordered: false,
  dashed: false,
  white: false,
  transparent: false,
  className: '',
  disabled: false,
  danger: false,
};

export default Button;
