import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ActiveNavLink({ children, href, ...props }) {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const isActive = href === '/' ? pathname === href : pathname.includes(href);

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        isActive,
      })}
    </Link>
  );
}

export default ActiveNavLink;
