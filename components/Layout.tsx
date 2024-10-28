import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Layout: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => (
  <div {...rest} className={twMerge('container mx-auto px-6', className)}>
    {children}
  </div>
);

export const LayoutRow: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => (
  <div {...rest} className={twMerge('-mx-6 flex flex-wrap', className)}>
    {children}
  </div>
);

type LayoutColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  span?: number;
  offset?: number;
  smSpan?: number;
  mdSpan?: number;
  lgSpan?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
};

const spanClasses = (span: number, prefix: string = '') => {
  return prefix ? `${prefix}:w-column-${span}` : `w-column-${span}`;
};

const offsetClasses = (offset: number, prefix: string = '') => {
  return prefix ? `${prefix}:offset-${offset}` : `offset-${offset}`;
};

export const LayoutColumn: React.FC<LayoutColumnProps> = ({
  span = 12,
  offset = 0,
  smSpan,
  mdSpan,
  lgSpan,
  smOffset,
  mdOffset,
  lgOffset,
  children,
  className,
  ...rest
}) => {
  const baseClasses = `${spanClasses(span)} ${offsetClasses(offset)}`;
  const smClasses = smSpan
    ? `${spanClasses(smSpan, 'sm')} ${smOffset ? offsetClasses(smOffset, 'sm') : ''}`
    : '';
  const mdClasses = mdSpan
    ? `${spanClasses(mdSpan, 'md')} ${mdOffset ? offsetClasses(mdOffset, 'md') : ''}`
    : '';
  const lgClasses = lgSpan
    ? `${spanClasses(lgSpan, 'lg')} ${lgOffset ? offsetClasses(lgOffset, 'lg') : ''}`
    : '';
  return (
    <div
      {...rest}
      className={twMerge(
        `relative px-6 ${baseClasses} ${smClasses} ${mdClasses} ${lgClasses} ${className}`
      )}
    >
      {children}
    </div>
  );
};
