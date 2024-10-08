import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('page.home');

  return (
    <section className="container">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
