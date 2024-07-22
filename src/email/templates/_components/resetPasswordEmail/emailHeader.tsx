import { Text } from "@react-email/components";

const EmailHeader: React.FC = () => {
  return (
    <header className="h-22 fixed left-0 right-0 top-0 flex items-center justify-center bg-[#E1D6D666] p-4 text-default-foreground">
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
