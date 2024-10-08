import { useTranslations } from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('page.about-us');

  return (
    <section className="container">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
