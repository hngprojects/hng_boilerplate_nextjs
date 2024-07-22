export const Obligations = [
  {
    title: " Provide Accurate Information:",
    value:
      " When creating an account, you must provide accurate and complete information. This includes your name, email address, and any other required details. Providing false  information can result in the termination of your account.",
  },
  {
    title: " Maintain Account Security:",
    value:
      "  You are responsible for maintaining the confidentiality of your account credentials. Do not share your password with anyone and notify us immediately if you suspect any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to comply with this security obligation.",
  },
  {
    title: "  Comply with Applicable Laws:",
    value:
      "Your use of our services must comply with all applicable laws and regulations. This includes local, state, national, and international laws. Any illegal activity will result in the immediate termination of your account and may be reported to the relevant authorities.",
  },
  {
    title: "Respect Intellectual Property Rights: ",
    value:
      " You must respect the intellectual property rights of others. Do not upload, share, or distribute content that infringes on someone else's intellectual property rights. This includes copyrighted materials, trademarks, and any other proprietary information.",
  },
  {
    title: "Prohibited Conduct:",
    value:
      " You must not engage in any conduct that is harmful, offensive, or disruptive. This includes, but is not limited to, harassment, spamming, phishing, or distributing malware. Any behavior that we deem inappropriate will result in the termination of your account.",
  },
  {
    title: "Use Services as Intended:",
    value:
      "You must use our services only for their intended purposes. Do not attempt to exploit or misuse our services in any way. This includes circumventing any security measures, using automated tools to access our services, or interfering with the",
  },
];

export const AcceptableUsePolicy = [
  {
    title: "Respectful Communication",
    value:
      "All interactions on our platform must be respectful and professional. Do not use offensive, abusive, or inflammatory language. Treat all users with respect and courtesy.",
  },
  {
    title: "No Misrepresentation:",
    value:
      " Do not impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity. Authenticity is crucial to maintaining trust on our platform.",
  },
  {
    title: "Privacy Protection",
    value:
      "Do not collect or store personal data about other users without their express permission. Respect the privacy of others and adhere to all applicable privacy laws and regulations.",
  },
  {
    title: "Appropriate Content",
    value:
      "All content shared on our platform must be appropriate and lawful. Do not share content that is obscene, defamatory, threatening, or otherwise objectionable. This includes text, images, videos, and any other form of media.",
  },
  {
    title: "Compliance with Policies:",
    value:
      "You must comply with all our policies, including our Privacy Policy and any additional guidelines we may provide. Familiarize yourself with our policies to ensure you are using our services appropriately.",
  },
];
export const IntellectualPropertyRight = [
  {
    title: "Ownership of Content:",
    value:
      "All content on our website, including text, graphics, logos, and images, is the property of boilerplate Hng or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.",
  },
  {
    title: "User-Generated Content:",
    value:
      "By submitting content to our platform, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, publish, and distribute your content. You retain all rights to your content, but you grant us the right to use it in connection with our services.",
  },
  {
    title: "Infringement Claims:",
    value:
      "If you believe that your intellectual property rights have been infringed, please contact us with detailed information about the alleged infringement. We will investigate the matter and take appropriate action, which may include removing the infringing content and terminating the accounts of repeat infringers.",
  },
  {
    title: "Trademarks",
    value:
      " Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent. Any unauthorized use of our trademarks is strictly prohibited.",
  },
];

export const Disclaimers = [
  {
    title: "No Warranties:",
    value:
      'Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the content on our site. Your use of our services is at your own risk.',
  },
  {
    title: "Limitation of Liability",
    value:
      "To the fullest extent permitted by law, [Your Company Name] disclaims all liability for any damages arising from your use of our website and services. This includes direct, indirect, incidental, consequential, and punitive damages.",
  },
  {
    title: "Third-Party Content:",
    value:
      "Our website may contain links to third-party websites and content. We do not endorse or assume any responsibility for any third-party content. Your interactions with third-party websites are solely between you and the third party.",
  },
  {
    title: "Indemnification:",
    value:
      "You agree to indemnify and hold harmless [Your Company Name] and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses arising from your use of our services or your violation of these Terms and Conditions.",
  },
];

export const GoverningLaw = [
  {
    title: "Governing Law:",
    value:
      "These Terms and Conditions are governed by the laws of [Your Country/State], without regard to its conflict of laws principles. Any legal action or proceeding arising under these terms will be brought exclusively in the courts of [Your Jurisdiction].",
  },
  {
    title: "Dispute Resolution:",
    value:
      "We are committed to resolving disputes amicably and efficiently. In the event of a dispute, you agree to first attempt to resolve the matter informally by contacting us. If the dispute cannot be resolved informally, we agree to submit the matter to mediation before pursuing any other form of dispute resolution.",
  },
  {
    title: "Arbitration:",
    value:
      "If mediation fails, any dispute arising from these Terms and Conditions will be resolved by binding arbitration in accordance with the rules of [Arbitration Organization]. The arbitration will be conducted in [Location], and the arbitrator's decision will be final and binding",
  },
];

export const SECTIONS = [
  { id: "introduction", text: "Introduction" },
  { id: "user-obligations", text: "User Obligations" },
  { id: "acceptable-use-policy", text: "Acceptable Use Policy" },
  { id: "intellectual-property", text: "Intellectual Property Right" },
  { id: "disclaimer", text: "Disclaimer and Limitation of Liability" },
  { id: "governing-law", text: "Governing Law and Dispute Resolution" },
  { id: "changes-to-terms", text: "Changes to Terms" },
  { id: "contact-information", text: "Contact Information" },
  { id: "last-updated", text: "Last Updated Date" },
] as const;

export const Contents = SECTIONS.map(({ id, text }) => ({ id, text }));
