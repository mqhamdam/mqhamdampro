import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}