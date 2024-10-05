import { ShareButton } from '@/app/ShareButton';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <article className="prose prose-slate rounded-md bg-white p-4 shadow-md">
        <p className="md:prose-xl">
          This 👈👉 is money snek. 🐍🐍💰💰 Share this ⬆️⬆️🔜🔜 in 7.123
          7️⃣1️⃣2️⃣3️⃣ snekonds 🐍🐍 or you ✋✋ will NEVER ❌❌❌❌ get monies 💰💰
          again Beware!! ✋✋❌❌ You😏😏 don&apos;t ❌❌ have much
          time!!🕛🕧🕐🕜🕑🕝🕝 You 😏😏 may never ❌❌get monies 💰💰🐍💰💰
          again!!
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-8">
          <div className="flex w-full md:w-auto">
            <a
              className="ml-auto whitespace-nowrap"
              href="https://photoai.com/?via=moneysnek"
              target="blank"
              rel="noreferrer"
            >
              Use Photo AI 📸📸
            </a>
          </div>
          <a
            className="not-prose ml-auto cursor-pointer whitespace-nowrap rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50"
            href="https://x.com/emreloperr/status/1842169726245474377"
            target="_blank"
            rel="noreferrer"
          >
            See the story ↗️↗️
          </a>
          <ShareButton />
        </div>
      </article>
    </main>
  );
}
