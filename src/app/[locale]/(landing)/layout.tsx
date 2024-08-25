import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      navigation={(
        <>
          <li className="nav-item">
            <Link
              href="/"
              className="nav-link"
            >
              {t('home_link')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about/"
              className="nav-link"
            >
              {t('about_link')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/sign-in/"
              className="nav-link"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/sign-up/"
              className="nav-link"
            >
              {t('sign_up_link')}
            </Link>
          </li>

        </>
      )}
    >
      <div>{props.children}</div>
    </BaseTemplate>
  );
}
