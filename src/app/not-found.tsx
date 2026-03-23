import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container-trada text-center">
        {/* Large 404 */}
        <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-white/5 select-none">
          404
        </h1>

        <div className="-mt-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page not found
          </h2>
          <p className="text-lg text-[var(--color-dark-text-muted)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--color-trada-red)] rounded-[var(--radius-full)] hover:bg-[var(--color-trada-red)]/90 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--color-dark-text-muted)] bg-white/5 border border-white/10 rounded-[var(--radius-full)] hover:bg-white/10 hover:text-white transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
