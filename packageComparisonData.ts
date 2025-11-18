export interface FeatureDetail {
  name: string;
  basic: string;
  standard: string;
  premium: string;
  luxury: string;
}

export interface FeatureCategory {
  category: string;
  features: FeatureDetail[];
}

export const PACKAGE_COMPARISON_DATA: FeatureCategory[] = [
  {
    category: 'Structure',
    features: [
      { name: 'Steel', basic: 'Local ISI Brands', standard: 'JSW/Tata Steel', premium: 'JSW/Tata Steel', luxury: 'JSW/Tata Steel' },
      { name: 'Cement', basic: 'ACC/Ultratech (Grade 43/53)', standard: 'ACC/Ultratech (Grade 43/53)', premium: 'ACC/Ultratech (Grade 43/53)', luxury: 'ACC/Ultratech (Grade 43/53)' },
      { name: 'Aggregate', basic: '20mm & 40mm', standard: '20mm & 40mm', premium: '20mm & 40mm', luxury: '20mm & 40mm' },
      { name: 'Solid Concrete Blocks', basic: '6 inch & 4 inch', standard: '6 inch & 4 inch', premium: '6 inch & 4 inch', luxury: '6 inch & 4 inch' },
      { name: 'Waterproofing', basic: 'Dr. Fixit/Fosroc', standard: 'Dr. Fixit/Fosroc', premium: 'Dr. Fixit/Fosroc', luxury: 'Dr. Fixit/Fosroc' },
      { name: 'Underground Sump', basic: '6000 ltrs', standard: '8000 ltrs', premium: '10000 ltrs', luxury: '12000 ltrs' },
      { name: 'Overhead Tank', basic: '1000 ltrs', standard: '1500 ltrs', premium: '2000 ltrs', luxury: '2000 ltrs with insulation' },
    ],
  },
  {
    category: 'Statutory Approvals',
    features: [
      { name: 'Approval from BBMP for Building Plan', basic: 'Included', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { name: 'BESCOM Approvals', basic: 'Included', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { name: 'BWSSB Approvals', basic: 'Included', standard: 'Included', premium: 'Included', luxury: 'Included' },
    ],
  },
  {
    category: 'Kitchen',
    features: [
        { name: 'Wall Tiles (2 ft)', basic: 'Up to ₹50/sqft', standard: 'Up to ₹70/sqft', premium: 'Up to ₹100/sqft', luxury: 'Up to ₹120/sqft' },
        { name: 'Main Sink Faucet', basic: 'Parryware/Hindware (5 yr warranty)', standard: 'Jaquar/Parryware (7 yr warranty)', premium: 'Jaquar/Kohler (10 yr warranty)', luxury: 'Grohe/Kohler (10+ yr warranty)' },
        { name: 'Kitchen Sink', basic: 'Stainless Steel (Single bowl)', standard: 'Stainless Steel (Single bowl)', premium: 'Carysil Quartz Sink', luxury: 'Carysil Quartz Sink (Large)' },
        { name: 'Plumbing', basic: 'Ashirvad/Supreme CPVC', standard: 'Ashirvad/Supreme CPVC', premium: 'Ashirvad/Supreme CPVC', luxury: 'Ashirvad/Supreme CPVC' },
    ],
  },
  {
    category: 'Bathroom',
    features: [
        { name: 'Wall Tiles (7 ft)', basic: 'Up to ₹50/sqft', standard: 'Up to ₹70/sqft', premium: 'Up to ₹100/sqft', luxury: 'Up to ₹120/sqft' },
        { name: 'Floor Tiles', basic: 'Up to ₹50/sqft', standard: 'Up to ₹70/sqft', premium: 'Up to ₹100/sqft', luxury: 'Up to ₹120/sqft' },
        { name: 'CP Fittings', basic: 'Parryware/Hindware', standard: 'Jaquar/Parryware', premium: 'Jaquar/Kohler', luxury: 'Grohe/Kohler' },
        { name: 'Sanitary Ware', basic: 'Parryware/Hindware', standard: 'Jaquar/Parryware', premium: 'Jaquar/Kohler', luxury: 'Grohe/Kohler' },
    ],
  },
  {
    category: 'Doors & Windows',
    features: [
        { name: 'Main Door', basic: 'Teak Frame, Flush Shutter', standard: 'Teak Frame, Designer Shutter', premium: 'Teak Wood Door', luxury: 'Designer Teak Wood Door' },
        { name: 'Internal Doors', basic: 'Salwood Frame, Flush Shutter', standard: 'Salwood Frame, Laminate Shutter', premium: 'WPC Frame & Door', luxury: 'WPC Frame & Designer Door' },
        { name: 'Windows', basic: 'Aluminium 3-Track', standard: 'UPVC with Glass & Mesh', premium: 'UPVC with Glass & Mesh', luxury: 'Premium UPVC with Glass & Mesh' },
    ],
  },
  {
    category: 'Painting',
    features: [
        { name: 'Interior', basic: '2-coat Putty, Tractor Emulsion', standard: '2-coat Putty, Tractor Shyne', premium: '2-coat Putty, Apcolite Premium', luxury: '2-coat Putty, Royale Aspira' },
        { name: 'Exterior', basic: 'Ace Exterior Emulsion', standard: 'Ace Exterior Emulsion', premium: 'Apex Weatherproof', luxury: 'Apex Ultima Protector' },
    ],
  },
  {
    category: 'Flooring',
    features: [
        { name: 'Living & Dining', basic: 'Tiles up to ₹70/sqft', standard: 'Tiles up to ₹100/sqft', premium: 'Tiles up to ₹140/sqft', luxury: 'Italian Marble Finish Tiles' },
        { name: 'Bedrooms', basic: 'Tiles up to ₹60/sqft', standard: 'Tiles up to ₹90/sqft', premium: 'Tiles up to ₹120/sqft', luxury: 'Wooden Flooring / Premium Tiles' },
        { name: 'Staircase', basic: 'Sadarahalli Granite', standard: 'Sadarahalli Granite', premium: 'Premium Granite (up to ₹120/sqft)', luxury: 'Premium Granite (up to ₹150/sqft)' },
        { name: 'Parking', basic: 'Anti-skid tiles', standard: 'Anti-skid tiles', premium: 'Premium Anti-skid tiles', luxury: 'Designer Parking Tiles' },
    ],
  },
  {
    category: 'Electrical',
    features: [
        { name: 'Wires', basic: 'Finolex/Havells', standard: 'Finolex/Havells', premium: 'Finolex/Havells', luxury: 'Finolex/Havells' },
        { name: 'Switches', basic: 'Anchor Roma', standard: 'Anchor Roma/Legrand', premium: 'Legrand/Schneider', luxury: 'Legrand Arteor / Schneider' },
        { name: 'EV Charging Point', basic: 'Provision', standard: 'Provision', premium: 'Provision', luxury: 'Included' },
    ],
  },
];