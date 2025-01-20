

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ul className="flex text-center items-center justify-center gap-10 p-3">
        <li >Product</li>
        <li>Category</li>
        <li>Brand</li>
        <li>Price</li>
      </ul>
      {children}
    </div>
  );
}
