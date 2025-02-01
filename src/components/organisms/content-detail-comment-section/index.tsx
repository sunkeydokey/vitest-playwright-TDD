import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';

export const ContentDetailCommentSection = () => {
  return (
    <section className={clsx(layoutStyles.mx, 'mt-8 mb-12')}>
      <textarea
        name="comment"
        id="comment"
        className="w-full bg-neutral-800 rounded px-4 py-2 resize-none outline-none"
      />
      <div className="flex justify-end mt-2">
        <button className="bg-green-300 text-black rounded px-4 py-2">
          댓글 작성
        </button>
      </div>
    </section>
  );
};
