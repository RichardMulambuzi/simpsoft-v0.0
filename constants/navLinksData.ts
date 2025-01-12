import { IconType } from "react-icons";
import { FaHome, FaInfoCircle, FaLaptopCode, FaEnvelope, FaFolderOpen } from "react-icons/fa";

// Interface for navigation links
interface NavLink {
    text: string;       // Display text for the link
    href?: string;      // URL path for the link (optional)
    icon: IconType;     // Icon representing the link
}

// Navigation links data
export const navLinksData: NavLink[] = [
    { text: "Home", href: "/", icon: FaHome }, // Home page
    { text: "Services", href: "/services", icon: FaLaptopCode }, // Services offered by Simsoft Tech
    { text: "Portfolio", href: "/portfolio", icon: FaFolderOpen }, // Showcase of past projects
    { text: "About Us", href: "/home/pages/about", icon: FaInfoCircle }, // Company information
    { text: "Contact Us", href: "/home/pages/contact-us", icon: FaEnvelope }, // Contact details and form
];
