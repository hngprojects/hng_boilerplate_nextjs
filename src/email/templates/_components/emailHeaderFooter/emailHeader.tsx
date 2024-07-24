import { Text } from "@react-email/components";

const EmailHeader: React.FC = () => {
  return (
    <header className="flex h-24 items-center justify-center p-4 text-default-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="mr-2"
      >
        <circle cx="4" cy="4" r="4" fill="#F97316" />
        <circle cx="14" cy="4" r="4" fill="#F97316" />
        <circle cx="4" cy="14" r="4" fill="#F97316" />
        <circle cx="14" cy="14" r="4" fill="#F97316" />
      </svg>
      <Text className="text-2xl font-bold text-primary">Boilerplate.</Text>
    </header>
  );
};

export default EmailHeader;
