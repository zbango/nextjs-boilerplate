import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');

  return (
    <BaseTemplate
      navigation={(
        <>
          <li className="nav-item">
            <Link
              href="/dashboard/"
              className="nav-link"
            >
              {t('dashboard_link')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/dashboard/user-profile/"
              className="nav-link"
            >
              {t('user_profile_link')}
            </Link>
          </li>
          <li className="nav-item">
            <LogOutButton />
          </li>
        </>
      )}

    >
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
