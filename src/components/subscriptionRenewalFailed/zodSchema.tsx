import { z } from "zod";

export const SubscriptionRenewalFailedSchema = z.object({
  title: z.string(),
  name: z.string(),
  image: z.string(),
  renewalPeriod: z.string(),
  updatePaymentLink: z.string().url(),
  faqsLink: z.string().url(),
  supportEmail: z.string().email(),
  unsubscribeLink: z.string().url(),
});
