import siteData from "./siteData.json";

export const company = siteData.company || {};
export const socialLinks = siteData.socialLinks || [];
export const navLinks = siteData.navLinks || [];
export const hero = siteData.hero || {};
export const heroSlides = siteData.heroSlides || [];
export const stats = siteData.stats || [];
export const heroFeatures = siteData.heroFeatures || [];
export const visionSection = {
  tag: "",
  title: "",
  subtitle: "",
  cards: [],
  ...(siteData.visionSection || {}),
  cards: siteData.visionSection?.cards || [],
};
export const servicesSection = {
  tag: "",
  title: "",
  subtitle: "",
  categories: [],
  ...(siteData.servicesSection || {}),
  categories: siteData.servicesSection?.categories || [],
};
export const supportSection = {
  tag: "",
  title: "",
  subtitle: "",
  features: [],
  card: { title: "", description: "", availability: [], cta: "" },
  ...(siteData.supportSection || {}),
  features: siteData.supportSection?.features || [],
  card: {
    title: "",
    description: "",
    availability: [],
    cta: "",
    ...(siteData.supportSection?.card || {}),
    availability: siteData.supportSection?.card?.availability || [],
  },
};

export const contactSection = {
  tag: "",
  title: "",
  subtitle: "",
  ...(siteData.contactSection || {}),
  cards: (siteData.contactSection?.cards || []).map(({ valueKey, value, linkType, ...card }) => {
    const resolvedValue = valueKey ? company[valueKey] : value;
    let href = null;

    if (linkType === "email") href = `mailto:${resolvedValue}`;
    if (linkType === "tel") href = `tel:${String(resolvedValue || "").replace(/\s/g, "")}`;
    if (linkType === "whatsapp") {
      href = `https://wa.me/${String(resolvedValue || "").replace(/\D/g, "")}`;
    }

    return { ...card, value: resolvedValue, href };
  }),
};

export default siteData;
