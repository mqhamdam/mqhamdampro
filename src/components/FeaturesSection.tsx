import { BulbIcon, CheckmarkCircle01Icon } from "hugeicons-react";

interface FeaturesSectionProps {
  features: string[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <BulbIcon size={28} className="text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
          >
            <CheckmarkCircle01Icon
              size={20}
              className="text-green-500 flex-shrink-0"
            />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}