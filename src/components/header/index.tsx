import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiOutlineBell,
  HiOutlineUser,
  HiSearch,
  HiChevronDown,
} from 'react-icons/hi';

interface Props {
  className?: string;
}

export const Header = (props: Props) => {
  return (
    <div
      className={clsx(
        'flex justify-between py-3 h-14',
        layoutStyles.px,
        props.className
      )}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={16}
            height={16}
            src="/vercel.svg"
            alt="home"
            className="mr-4"
          />
        </Link>
        <Link href="/users/12312312312">
          <span>
            <span>{'sunkeydokey'}</span>
            <span>&nbsp; blog</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/notification">
          <HiOutlineBell className="text-2xl" />
        </Link>
        <Link href="/search">
          <HiSearch className="text-2xl" />
        </Link>
        <Link
          href="/content/post"
          className="border-green-400 border-2 rounded-l-full rounded-r-full text-green-400 text-sm px-2 py-1"
        >
          새 글 작성
        </Link>
        {false ? (
          <div className="flex items-center">
            <HiOutlineUser className="text-2xl" />
            <HiChevronDown />
          </div>
        ) : (
          <Link
            href="/users/sign-in"
            className="font-medium bg-neutral-800 px-4 py-2 rounded-l-full rounded-r-full"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};
