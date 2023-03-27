import "./globals.css";

// todo
export const metadata = {
  title: "merricktian.me",
  description: "Personal website of Merrick Tian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
