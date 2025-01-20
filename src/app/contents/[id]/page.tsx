import { ContentDetailAuthorAside } from '@/components/organisms/content-detail-author-aside';
import { ContentDetailCommentSection } from '@/components/organisms/content-detail-comment-section';
import { ContentDetailMain } from '@/components/organisms/content-detail-main';
import { Footer } from '@/components/organisms/footer';

export default function ContentsDetail() {
  return (
    <>
      <ContentDetailMain />
      <ContentDetailAuthorAside />
      <ContentDetailCommentSection />
      <Footer />
    </>
  );
}
