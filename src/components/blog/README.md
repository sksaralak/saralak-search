# Saralak Search Blog UI System

Saralak Search blog pages use a central UI and CSS system. Shared React components live in `src/components/blog/BlogUI.tsx`; the corresponding rules live under the `blog-*` selectors in `src/styles.css`.

## Authoring rules

1. Wrap article content with `BlogProse`. It controls default typography, spacing, links, lists, tables, blockquotes, figures, images and captions.
2. Prefer semantic article markup: `h2`, `h3`, `p`, `ul`, `ol`, `table`, `figure` and `blockquote`.
3. Do not repeat long, one-off Tailwind `className` combinations inside article bodies. Use semantic HTML, `BlogProse`, and the shared blocks below first.
4. New articles must follow this system before introducing custom CSS. If a visual pattern appears in more than one article, add a shared component or central `blog-*` rule instead of copying classes.
5. Use native `ul`/`li` for bullets. Use native `ol`/`li` or `StepList` for ordered workflows. Never type `1.`, `2.` or similar numbers manually inside an `ol` item.
6. Do not place Markdown pipe tables in JSX or article source where they can render as raw text. Use `ResponsiveTable`, or a semantic `table` inside an intentional horizontal-scroll container.

## Shared components

Import shared blocks from `./BlogUI` (adjust the relative path for the calling file):

- Article structure: `ArticleHeader`, `Breadcrumb`, `ArticleMeta`, `BlogProse`, `FigureImage`.
- Summary and navigation: `SummaryBox`, `TableOfContents` for jump links.
- Decisions and callouts: `DecisionBox`, `RuleBox`, `NoteBox`, `WarningBox`.
- Sources: `SourceBox`, `ReferenceBox`, `SourceList`, `ReferenceBlock`.
- Conversion and proof: `CTABox`, `CaseStudyBox`.
- Structured data display: `ResponsiveTable`, `StepList`, `DoDontBox`.
- Metrics and explanatory layouts: `StatPanel`, `MetricGrid`, `InfoGrid`, `InsightGrid`, `InsightPair`, `ComparisonCards`.
- FAQ and internal navigation: `FAQSection`, `RelatedLinks`, `InternalLinkBlock`.
- Listing UI: `CategoryBadge`, `ArticleMeta`, and the shared `BlogCard` component.

Use component props for article-specific wording, links and labels. A shared component must not silently replace an article's existing CTA, source, summary or navigation copy.

## SEO and accessibility requirements

- Keep exactly one `h1`, normally supplied by `ArticleHeader`.
- Maintain a logical `h2`/`h3` hierarchy; do not select heading levels for visual size alone.
- Preserve internal links, canonical URLs, title/meta description, Article and FAQ schema, published/modified dates and route paths.
- Preserve meaningful image alt text and use `FigureImage`/`figure` with `figcaption` when a caption is needed.
- Give tables clear header cells and keep them readable through intentional container scrolling on small screens.
- Do not remove structured data or change article meaning as part of a visual refactor.

Before merging a new or migrated article, verify it on desktop and mobile and confirm that it has no viewport overflow, raw Markdown tables, duplicated list numbers or broken images.
