import { IntegrationCard } from "~/components/common/IntegrationCard";

interface IntegrationCardData {
  heading: string;
  description: string;
  logoURL: string;
  isActive: boolean;
}

export default function Guide() {
  const data: IntegrationCardData[] = [
    {
      heading: "Drive",
      description: 'Google Drive is a cloud storage service that allows you to store, share, and access files from any device.',
      logoURL: '/vercel.svg',
      isActive: false,
    }
  ];

  return (
    <main className="w-full h-screen flex items-center justify-center">
      {data.map((item, index) => (
        <IntegrationCard
          key={index}
          heading={item.heading}
          description={item.description}
          logoURL={item.logoURL}
          isActive={item.isActive}
        />
      ))}
    </main>
  );
}
