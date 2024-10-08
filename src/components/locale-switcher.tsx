'use client';

import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: Locale) {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale });
    });
  }

  return (
    <ul className="flex gap-4">
      {routing.locales.map((locale) => (
        <li key={locale}>
          <button
            onClick={() => onSelectChange(locale)}
            disabled={isPending}
            className={locale !== currentLocale ? 'opacity-50' : ''}
          >
            {locale}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;
