import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Trada's Privacy Policy. How we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                Introduction
              </h2>
              <p className="leading-relaxed">
                Trada ("we", "us", "our") operates the trada.io website and
                application. This page informs you of our policies regarding the
                collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Information Collection and Use
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                1.1 Personal Data
              </h3>
              <p className="leading-relaxed mb-4">
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you ("Personal Data"). This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                1.2 Trading Data
              </h3>
              <p className="leading-relaxed">
                When you connect your trading accounts to Trada, we may access
                and store:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Account equity and balance data</li>
                <li>Trade execution history</li>
                <li>Position and risk metrics</li>
                <li>Performance statistics</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">
                1.3 Usage Data
              </h3>
              <p className="leading-relaxed">
                We automatically collect certain information when you use our
                Service, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring and exit pages</li>
                <li>Device information and crash data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Use of Data
              </h2>
              <p className="leading-relaxed mb-4">
                Trada uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To detect and prevent technical issues or fraud</li>
                <li>To send promotional communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Security of Data
              </h2>
              <p className="leading-relaxed">
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. We use industry-standard
                encryption (AES-256) and TLS 1.3 for all data in transit and at
                rest. However, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. GDPR Compliance
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                4.1 Legal Basis
              </h3>
              <p className="leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), Trada
                processes your personal data based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Compliance with legal obligations</li>
                <li>Our legitimate interests</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">
                4.2 Your Rights
              </h3>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (right to be forgotten)</li>
                <li>Restrict processing of your data</li>
                <li>Receive data in a portable format</li>
                <li>Object to processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track
                activity on our Service. You can instruct your browser to refuse
                all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use certain
                portions of our Service.
              </p>
              <p className="leading-relaxed">
                We use analytics tools to understand how users interact with our
                Service. This helps us improve our product.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Third-Party Links
              </h2>
              <p className="leading-relaxed">
                Our Service may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain personal data for as long as necessary to provide our
                Service and fulfill the purposes outlined in this policy. You
                can request deletion of your account and data at any time by
                contacting privacy@trada.io.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Data Breaches
              </h2>
              <p className="leading-relaxed">
                In the event of a data breach that poses a risk to your rights
                and freedoms, we will notify you and relevant authorities within
                72 hours as required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. If you are a parent or guardian and you are
                aware that your child has provided us with personal data, please
                contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Changes to this Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:privacy@trada.io"
                  className="text-[var(--color-trada-red)] hover:underline"
                >
                  privacy@trada.io
                </a>
              </p>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-[var(--radius-md)] border border-white/10">
              <p className="text-sm text-[var(--color-dark-text-muted)]">
                This is a placeholder Privacy Policy. For a production site,
                consult with a legal professional to ensure full GDPR and
                regulatory compliance.
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
              We take your privacy seriously. Have questions?
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
