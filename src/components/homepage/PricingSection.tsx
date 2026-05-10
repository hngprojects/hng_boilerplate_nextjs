import Link from 'next/link'
import Image from 'next/image'
import { cn } from '~/utils'

const plans = [
  {
    name: 'Essential',
    price: 28,
    features: [
      'Unlimited 1:1 virtual check-ins',
      '25% off wellness products',
      '2 guest passes/month',
      'Gift a membership at 50% off',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    price: 19,
    features: [
      '2 live sessions weekly',
      'Exclusive member community',
      'Free downloadable guides',
      'SSO & enhanced security',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 29,
    features: [
      'Unlimited 1:1 virtual check-ins',
      '25% off wellness products',
      '2 guest passes/month',
      'Gift a membership at 50% off',
    ],
    featured: false,
  },
]

const PricingSection = () => {
  return (
    <section className={'mx-auto w-full bg-[#FEFEFE] px-4 py-20 md:px-20'}>
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[730px] text-center">
          <span className="mb-6 inline-block rounded-xl border border-[#E0E0E0] bg-[#FAFAFA] px-4 py-1.5 text-sm font-medium text-[#2B2B2B]">
            Pricing
          </span>
          <h2 className="mx-auto mb-6 text-2xl font-bold leading-tight text-[#2B2B2B] md:text-[2.5rem]">
            Clear pricing for smarter, safer decisions
          </h2>
          <p className="mx-auto max-w-md pb-5 text-sm text-[#666666] md:text-base">
            No hidden fees. No confusion. Just the right plan for your security
            needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:px-10">
          {plans.map((plan, index) => (
            <div
              key={`${plan.name}-${index}`}
              className={cn(
                'relative flex flex-col overflow-hidden rounded-xl border bg-white md:min-h-[416px]',
                plan.featured
                  ? 'border-2 border-[#072E28]'
                  : 'border border-[#E0E0E0]'
              )}
            >
              {/* Featured Banner */}
              {plan.featured && (
                <div className="bg-[#072E28] py-3 text-center text-sm font-medium tracking-wide text-white">
                  Most Popular
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 pt-7">
                {/* Plan Name */}
                <h3 className="mb-3 text-[15px] font-medium text-[#2B2B2B]">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      'text-[2.5rem] font-[400] leading-none',
                      plan.featured ? 'text-[#072E28]' : 'text-[#2E251C]'
                    )}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-[13px] text-[#666666]">
                    /mo (billed annually)
                  </span>
                </div>

                {/* Features */}
                <div className="mt-auto">
                  <p
                    className={cn(
                      'mb-3 text-sm font-semibold text-[#2B2B2B]',
                      plan.featured ? 'pt-10' : 'pt-8 md:pt-0'
                    )}
                  >
                    Features:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#6B7280]"
                      >
                        <Image
                          src="/home/checkbox-circle-line.jpg"
                          alt=""
                          width={16}
                          height={16}
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA - close to features */}
                <div className="mt-6">
                  <Link
                    href="/demo"
                    className="group/btn relative block w-full overflow-hidden rounded-xl bg-[#072E28] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0a3d36]"
                  >
                    <span className="relative">
                      Try Demo
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
