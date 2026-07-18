import { company, contactSection } from "@/lib/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

function ContactCard({ icon, label, value, href }) {
  const valueClass =
    "break-all text-xs font-medium text-white/90 transition-colors hover:text-teal-glow sm:break-words sm:text-sm";

  return (
    <div className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-200 hover:border-teal/50 hover:bg-teal/10 sm:min-h-[130px] sm:rounded-2xl sm:p-5">
      <div className="mb-2 flex justify-center text-teal-glow">
        <Icon name={icon} size={24} />
      </div>
      <div className="mb-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white/45 sm:text-xs">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`${valueClass} no-underline`}
        >
          {value}
        </a>
      ) : (
        <div className={valueClass}>{value}</div>
      )}
    </div>
  );
}

export default function Contact() {
  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Project inquiry from website"
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-[#14302a] py-10 text-center sm:py-12 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,138,110,0.15)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            tag={contactSection.tag}
            title={contactSection.title}
            subtitle={contactSection.subtitle}
            dark
            centered
          />
        </FadeUp>

        <FadeUp>
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-3 sm:mb-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {contactSection.cards.map((card) => (
              <ContactCard key={card.label} {...card} />
            ))}
          </div>
        </FadeUp>

        <FadeUp>
          <div className="flex justify-center px-2">
            <Button href={mailtoHref} className="w-full max-w-xs sm:w-auto sm:px-10">
              Send Message
              <Icon name="arrowRight" size={18} />
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
