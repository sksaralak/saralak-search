import { brand } from '../content/site'

export default function FloatingLineButton() {
  return (
    <a
      href={brand.lineUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg shadow-neutral-950/25 transition hover:-translate-y-0.5 hover:bg-[#05b84f] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755] sm:bottom-6 sm:right-6"
      aria-label="Chat on LINE"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-8 w-8"
        role="img"
      >
        <path
          fill="currentColor"
          d="M24 7C14.1 7 6 13.3 6 21.1c0 7 6.2 12.8 14.5 13.9.6.1 1.3.4 1.5.9.2.5.1 1.1.1 1.6l-.2 2c-.1.6-.3 2.3 1.9 1.3 2.2-.9 11.7-6.9 16-11.9 3-3.3 4.2-6.6 4.2-9.8C42 13.3 33.9 7 24 7Zm-6.7 18.7h-4.4c-.6 0-1-.4-1-1v-7.5c0-.6.4-1 1-1s1 .4 1 1v6.5h3.4c.6 0 1 .4 1 1s-.4 1-1 1Zm4.2-1c0 .6-.4 1-1 1s-1-.4-1-1v-7.5c0-.6.4-1 1-1s1 .4 1 1v7.5Zm8.2 0c0 .4-.3.8-.7.9-.1.1-.2.1-.3.1-.3 0-.6-.1-.8-.4l-3.9-5v4.4c0 .6-.4 1-1 1s-1-.4-1-1v-7.5c0-.4.3-.8.7-.9.4-.2.8 0 1.1.3l3.9 5v-4.4c0-.6.4-1 1-1s1 .4 1 1v7.5Zm6.3-4.7c.6 0 1 .4 1 1s-.4 1-1 1h-3v1.7h3.4c.6 0 1 .4 1 1s-.4 1-1 1H32c-.6 0-1-.4-1-1v-7.5c0-.6.4-1 1-1h4.4c.6 0 1 .4 1 1s-.4 1-1 1H33V20h3Z"
        />
      </svg>
    </a>
  )
}
