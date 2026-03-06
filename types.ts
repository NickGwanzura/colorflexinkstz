import React from 'react';
import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Flexographic' | 'Gravure' | 'Screen' | 'Coating';
  type: 'Water-based' | 'Solvent-based';
  description: string;
  features: string[];
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Industry {
  name: string;
  description: string;
  image: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: React.ReactNode;
  image: string;
  author: string;
}