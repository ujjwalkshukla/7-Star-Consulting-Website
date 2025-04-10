
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({
  value,
  label,
  prefix = '',
  suffix = '',
  icon,
  className = '',
}: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center",
      className
    )}>
      {icon && <div className="text-7star-purple mb-3">{icon}</div>}
      
      <div className="text-3xl md:text-4xl font-bold font-playfair mb-1">
        {prefix && <span>{prefix}</span>}
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
