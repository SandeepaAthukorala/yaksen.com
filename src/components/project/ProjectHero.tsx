interface ProjectHeroProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectHero({
  title,
  category,
  description,
  image,
}: ProjectHeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary/90 rounded-full mb-4 w-fit">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-white/90 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
