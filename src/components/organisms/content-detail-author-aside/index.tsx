import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export const ContentDetailAuthorAside = () => {
  return (
    <aside className={clsx('mt-8', layoutStyles.px)}>
      <Image width={64} height={64} alt="contents" src="/globe.svg" />
      <Link href={`/users/id`}>id</Link>
    </aside>
  );
};
