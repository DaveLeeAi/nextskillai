interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatBlockProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export function StatBlock({ stats, columns = 4 }: StatBlockProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-1 brand-gradient bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="font-semibold text-sm text-white">{stat.label}</div>
          {stat.description && (
            <div className="text-xs mt-1 text-slate-500">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
