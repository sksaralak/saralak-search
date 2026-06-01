import SEO from '../components/SEO'
import { brand } from '../content/site'

export default function Privacy() {
  return (
    <main>
      <SEO
        title="Privacy Policy | Saralak Search"
        description="Privacy Policy for Saralak Search, including contact form data, analytics, Google Sheets storage and rights under Thailand's PDPA."
        path="/privacy"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'PrivacyPolicy',
          name: 'Privacy Policy',
          url: 'https://saralak-search.com/privacy',
          publisher: {
            '@type': 'Organization',
            name: 'Saralak Search',
            url: 'https://saralak-search.com',
          },
        }}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Privacy Policy</p>
        <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Saralak Search respects your privacy. This policy explains what information is collected
          through this website and how it is used by a small SEO, GEO, AEO and AI Search consultancy
          based in Thailand.
        </p>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-16 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">Information collected</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              When you submit the contact form, Saralak Search may collect your name, email,
              company, website, interest, budget, message, page URL and timestamp.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">How information is used</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              This information is used to reply to inquiries, evaluate whether Saralak Search is a
              good fit for your request, improve website content, and improve marketing activity.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">Analytics and website tools</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              This website uses Google Analytics to understand website usage and marketing
              performance. Microsoft Clarity is also used to understand page interaction and improve
              the user experience. These tools may collect usage data such as page views, device
              information, approximate location and interaction patterns.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">Contact form storage</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Contact form submissions are sent to Google Sheets through Google Apps Script. Access
              is limited to the account used by Saralak Search for managing inquiries.
            </p>
          </article>

          <article id="cookies">
            <h2 className="text-2xl font-semibold text-neutral-950">Cookie policy</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              This website uses cookies and similar tracking technologies. Cookies are small text
              files stored on your device that help us understand how visitors use the site.
            </p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-neutral-200">
              <table className="min-w-[560px] divide-y divide-neutral-200 bg-white text-left text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    {['Cookie / Tool', 'Purpose', 'Type', 'Retention'].map((h) => (
                      <th key={h} scope="col" className="px-4 py-3 font-semibold text-neutral-950">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {[
                    ['Google Analytics (GA4)', 'Page views, traffic source, user behaviour', 'Analytics', 'Up to 14 months'],
                    ['Microsoft Clarity', 'Session recordings, heatmaps, page interaction', 'Analytics', 'Up to 12 months'],
                    ['saralak_cookie_consent', 'Stores your cookie preference (accept/decline)', 'Functional', 'Until browser data is cleared'],
                  ].map(([name, purpose, type, retention]) => (
                    <tr key={name}>
                      <td className="px-4 py-3 font-medium text-neutral-950">{name}</td>
                      <td className="px-4 py-3">{purpose}</td>
                      <td className="px-4 py-3">{type}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-7 text-neutral-700">
              Google Analytics and Microsoft Clarity are only loaded after you accept cookies via the
              banner shown on your first visit. You may change your preference at any time by clearing
              your browser's local storage for this site, which will re-display the consent banner.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">Your rights under Thai PDPA</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Under Thailand's Personal Data Protection Act (PDPA), you may request access to your
              personal data, correction of inaccurate data, deletion where applicable, restriction
              or objection to processing, and withdrawal of consent where processing is based on
              consent.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-neutral-950">Contact</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              For privacy questions or PDPA requests, contact Saralak Search at{' '}
              <a href={`mailto:${brand.email}`} className="font-semibold text-teal-900 hover:text-teal-700">
                {brand.email}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
