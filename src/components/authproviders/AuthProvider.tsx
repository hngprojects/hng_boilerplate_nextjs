function AuthProvider({ title }: { title: string }) {
  return (
    <>
      <button className="flex items-center gap-2 rounded-md border border-gray-200 p-4">
        {title}
      </button>
    </>
  );
}

export default AuthProvider;
