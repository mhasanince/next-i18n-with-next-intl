import { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Link, routing } from '@/i18n/routing';
import LocaleSwitcher from '@/components/locale-switcher';

import '../globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <header className="container flex gap-4 justify-between items-center">
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
              </ul>
            </nav>
            <LocaleSwitcher />
          </header>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
