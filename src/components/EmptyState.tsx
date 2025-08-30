interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: string;
}

export function EmptyState({ 
  title = "No projects found",
  description = "Try adjusting your search or filter criteria",
  icon = "🔍"
}: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="text-gray-400 text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}