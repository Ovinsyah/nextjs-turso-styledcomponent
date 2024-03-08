import HomePage from '@/app/home';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch("http://localhost:3000/api/meta", { cache: 'no-store' }).then((res) => res.json());
  return {
    title: String(data.meta.metaTitle),
    description: String(data.meta.metaDescription),
  };
}

const Page = async () => {
  const data = await fetch("http://localhost:3000/api/landing-page", { cache: 'no-store' }).then((res) => res.json());;
  return <HomePage />;
};


export default Page;