import { Sidebar } from "lucide-react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const loggedIn = { firstName: 'Jeremy', lastName: 'Sanjaya' };
    return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
            {children}
      </main>
    );
  }
  