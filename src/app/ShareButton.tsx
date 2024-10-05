'use client';

export function ShareButton() {
  return (
    <button
      className="cursor-pointer whitespace-nowrap rounded-md bg-slate-950 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      type="button"
      onClick={async () => {
        const shareData = {
          title: 'Money Snek 🐍🐍💰💰',
          text: 'Check out this minimalist share page!',
          url: window.location.href,
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
          } else {
            console.log('Web Share API not supported');
          }
        } catch (error) {
          console.error('Error sharing:', error);
        }
      }}
    >
      Share this ⬆️⬆️
    </button>
  );
}
