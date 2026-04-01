import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
          Systems-Driven <br />Product Designer
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Currently at <span className="text-white font-medium">DaySmart Software</span>, 
          bridging the gap between complex enterprise SaaS requirements and 
          high-fidelity Figma design systems.
        </p>
        <div className="flex gap-4">
          <a href="#work" className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition-all">
            View Case Studies
          </a>
        </div>
      </section>

      {/* Project Grid */}
      <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <ProjectCard 
          title="Figma Design System"
          description="Led the architecture of a multi-product UI library, reducing handoff friction through technical documentation and design tokens."
          tags={["Figma", "Design Systems", "Documentation"]}
          image="/path-to-figma-preview.jpg"
        />
        <ProjectCard 
          title="DaySmart Recreation (DASH)"
          description="Redesigned the B2B2C POS integration and mobile experience, resulting in a 20% increase in user adoption."
          tags={["React", "SaaS", "Mobile UX", "POS"]}
          image="/path-to-dash-preview.jpg"
        />
      </section>
    </div>
  );
}