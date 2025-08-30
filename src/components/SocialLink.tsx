interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="flex items-end hover:scale-95 transition-transform duration-300 ease-in-out py-2 px-3 gap-2"
    >
      <img src={icon} alt={label} className="h-[26px]" />
      <div className="tracking-widest">{label}</div>
    </a>
  );
}