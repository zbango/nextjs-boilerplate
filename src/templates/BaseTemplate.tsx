import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  navigation: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {AppConfig.name}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.navigation}
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">{props.children}</main>

      <footer className="text-center mt-auto py-3 bg-light">
        {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')} `}
        <a
          href="https://zbango.systems"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          zbango.systems
        </a>
      </footer>
    </div>
  );
};

export { BaseTemplate };
