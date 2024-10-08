import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('page.home');

  return (
    <section className="container">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
