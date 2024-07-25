import Image from "next/image";

function AuthProvider({ title, icon }: { title: string; icon: string }) {
  return (
    <>
      <button className="flex items-center gap-2 rounded-md border border-gray-200 p-4">
        <Image src={icon} width={24} height={24} alt="img" />
        {title}
      </button>
    </>
  );
}

export default AuthProvider;
