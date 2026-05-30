import AnswerBlock from '../components/AnswerBlock'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProcessStep from '../components/ProcessStep'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { faqJsonLd, servicesFaqs } from '../content/faqs'
import { brand, packages } from '../content/site'

const searchChannels = [
  ['Google Search', 'Increase brand discovery when customers search'],
  ['AI Overview', 'Become clearer in AI-powered answers'],
  ['AI Search', 'Build visibility across ChatGPT, Gemini and Perplexity'],
  ['Google Maps', 'Grow local brand visibility for nearby customers'],
]

const serviceCards = [
  {
    title: 'Increase visibility on Google',
    description:
      'Help customers discover your brand more easily when they search for services, products or solutions like yours.',
  },
  {
    title: 'Increase visibility in AI Search',
    description:
      'Improve how AI Overview, ChatGPT, Gemini, Perplexity and other AI Search platforms understand your business.',
  },
  {
    title: 'Make your brand easier to understand',
    description:
      'Clarify your positioning, service expertise and proof signals so search engines and AI systems can evaluate your brand with more confidence.',
  },
  {
    title: 'Grow local brand visibility',
    description:
      'Increase visibility on Google Maps and local search so nearby customers can call, request directions and visit more easily.',
  },
  {
    title: 'Support agency teams',
    description:
      'Provide white-label SEO, GEO and AI Search support for agencies, marketing teams and international organizations.',
  },
  {
    title: 'Clarify what to prioritize first',
    description:
      'Start with a Brand Visibility Audit to understand what is limiting visibility before investing in long-term growth.',
  },
]

const resultHighlights = [
  'More brand discovery',
  'More AI Search visibility',
  'More qualified customer reach',
  'Stronger brand authority',
]

const process = [
  ['01', 'Understand', 'Review your current visibility across Google, AI Search and local search.'],
  ['02', 'Prioritize', 'Identify the growth opportunities that matter most to the business.'],
  ['03', 'Improve', 'Strengthen the content, authority and brand signals that support visibility.'],
  ['04', 'Review', 'Monitor performance and explain what changed in business language.'],
  ['05', 'Grow', 'Adjust the strategy as the market, competitors and AI Search behavior change.'],
]

export default function Services() {
  return (
    <main>
      <SEO
        title="Brand Visibility Services for Google and AI Search | Saralak Search"
        description="Increase brand visibility across Google Search, AI Overview, ChatGPT, Gemini, Perplexity, Google Maps and other AI Search platforms."
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ItemList',
              name: 'Saralak Search Services',
              itemListElement: serviceCards.map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: service.title,
                description: service.description,
              })),
            },
            faqJsonLd(servicesFaqs),
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Services</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Increase Brand Visibility across Google and AI Search
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            Saralak Search helps businesses become easier to discover, understand and trust
            across Google Search, AI Overview, ChatGPT, Gemini, Perplexity and local search.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/discovery-audit">{brand.primaryCta}</CTAButton>
            <CTAButton to="/case-studies" variant="secondary">
              ดูตัวอย่างผลงาน
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {searchChannels.map(([label, text]) => (
              <article key={label} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
                  {label}
                </p>
                <p className="thai-readable mt-2 break-words font-semibold leading-7 text-neutral-950">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnswerBlock title="เหมาะกับใคร">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Businesses that want more visibility on Google and AI Search',
            'Brands that need more qualified discovery from potential customers',
            'Teams that want Google and AI platforms to understand their business more clearly',
            'Agencies that need senior SEO, GEO and AI Search support',
            'Local businesses that need more nearby customers from Google Maps',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 font-semibold text-teal-700">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </AnswerBlock>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="บริการ"
            title="คุณต้องการผลลัพธ์แบบไหน?"
            description="Start from the business outcome, not a technical SEO checklist."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ผลลัพธ์" title="Business outcomes we help improve" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultHighlights.map((item) => (
            <article key={item} className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xl font-semibold leading-tight text-neutral-950">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/case-studies" variant="secondary">
            ดู Case Studies ทั้งหมด
          </CTAButton>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="แพ็กเกจ" title="Brand Visibility services" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>
          <p className="thai-readable mt-6 max-w-3xl text-sm leading-7 text-neutral-600">
            Pricing is an initial guide. Each business has different goals, competition and
            growth potential. We can scope the right level of support after reviewing your current
            visibility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="ขั้นตอน" title="ขั้นตอนการทำงาน" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {process.map(([step, title, description]) => (
            <ProcessStep key={title} step={step} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <article className="rounded-lg border border-teal-100 bg-[#fbfaf6] p-6 shadow-sm shadow-neutral-950/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
              Agency Partner
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950">
              Agency Partner Support
            </h2>
            <p className="thai-readable mt-4 max-w-3xl leading-7 text-neutral-700">
              White-label SEO, GEO and AI Search support for agencies, marketing teams and
              international organizations that need Thailand market expertise and senior strategic
              consultation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">คุยเรื่อง Agency Support</CTAButton>
              <a
                href={brand.phoneUrl}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-200 bg-white px-5 py-2.5 text-center text-sm font-semibold leading-6 text-teal-950 shadow-sm shadow-teal-950/5 transition hover:bg-teal-50"
              >
                โทรปรึกษา
              </a>
            </div>
          </article>
        </div>
      </section>

      <FAQSection faqs={servicesFaqs} />

      <section className="bg-teal-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Not sure what is limiting your brand visibility?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-50">
          Start with a Brand Visibility Audit to understand what Google and AI Search understand
          about your business, competitors and growth opportunities.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton to="/contact" variant="secondary">
            ปรึกษา Saralak
          </CTAButton>
          <a
            href={brand.phoneUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
          >
            โทรปรึกษา
          </a>
        </div>
      </section>
    </main>
  )
}
