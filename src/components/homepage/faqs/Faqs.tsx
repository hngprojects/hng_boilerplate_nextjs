import { faqsData } from '../constants'
import { Card, CardContent } from '../../ui/card'
import FaqAccordion from './accordion'
import { Button } from '~/components/ui/button'
import UserAvatarCascade from '../UserAvatarCascade'

const FAQs = () => {
  return (
    <div className="wrapper py-10">
      <div className="md:rounded-4xl grid items-center gap-16 rounded-2xl bg-neutral-50 p-8 sm:p-10 md:grid-cols-[min-content_1fr] md:p-14">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="mb-2 text-4xl font-semibold md:text-[40px]">
              Frequently asked questions
            </h1>
            <p className="text-muted-foreground">
              Have Questions? Here are quick answers to some of the most common
              queries
            </p>
          </div>
          <Card>
            <CardContent className="space-y-3">
              <div className="space-y-1 leading-tight">
                <h3 className="text-lg font-bold">More questions?</h3>
                <p className="text-sm text-muted-foreground">
                  We’re always ready to help you out.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <UserAvatarCascade />
                <Button className="px-8" href="/contact">
                  Contact support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQList */}
        <FaqAccordion faqs={faqsData} />
      </div>
    </div>
  )
}

export default FAQs
