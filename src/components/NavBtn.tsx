interface NavBtnProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export function NavBtn({ text, href, isActive = false }: NavBtnProps) {
  const baseClasses = "px-4 py-1 text-lg tracking-widest uppercase transition-colors border-1 rounded-4xl";
  const activeClasses = isActive 
    ? "text-white bg-(--primary-color) border-(--primary-color)" 
    : "text-black border-transparent hover:text-(--primary-color) hover:border-(--primary-color)";

  return (
    <a
      href={href}
      className={`${baseClasses} ${activeClasses}`}
    >
      {text}
    </a>
  );
}