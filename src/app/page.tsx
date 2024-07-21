import Image from "next/image";
import styles from '~/app/globals.module.css';
import { error } from "console";
import { detailedPayment } from "~/app/dummyData";
import Checked from '~/components/images/checked.svg'

export interface detailedPaymentPlan {
  name: string,
  description: string,
  price: number,
  features: string[],
  projectMgt: string[],
  sharing: string[],
  support: string[]
  current_plan_description: string,
  btn: string,
}

export const fetchPaymentPlan = async (): Promise<detailedPaymentPlan[]> => {
  try {
    const response = await fetch('')

    if (!response.ok) {
      throw new Error('Failed to Fetch Plans')
    }

    const data: detailedPaymentPlan[] = await response.json()
    return data
  } catch (error) {
    return detailedPayment
  }
}

export default async function PaymentPlan() {
  const paymentPlan = await fetchPaymentPlan()

  return (
    <main className="min-h-svh max-w-[989px] mx-auto mt-[102px]">
      <article className={styles.main}>
        <p className="font-[600] text-[24px] text[#0A0A0A] pl-[17px]">Current Plan</p>

        <div className="pl-[17px] pt-[24px] pb-[22px] pr-[94px] bg-[#FFF8F2] rounded-[12px] my-[24px]">
          <p className="text-[#0A0A0A] text-[20px] font-[600] leading-normal">Current Plan</p>
          <p className="text-[14px] font-[400] md:whitespace-nowrap">Your account is on a free 90-day trial of our free plan, through September 27th. Upgrade anytime to stay on this plan when your trial ends</p>
          <p className="text-[#525252] text-[14px] font-[400]">$0/month</p>
        </div>

        <div className="pl-[17px] flex w-full sm:flex-row gap-4 min-h-[222px]">
          <p className="text-[16px] font-[600] mt-[15px] max-w-[130px]">Subscribe to your desired plan</p>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {paymentPlan.map((plan, index) => (
              <div key={index} className={styles.paymentCards}>
                <p className="text-[16px] font-[600]">{plan.name}</p>
                <p className="text-[25px] font-[500] py-4">{`$${plan.price}`} <span className="text-[14px] font-[400] text-[#525252]">/month</span></p>
                <p className="text-[14px] font-[400] text-[#525252] max-w-[160px]">{plan.description}</p>
                <button className={`${styles.paymentBtn} sm:px-4 sm:py-2`}>{plan.btn}</button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full sm:flex sm:flex-cols">
          <p className={styles.highlightTitle}>Highlights</p>
          <div className={styles.highlight}>
            {detailedPayment.map((plan, index) => (
              <div key={index}>
                <ul className={styles.highlightPlans}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="font-[700] text-[16px] bg-[#FFF8F2] py-[28px] pl-[10px] pr-[39px] leading-[19.36px]">Project Management</p>
        <div className={styles.prodMgt}>
          <div className={styles.prodMgtPlanTitle}>
            <p>Projects</p>
            <p>File Upload</p>
            <p>User Account</p>
            <p>Teams</p>
          </div>
          {detailedPayment.map((plan, index) => (
            <div key={index}>
              <div className={styles.prodMgtPlan}>
                {plan.projectMgt.map((projectMt, projectMtIndex) => (
                  <p key={projectMtIndex}>{projectMt}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-[700] text-[16px] bg-[#FFF8F2] py-[28px] pl-[10px] pr-[39px] leading-[19.36px]">Sharing and collaboration</p>
        <div className={styles.prodMgt}>
          <div className={styles.prodMgtPlanTitle}>
            <p>Integration</p>
            <p>Guest Access</p>
            <p>Page Analysis</p>
            <p>Task Management</p>
          </div>
          {detailedPayment.map((plan, index) => (
            <div key={index}>
              <div className={styles.prodMgtPlanb}>
                {plan.projectMgt.map((projectMt, projectMtIndex) => (
                  <div key={projectMtIndex} className="py-[26px] flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-[700] text-[16px] bg-[#FFF8F2] py-[28px] pl-[10px] pr-[39px] leading-[19.36px]">Management and security</p>
        <div className={styles.prodMgt}>
          <div className={styles.prodMgtPlanTitle}>
            <p>Team Security</p>
            <p>Data Backup</p>
            <p>HIPAA Compliance</p>
          </div>
          {detailedPayment.map((plan, index) => (
            <div key={index}>
              <div className={styles.prodMgtPlan}>
                {plan.sharing.map((share, shareIndex) => (
                  <div className="py-[26px] flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-[700] text-[16px] bg-[#FFF8F2] py-[28px] pl-[10px] pr-[39px]">Support</p>
        <div className={styles.prodMgt}>
          <div className={styles.prodMgtPlanTitle}>
            <p>Priority Support</p>
            <p>Customer Support</p>
          </div>
          {detailedPayment.map((plan, index) => (
            <div key={index}>
              <div className={styles.prodMgtPlan}>
                {plan.support.map((sup, supIndex) => (
                  <div className="py-[26px] flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </article>
    </main>
  );
}
