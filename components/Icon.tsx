// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import * as Icons from '@/components/icons/index';

export type IconNames =
  | 'search'
  | 'bag'
  | 'user';


const baseClasses = 'w-6 h-6 flex-shrink-0';

export const Icon: React.FC<
  React.ComponentPropsWithoutRef<'svg'> & {
    name: IconNames;
  }
> = ({ name, className, ...rest }) => (
  <>
    {name === 'search' && (
      <Icons.Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'bag' && (
      <Icons.Bag {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'user' && (
      <Icons.User {...rest} className={twMerge(baseClasses, className)} />
    )}

  </>
);
