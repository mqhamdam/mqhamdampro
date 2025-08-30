import { Tooltip } from "antd";

interface SkillTagProps {
  logo: string;
  tooltipMsg: string;
  href: string;
}

export function SkillTag({ logo, tooltipMsg }: SkillTagProps) {
  return (
    <Tooltip title={tooltipMsg}>
      <img
        src={logo}
        alt={tooltipMsg}
        className="h-8 w-8 hover:scale-90 transition-transform duration-300 ease-linear"
      />
    </Tooltip>
  );
}