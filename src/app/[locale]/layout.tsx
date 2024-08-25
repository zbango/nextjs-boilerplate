import '@/styles/globals.scss';

import { enUS, esES } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import BootstrapLoader from '@/components/BootstrapLoader';
import Context from '@/contexts/Context';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  const messages = useMessages();

  let clerkLocale = esES;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'en') {
    clerkLocale = enUS;
  }

  if (props.params.locale !== AppConfig.defaultLocale) {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }

  return (
    <html lang={props.params.locale}>
      <body>
        <Context>
          <BootstrapLoader />
          <NextIntlClientProvider
            locale={props.params.locale}
            messages={messages}
          >
            <ClerkProvider
              localization={clerkLocale}
              signInUrl={signInUrl}
              signUpUrl={signUpUrl}
              signInFallbackRedirectUrl={dashboardUrl}
              signUpFallbackRedirectUrl={dashboardUrl}
            >
              {props.children}
            </ClerkProvider>

          </NextIntlClientProvider>
        </Context>
      </body>
    </html>
  );
}
