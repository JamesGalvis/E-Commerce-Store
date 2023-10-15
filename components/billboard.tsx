import { cn } from '@/lib/utils';
import { Billboard } from '@/types';
import { HtmlHTMLAttributes } from 'react';

interface BillboardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: Billboard;
  textColor?: string;
}

function Billboard({ data, textColor, className }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div
          className={cn(
            'h-full w-full flex flex-col justify-center items-center text-center gap-y-8',
            className
          )}
        >
          <p
            className={`font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-2xl max-w-xs ${textColor}`}
          >
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
