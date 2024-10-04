import { ShareButton } from '@/app/ShareButton';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <article className="prose prose-slate rounded-md bg-slate-50 p-4 shadow-md">
        <p className="md:prose-xl">
          This 👈👉 is money snek. 🐍🐍💰💰 Share this ⬆️⬆️🔜🔜 in 7.123
          7️⃣1️⃣2️⃣3️⃣ snekonds 🐍🐍 or you ✋✋ will NEVER ❌❌❌❌ get monies 💰💰
          again Beware!! ✋✋❌❌ You😏😏 don&apos;t ❌❌ have much
          time!!🕛🕧🕐🕜🕑🕝🕝 You 😏😏 may never ❌❌get monies 💰💰🐍💰💰
          again!!
        </p>
        <div className="flex justify-end gap-x-4">
          <a
            className="cursor-pointer rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50"
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
