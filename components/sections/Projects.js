import { projectsSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import LaptopMockup from "@/components/ui/LaptopMockup";
import cn from "@/lib/cn";

function ProjectCard({ project, reverse = false }) {
  return (
    <article className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
      <FadeUp className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-teal sm:mb-3">
          {project.category}
        </span>
        <h3 className="mb-2 text-[clamp(1.4rem,4vw,2.2rem)] font-bold tracking-tight text-navy">
          {project.name}
        </h3>
        <p className="mb-3 text-base font-medium text-navy sm:mb-4 sm:text-lg">{project.tagline}</p>
        <p className="mb-5 text-sm font-light leading-relaxed text-muted sm:mb-6 sm:text-[0.95rem]">
          {project.description}
        </p>
        <ul className="flex flex-col gap-2.5 sm:gap-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </FadeUp>

      <FadeUp className={cn("order-first lg:order-none", reverse ? "lg:order-1" : "lg:order-2")}>
        <LaptopMockup
          screens={project.screens}
          projectName={project.name}
          websiteUrl={project.websiteUrl}
          websiteLabel={project.websiteLabel}
        />
      </FadeUp>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-navy/10 bg-white py-12 sm:py-16 md:py-20 lg:py-[clamp(4rem,8vw,5.625rem)]">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={projectsSection.tag}
            title={projectsSection.title}
            subtitle={projectsSection.subtitle}
          />
        </FadeUp>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[clamp(3.5rem,7vw,5.5rem)]">
          {projectsSection.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
