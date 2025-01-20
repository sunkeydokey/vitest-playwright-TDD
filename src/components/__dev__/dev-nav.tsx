import Link from 'next/link';

interface LinkItem {
  tag: string;
  href: string;
}

const links: Array<LinkItem> = [
  { tag: '컨텐츠 상세페이지', href: '/contents/cnaksdjcnaksjd' },
];

export const DevNav = () => {
  return (
    <div className="fixed right-10 bottom-10">
      {links.map((link) => (
        <div key={link.tag}>
          <Link href={link.href}>{link.tag}</Link>
        </div>
      ))}
    </div>
  );
};
