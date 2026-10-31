import { BusinessConfig } from '@/types';

export const siteConfig: BusinessConfig = {
  name: "Sri Vigneshwara Agencies",
  tagline: "All types of cool drinks and packaged water bottles available at wholesale prices.",
  phone: "9676373388",
  displayPhone: "+91 96763 73388",
  whatsappNumber: "919676373388",
  email: "srivigneshwaraagencies@gmail.com",
  address: {
    line1: "D.No. 2-10/1, Opp. High School",
    area: "Patha Muggumpuram, Chennaraopet",
    city: "Chennaraopet",
    state: "Andhra Pradesh / Telangana",
    pincode: "506343",
    plusCode: "Chennaraopet Centre",
    fullAddress: "D.No. 2-10/1, Opp. High School, Patha Muggumpuram, Chennaraopet",
  },
  businessHours: {
    days: "Monday - Saturday",
    hours: "8:00 AM - 8:30 PM",
    note: "Sundays: Wholesale orders by prior booking",
  },
  announcement: "All types of Cool Drinks & Water Bottles Available at Wholesale Prices — Contact: 9676373388",
};

export const config = {
  ...siteConfig,
  proprietor: "Choppari Harish",
  contact: {
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsappNumber,
  },
};
