import type { LucideIcon } from "lucide-react";
import { Building, Dumbbell, BedDouble, Hotel, Code2, Globe, ShoppingCart, AppWindow, RefreshCw, LayoutDashboard } from "lucide-react";

export type Offer = { id: string; title: string; icon: LucideIcon; intro: string; points: string[] };

/** SaaS management portals. Edit the wording/features here to match exactly what you offer. */
export const PORTALS: Offer[] = [
  {
    id: "property-management",
    title: "Residential & Property Management",
    icon: Building,
    intro: "One portal to run apartments, buildings and rental properties.",
    points: ["Units, tenants and owners", "Rent and payment tracking", "Maintenance requests", "Reports and records"],
  },
  {
    id: "gym-management",
    title: "Gym Management",
    icon: Dumbbell,
    intro: "Run memberships and daily gym operations from a single dashboard.",
    points: ["Member profiles and plans", "Attendance tracking", "Fee and renewal reminders", "Trainer and class schedules"],
  },
  {
    id: "hostel-management",
    title: "Hostel Management",
    icon: BedDouble,
    intro: "Keep rooms, residents and payments organized.",
    points: ["Room and bed allocation", "Resident records", "Fee management", "Visitor and check-in logs"],
  },
  {
    id: "hotel-management",
    title: "Hotel Management",
    icon: Hotel,
    intro: "Manage bookings and guest operations without spreadsheets.",
    points: ["Room inventory and bookings", "Check-in and check-out", "Housekeeping status", "Billing and invoices"],
  },
];

export const WEBDEV: Offer[] = [
  { id: "business-websites", title: "Business Websites", icon: Globe, intro: "Fast, clean websites that present your business clearly.", points: ["Responsive design", "SEO-ready structure", "Contact and enquiry forms"] },
  { id: "ecommerce-websites", title: "E-commerce Websites", icon: ShoppingCart, intro: "Online stores built to sell.", points: ["Product and checkout pages", "Payment-ready setup", "Mobile-first layout"] },
  { id: "web-apps", title: "Custom Web Applications", icon: AppWindow, intro: "Dashboards, portals and tools built around your workflow.", points: ["Admin dashboards", "User accounts and roles", "Custom features"] },
  { id: "landing-pages", title: "Landing Pages", icon: LayoutDashboard, intro: "Focused pages for campaigns and product launches.", points: ["Conversion-focused layout", "Quick turnaround", "Analytics-ready"] },
  { id: "redesign", title: "Redesign & Maintenance", icon: RefreshCw, intro: "Refresh an outdated site and keep it running smoothly.", points: ["Modern redesign", "Speed improvements", "Ongoing updates"] },
];

export const WEBDEV_ICON = Code2;
