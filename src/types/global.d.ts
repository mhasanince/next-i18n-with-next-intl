import { Locale } from '@/i18n/routing';

type Messages = typeof import('../../messages/en.json');

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}

  type LayoutProps<TParams = { [key: string]: string | undefined }> = {
    children: React.ReactNode;
    params: TParams & { locale: Locale };
  };

  type PageProps<
    TParams = { [key: string]: string | undefined },
    TSearchParams = { [key: string]: string | string[] | undefined }
  > = {
    params: TParams & { locale: Locale };
    searchParams: TSearchParams;
  };

  type GenerateMetadata<TParams = { [key: string]: string | undefined }> = {
    params: TParams & { locale: Locale };
  };
}
