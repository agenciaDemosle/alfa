import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://piscinasalfa.cl'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Piscinas Alfa y Soluciones',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description: 'Empresa especializada en el revestimiento, construcción, mantenimiento y remodelación de piscinas de hormigón.',
  sameAs: [],
}

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}
