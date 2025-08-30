interface ProjectGalleryProps {
  title?: string;
  images?: string[];
}

export function ProjectGallery({ 
  title = "Project Gallery",
  images = [] 
}: ProjectGalleryProps) {
  // If no images provided, show placeholder gallery
  const displayImages = images.length > 0 ? images : [
    { placeholder: "Desktop View" },
    { placeholder: "Mobile View" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayImages.map((item, index) => (
          <div 
            key={index}
            className="bg-gray-100 rounded-xl h-64 flex items-center justify-center"
          >
            {typeof item === 'string' ? (
              <img
                src={item}
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            ) : (
              <p className="text-gray-500">{item.placeholder}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}