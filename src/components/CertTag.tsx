import { Tooltip } from "antd";

interface CertTagProps {
  certification: string;
  tooltip: string;
}

export function CertTag({ certification, tooltip }: CertTagProps) {
  return (
    <Tooltip title={tooltip}>
      <img
        src={certification}
        alt={tooltip}
        className="h-32 w-32 hover:scale-90 transition-transform duration-300 ease-linear"
      />
    </Tooltip>
  );
}