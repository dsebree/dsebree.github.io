import React from 'react';

const ProjectCard = ({ title, description, tags, image }: any) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-1 backdrop-blur-md transition-all hover:bg-white/15">
      <div className="relative rounded-xl bg-slate-900/90 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;