import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Trada's Terms of Service. Please read carefully before using our platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />
        </div>

        <div className="container-trada relative z-10 text-center">
          <h1             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Terms of Service
          </h1>
          <p             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-dark-text-muted)]"
          >
            Last updated: March 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="container-trada max-w-3xl">
          <div             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-[var(--color-dark-text-muted)]"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using Trada ("the Service"), you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Use License
              </h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Trada for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>Attempt to reverse engineer any software contained on Trada</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
                <li>
                  Engage in any activity that disrupts the normal flow of the
                  Service
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Disclaimer
              </h2>
              <p className="leading-relaxed">
                The materials on Trada are provided "as is". Trada makes no
                warranties, expressed or implied, and hereby disclaims and
                negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Limitations
              </h2>
              <p className="leading-relaxed">
                In no event shall Trada or its suppliers be liable for any
                damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Trada, even if
                Trada or an authorized representative has been notified orally
                or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="leading-relaxed">
                The materials appearing on Trada could include technical,
                typographical, or photographic errors. Trada does not warrant
                that any of the materials on Trada are accurate, complete, or
                current. Trada may make changes to the materials contained on
                Trada at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Links
              </h2>
              <p className="leading-relaxed">
                Trada has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by Trada of
                the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Modifications
              </h2>
              <p className="leading-relaxed">
                Trada may revise these terms of service for Trada at any time
                without notice. By using this website, you are agreeing to be
                bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Governing Law
              </h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of the United States, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                located in New York.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Trading Risk Acknowledgment
              </h2>
              <p className="leading-relaxed mb-4">
                You acknowledge that trading involves substantial risk of loss.
                Past performance is not indicative of future results. Trada is
                not responsible for losses incurred due to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Platform downtime or technical failures</li>
                <li>Execution delays or slippage</li>
                <li>Broker failures or account limitations</li>
                <li>Your trading decisions or strategy</li>
                <li>Market conditions or unforeseen events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Account Responsibility
              </h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account information and password. You are responsible for all
                activities that occur under your account. You agree to notify
                Trada immediately of any unauthorized use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:{" "}
                <a
                  href="mailto:legal@trada.io"
                  className="text-[var(--color-trada-red)] hover:underline"
                >
                  legal@trada.io
                </a>
              </p>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-[var(--radius-md)] border border-white/10">
              <p className="text-sm text-[var(--color-dark-text-muted)]">
                This is a placeholder Terms of Service. For a production site,
                consult with a legal professional to ensure full compliance with
                applicable laws and regulations in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden border-t border-white/10">
        <div className="container-trada max-w-3xl">
          <div             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[var(--color-dark-text-muted)] mb-6">
              Questions about our terms? Contact our legal team.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
