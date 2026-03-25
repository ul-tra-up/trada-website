import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclaimer",
  description:
    "Important risk disclosures regarding copy trading and the use of Trada platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RiskDisclaimerPage() {
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
            Risk Disclaimer
          </h1>
          <p             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-dark-text-muted)]"
          >
            Please read this carefully before using Trada
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
            <div className="p-6 bg-[var(--color-trada-red)]/10 border border-[var(--color-trada-red)]/30 rounded-[var(--radius-md)]">
              <p className="font-bold text-white mb-2">⚠️ Important Warning</p>
              <p className="text-sm">
                Copy trading and automated trading systems involve substantial
                risk of loss. Past performance does not guarantee future results.
                You may lose some or all of your investment. Do not invest money
                you cannot afford to lose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Trading Risk
              </h2>
              <p className="leading-relaxed mb-4">
                All trading involves risk. Trading foreign exchange on margin
                carries a high level of risk and may not be suitable for all
                investors. The possibility exists that you could sustain a loss
                of some or all of your initial investment and therefore you
                should not invest money that you cannot afford to lose.
              </p>
              <p className="leading-relaxed">
                Copy trading amplifies this risk. When you copy another trader's
                signals, you are replicating their trading decisions. If the
                trader makes poor decisions, you will incur losses proportional
                to your account size.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. No Guarantee of Profits
              </h2>
              <p className="leading-relaxed">
                Trada does not guarantee profits or that you will not suffer
                losses. Past performance of any trading strategy, whether
                displayed on our platform or elsewhere, is not indicative of
                future results. Historical returns may not be representative of
                future performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Liquidity Risk
              </h2>
              <p className="leading-relaxed">
                Certain instruments and strategies may have low liquidity,
                making it difficult to execute orders at reasonable prices. Wide
                bid-ask spreads and slippage can occur, especially in volatile
                markets or during low-liquidity periods.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Leverage Risk
              </h2>
              <p className="leading-relaxed">
                Leverage (margin) amplifies both gains and losses. A small
                adverse price movement can wipe out your entire account. We
                strongly recommend using stop losses and position sizing to
                manage risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Counterparty Risk
              </h2>
              <p className="leading-relaxed">
                Your funds are held by brokers and exchanges, not by Trada. We
                have no control over broker operations. If a broker becomes
                insolvent, your funds may be at risk. We recommend using brokers
                regulated by recognized financial authorities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Technology Risk
              </h2>
              <p className="leading-relaxed mb-4">
                Trada's platform may experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Server downtime or outages</li>
                <li>Network connectivity issues</li>
                <li>Execution delays or failed orders</li>
                <li>Software bugs or unexpected behavior</li>
                <li>Cyber attacks or security breaches</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We work to minimize these risks, but they cannot be completely
                eliminated. You acknowledge that technology failures can result
                in financial losses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Execution Risk
              </h2>
              <p className="leading-relaxed">
                Even with our sub-3ms execution, slippage can occur. Market
                conditions, broker limitations, and network latency can result
                in execution at prices different from your expected price. Large
                orders may experience slippage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Copy Trading Specific Risks
              </h2>
              <p className="leading-relaxed mb-4">
                When copying another trader's signals, you assume additional risks:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  The strategy provider may change their trading approach
                  without notice
                </li>
                <li>The provider's past performance may not continue</li>
                <li>Delays in copying signals can result in poor execution</li>
                <li>
                  The provider may have different risk tolerance than you do
                </li>
                <li>You have no control over the trades being copied</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Regulatory Risk
              </h2>
              <p className="leading-relaxed">
                Trading regulations vary by jurisdiction. Some regions restrict
                certain trading instruments or practices. Changes in regulations
                can impact your ability to trade or the profitability of
                strategies. You are responsible for understanding and complying
                with regulations in your jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Market Risk
              </h2>
              <p className="leading-relaxed mb-4">
                Market conditions can change rapidly due to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Geopolitical events</li>
                <li>Economic data releases</li>
                <li>Central bank decisions</li>
                <li>Company earnings or news</li>
                <li>Market gaps and limit moves</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These events can cause sudden price movements that stop losses
                cannot protect against.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Psychological Risk
              </h2>
              <p className="leading-relaxed">
                Even with copy trading, emotions can influence decision-making.
                Seeing your account in drawdown may tempt you to abandon your
                strategy. We recommend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Having a written trading plan</li>
                <li>Sticking to your risk management rules</li>
                <li>Avoiding emotional decisions during losses</li>
                <li>Taking breaks during high-stress periods</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Disclaimer of Liability
              </h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRADA SHALL NOT BE
                LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any direct, indirect, or consequential losses</li>
                <li>Losses due to trading decisions</li>
                <li>Losses due to platform outages or technical failures</li>
                <li>Losses due to broker failures</li>
                <li>Losses due to market conditions</li>
                <li>Loss of profits, data, or other business interruption</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                13. Risk Management Best Practices
              </h2>
              <p className="leading-relaxed mb-4">
                To minimize risk when using Trada:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Only trade money you can afford to lose</li>
                <li>Use stop losses on every trade</li>
                <li>Follow position sizing rules</li>
                <li>Diversify across multiple strategies</li>
                <li>Monitor your account regularly</li>
                <li>Use Trada's guardrails to enforce risk limits</li>
                <li>Take regular breaks from trading</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                14. Acknowledgment
              </h2>
              <p className="leading-relaxed">
                By using Trada, you acknowledge that you have read and
                understood this Risk Disclaimer. You understand the risks
                involved in trading and copy trading. You are solely responsible
                for your trading decisions and any losses incurred.
              </p>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-[var(--radius-md)] border border-white/10">
              <p className="text-sm text-[var(--color-dark-text-muted)]">
                This disclaimer does not replace professional financial advice.
                If you are unsure about trading or investing, consult with a
                qualified financial advisor.
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
              Understand the risks and ready to start trading responsibly?
            </p>
            <Link
              href="https://app.trada.io"
              className="inline-block px-6 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all"
            >
              Start Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
