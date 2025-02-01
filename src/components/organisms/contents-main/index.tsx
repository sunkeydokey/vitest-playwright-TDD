import { ContentItem } from '@/components/molecules/content-item';
import clsx from 'clsx';
import { list } from 'radashi';
import { HiSearch } from 'react-icons/hi';

export const ContentsMain = () => {
  return (
    <div>
      <div className="flex items-center">
        <select
          name="sort"
          id="sort"
          className="bg-neutral-800 px-2 py-1 rounded"
        >
          <option value="created-at-desc">최신순</option>
          <option value="title-asc">제목순</option>
        </select>

        <div className="flex items-center border-b-2 grow ml-4 max-w-96">
          <input
            type="text"
            className="bg-transparent outline-none grow px-4 py-1"
          />
          <button>
            <HiSearch className="text-xl" />
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {list(0, 11).map((item) => (
          <ContentItem key={item} className="mt-8" />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        {list(0, 11).map((pageIndex) => (
          <button
            className={clsx('p-2 rounded', pageIndex === 0 && 'bg-neutral-800')}
            key={pageIndex}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
