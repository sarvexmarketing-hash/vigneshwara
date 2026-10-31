import { siteConfig } from '@/data/config';

export function getWhatsAppNumber(): string {
  return siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
}

export function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export function getProductEnquiryMessage(productName: string, packageSize?: string): string {
  const sizePart = packageSize ? `, package size ${packageSize}` : '';
  return `Hello ${siteConfig.name}, I would like to enquire about ${productName}${sizePart}, and wholesale pricing. Please share availability and details.`;
}

export function getBulkEnquiryMessage(data: {
  businessName?: string;
  category?: string;
  quantity?: string;
  customerName?: string;
}): string {
  const biz = data.businessName ? ` Business name: ${data.businessName}.` : '';
  const cat = data.category ? ` Required products/category: ${data.category}.` : '';
  const qty = data.quantity ? ` Quantity: ${data.quantity}.` : '';
  const sender = data.customerName ? ` My name is ${data.customerName}.` : '';

  return `Hello ${siteConfig.name}, I am interested in purchasing beverages for my business.${biz}${cat}${qty}${sender} Please share availability and wholesale prices.`;
}

export function getGeneralEnquiryMessage(): string {
  return `Hello ${siteConfig.name}, I am interested in beverage distribution and wholesale supply. Please share your catalog, available brands, and wholesale price details.`;
}

