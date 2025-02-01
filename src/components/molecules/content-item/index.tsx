import { localizeDate } from '@/libs/date';
import Image from 'next/image';
import Link from 'next/link';

export const ContentItem = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link href={`/contents/${'id'}`} className="flex justify-center">
        <Image width={600} height={600} src="/file.svg" alt="title" />
      </Link>
      <h2 className="text-2xl font-bold mt-4">title</h2>
      <div className="text-neutral-300">body</div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={`/contents/${'id'}`}>
            <Image
              width={32}
              height={32}
              src="/globe.svg"
              alt="nickname"
              className="mr-2"
            />
          </Link>
          <span>nickname</span>
        </div>
        <div>{localizeDate(new Date())}</div>
      </div>
    </div>
  );
};
