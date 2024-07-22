export type LegalTermContentItem = {
  text: string;
  list?: {
    title: string;
    body: string;
  }[];
};

export type LegalTermData = {
  id: string;
  title: string;
  description: LegalTermContentItem;
}[];

const privacyPolicyData: LegalTermData = [
  {
    id: "intro",
    title: "Introduction",
    description: {
      text: "At Boilerplate Hng, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure its security. By using our services, you agree to the collection and use of information in accordance with this policy.",
    },
  },
  {
    id: "info-we-collect",
    title: "Information We Collect",
    description: {
      text: "We collect various types of information in connection with the services we provide, including:",
      list: [
        {
          title: "Personal Information:",
          body: "This includes any information that can be used to identify you personally, such as your name, email address, phone number, and payment information. We collect personal information when you create an account, make a purchase, or interact with our customer support.",
        },
        {
          title: "Usage Information:",
          body: "This refers to information about how you use our services, such as your IP address, browser type, pages visited, and the time spent on those pages. We collect this information to understand how our users interact with our services and to improve our offerings.",
        },
        {
          title: "Cookies and Tracking Technologies:",
          body: "We use cookies and other tracking technologies to enhance your experience on our website, analyze site traffic, and for security purposes. Cookies are small data files stored on your device that help us recognize you and provide a more personalized experience.",
        },
      ],
    },
  },
  {
    id: "how-we-use-your-info",
    title: "How We Use Your Information",
    description: {
      text: "We use the information we collect to:",
      list: [
        {
          title: "Provide and Improve Our Services:",
          body: "Your information helps us deliver the services you request and improve our offerings based on your feedback and interactions.",
        },
        {
          title: "Personalize Your Experience:",
          body: "We use your information to tailor our services to your preferences and provide you with relevant description and recommendations.",
        },
        {
          title: "Communicate with You:",
          body: "We may use your contact information to send you updates, newsletters, and promotional materials. You can opt-out of receiving marketing communications at any time.",
        },
        {
          title: "Ensure Security and Prevent Fraud:",
          body: "Your information helps us protect your account and our services from unauthorized access and other security threats.",
        },
        {
          title: "Comply with Legal Obligations:",
          body: "We may use your information to comply with legal requirements, such as tax regulations and data protection laws.",
        },
      ],
    },
  },
  {
    id: "sharing-your-info",
    title: "Sharing Your Information",
    description: {
      text: "We do not sell your personal information to third parties. We may share your information with:",
      list: [
        {
          title: "Service Providers:",
          body: "We work with trusted third-party companies that perform services on our behalf, such as payment processing, data analysis, and customer support. These service providers have access to your information only to perform these tasks and are obligated to protect your information.",
        },
        {
          title: "Legal Authorities:",
          body: "We may disclose your information if required by law or if we believe that such action is necessary to comply with legal processes, protect our rights, or ensure the safety of our users.",
        },
        {
          title: "Business Transfers:",
          body: "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such changes and the choices you have regarding your information.",
        },
      ],
    },
  },

  {
    id: "your-choices-and-rights",
    title: "Your Choices and Rights",
    description: {
      text: "You have certain rights regarding your personal information, including:",
      list: [
        {
          title: "Access and Correction:",
          body: "You can request access to and correction of your personal information by contacting us at [Your Contact Information].",
        },
        {
          title: "Deletion:",
          body: "You can request the deletion of your personal information, subject to certain legal obligations we may have to retain your information.",
        },
        {
          title: "Opt-Out of Marketing Communications:",
          body: "You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in the emails or contacting us directly.",
        },
        {
          title: "Cookies Management:",
          body: "You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use some features of our services.",
        },
      ],
    },
  },
  {
    id: "security-measures",
    title: "Security Measures",
    description: {
      text: "We implement robust security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption, secure servers, and regular security assessments. However, no security system is completely infallible, and we cannot guarantee the absolute security of your information.",
    },
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    description: {
      text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will notify you by updating the date at the top of this policy and providing a more prominent notice if the changes are significant. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
    },
  },
  {
    id: "contact-us",
    title: "Contact Us",
    description: {
      text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [Your Contact Information].",
    },
  },
  {
    id: "last-updated",
    title: "Last Updated",
    description: {
      text: "This Privacy Policy was last updated on 13/07/2024.",
    },
  },
];

export const getTableOfContents = (data: LegalTermData) => {
  return data.map((section) => ({
    href: `#${section.id}`,
    label: section.title,
  }));
};

export default privacyPolicyData;
