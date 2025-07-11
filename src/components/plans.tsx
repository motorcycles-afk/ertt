import React from 'react';
import { Server, Zap, Crown } from 'lucide-react';

export const locations = [
  { id: 'germany', name: 'Germany' },
  { id: 'finland', name: 'Finland' },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'usa-central', name: 'USA (Central)' },
  { id: 'japan', name: 'Japan' },
  { id: 'singapore', name: 'Singapore' },
];

export const vpsPlans = [
    {
    name: "V10 SSD",
    price: "€5.95",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "3 Cores (3.2 GHz)",
      "8 GB DDR4 RAM",
      "150 GB SSD",
      "200 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V10 NVMe",
    price: "€5.95",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "3 Cores (3.2 GHz)",
      "8 GB DDR4 RAM",
      "75 GB NVMe",
      "200 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V20 SSD",
    price: "€9.65",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "6 Cores (3.2 GHz)",
      "12 GB DDR4 RAM",
      "200 GB SSD",
      "300 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: true,
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "V20 NVMe",
    price: "€9.65",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "6 Cores (3.2 GHz)",
      "12 GB DDR4 RAM",
      "100 GB NVMe",
      "300 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V30 SSD",
    price: "€17.9",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "8 Cores (3.2 GHz)",
      "24 GB DDR4 RAM",
      "400 GB SSD",
      "600 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V30 NVMe",
    price: "€17.9",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "8 Cores (3.2 GHz)",
      "24 GB DDR4 RAM",
      "200 GB NVMe",
      "600 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V40 SSD",
    price: "€31",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "12 Cores (3.2 GHz)",
      "48 GB DDR4 RAM",
      "500 GB SSD",
      "800 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V40 NVMe",
    price: "€31",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "12 Cores (3.2 GHz)",
      "48 GB DDR4 RAM",
      "250 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "V50 SSD",
    price: "€46",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "16 Cores (3.2 GHz)",
      "64 GB DDR4 RAM",
      "600 GB SSD",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "V50 NVMe",
    price: "€46",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "16 Cores (3.2 GHz)",
      "64 GB DDR4 RAM",
      "300 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "V60 SSD",
    price: "€65",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "18 Cores (3.2 GHz)",
      "96 GB DDR4 RAM",
      "700 GB SSD",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "V60 NVMe",
    price: "€65",
    period: "month",
    description: "AMD Epyc 7282",
    features: [
      "18 Cores (3.2 GHz)",
      "96 GB DDR4 RAM",
      "350 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
];

export const vdsPlans = [
  {
    name: "EX101",
    price: "€109.99",
    period: "month",
    description: "Intel Core i9-13900",
    features: [
      "24 Cores (5.6GHz)",
      "64 GB DDR5 RAM",
      "2 x 2000 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "EX44",
    price: "€56.99",
    period: "month",
    description: "Intel Core i5-13500",
    features: [
      "14 Cores (4.8GHz)",
      "64 GB DDR4 RAM",
      "2 x 512 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "AX52",
    price: "€76.99",
    period: "month",
    description: "AMD Ryzen 7 7700",
    features: [
      "8 Cores (5.3GHz)",
      "64 GB DDR5 RAM",
      "2 x 1000 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "AX162-R",
    price: "€250.9",
    period: "month",
    description: "AMD EPYC 9454P",
    features: [
      "48 Cores (3.8GHz)",
      "256 GB DDR5 RAM",
      "2 x 1920 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "AX162-S",
    price: "€250.9",
    period: "month",
    description: "AMD EPYC 9454P",
    features: [
      "48 Cores (3.8GHz)",
      "128 GB DDR5 RAM",
      "2 x 3840 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "AX102",
    price: "€128.99",
    period: "month",
    description: "AMD Ryzen 9 7950X",
    features: [
      "16 Cores (5.7GHz)",
      "128 GB DDR5 RAM",
      "2 x 2000 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "GEX130 (GPU)",
    price: "€964",
    period: "month",
    description: "Xeon Gold 5412U",
    features: [
      "24 Cores (4.8GHz)",
      "128 GB DDR5 RAM",
      "2 x 1920 GB NVMe",
      "1000 Mbps Channel",
      "NVIDIA RTX 4000 SFF Ada",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "GEX44 (GPU)",
    price: "€225.9",
    period: "month",
    description: "Intel Core i5-13500",
    features: [
      "14 Cores (4.8GHz)",
      "64 GB DDR4 RAM",
      "2 x 1920 GB NVMe",
      "1000 Mbps Channel",
      "NVIDIA RTX 2000 Ada",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "EX130-R",
    price: "€167.8",
    period: "month",
    description: "Intel Gold 5412U",
    features: [
      "24 Cores (3.9GHz)",
      "256 GB DDR5 RAM",
      "2 x 1920 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "EX130-S",
    price: "€167.8",
    period: "month",
    description: "Intel Gold 5412U",
    features: [
      "24 Cores (3.9GHz)",
      "128 GB DDR5 RAM",
      "2 x 3840 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Crown className="w-5 h-5" />
  },
  {
    name: "AX42",
    price: "€59.9",
    period: "month",
    description: "Ryzen 7 PRO 8700GE",
    features: [
      "8 Cores (5.1GHz)",
      "64 GB DDR5 RAM",
      "2 x 512 GB NVMe",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: true,
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "SX65",
    price: "€130",
    period: "month",
    description: "AMD Ryzen 7 3700X",
    features: [
      "8 Cores (4.4GHz)",
      "64 GB DDR4 RAM",
      "4 x 22000 GB HDD + SSD",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "SX135",
    price: "€249",
    period: "month",
    description: "AMD Ryzen 9 3900",
    features: [
      "12 Cores (4.6GHz)",
      "128 GB DDR4 RAM",
      "8 x 22000 GB HDD + SSD",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "SX295",
    price: "€482",
    period: "month",
    description: "AMD EPYC 7502P",
    features: [
      "32 Cores (3.35GHz)",
      "256 GB DDR4 RAM",
      "14 x 22000 GB HDD + SSD",
      "1000 Mbps Channel",
      "Anti-DDoS Standard",
    ],
    cta: "Order",
    href: "https://discord.gg/2YM3eYuZ5m",
    popular: false,
    icon: <Server className="w-5 h-5" />
  },
];