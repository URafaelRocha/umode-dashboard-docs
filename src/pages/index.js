import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Head from '@docusaurus/Head';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/docs');
  }, [history]);

  return (
    <Head>
      <meta property="og:image" content="image.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://umode-dashboard-docs.vercel.app/docs',
          '@type': 'uMode Dashboard Docs',
          url: 'https://umode-dashboard-docs.vercel.app/',
          name: 'uMode Dashboard Docs',
          description: 'uMode Dashboard Docs',
        })}
      </script>
    </Head>
  );
}
