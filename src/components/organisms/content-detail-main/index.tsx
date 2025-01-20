import { localizeDate } from '@/libs/date';
import { middleDot } from '@/utils/string';
import Link from 'next/link';

export const ContentDetailMain = () => {
  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold leading-normal">{'title'}</h1>
        <div>
          <span>sunkeydokey</span>
          <span> {middleDot} </span>
          <span>{localizeDate(new Date())}</span>
        </div>
        {true && (
          <div className="flex justify-end">
            <Link href={`/contents/${'id'}/edit`}>수정</Link>
            <button>삭제</button>
          </div>
        )}
      </header>
    </main>
  );
};
