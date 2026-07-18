import siteData from "./siteData.json";

export const company = siteData.company;
export const socialLinks = siteData.socialLinks;
export const navLinks = siteData.navLinks;
export const hero = siteData.hero;
export const stats = siteData.stats;
export const heroFeatures = siteData.heroFeatures;
export const visionSection = siteData.visionSection;
export const servicesSection = siteData.servicesSection;
export const supportSection = siteData.supportSection;

export const contactSection = {
  ...siteData.contactSection,
  cards: siteData.contactSection.cards.map(({ valueKey, value, linkType, ...card }) => {
    const resolvedValue = valueKey ? company[valueKey] : value;
    let href = null;

    if (linkType === "email") href = `mailto:${resolvedValue}`;
    if (linkType === "tel") href = `tel:${resolvedValue.replace(/\s/g, "")}`;
    if (linkType === "whatsapp") {
      href = `https://wa.me/${resolvedValue.replace(/\D/g, "")}`;
    }

    return { ...card, value: resolvedValue, href };
  }),
};

export default siteData;
