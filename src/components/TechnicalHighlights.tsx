interface TechnicalHighlight {
  label: string;
  value: string;
}

interface TechnicalHighlightsProps {
  highlights: TechnicalHighlight[];
}

export function TechnicalHighlights({ highlights }: TechnicalHighlightsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Technical Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <h3 className="font-semibold text-gray-900 mb-2">
              {item.label}
            </h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export type { TechnicalHighlight };