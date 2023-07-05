import { INav } from "@/interfaces/INav";
import { BsBookmarks, BsChatDots, BsHeart } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import {
  FiGrid
} from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

export const headerData: INav[] = [
  {
    title: "Product",
    href: "/products",
    children: []
  },
  {
    title: "Pricing",
    href: "/pricing",
    children: [],
  },
  {
    title: "Resources",
    children: [
      {
        title: "Learn",
        description:
          "Learn about our products, features, and how to get started.",
        href: "#",
        icon: IoSchoolOutline,
        children: [],
      },
      {
        title: "Blog",
        description: "Blog posts, articles, and more.",
        href: "#",
        icon: BsBookmarks,
        children: [],
      },
      {
        title: "Tutorials",
        description: "Tutorial videos and guides.",
        href: "#",
        icon: FaLaptopCode,
        children: [],
      },
      {
        title: "Integrations",
        description:
          "Integrate with third-party services like Stripe, Twilio, and more.",
        href: "#",
        icon: FiGrid,
        children: [],
      },
      {
        title: "Customers",
        description: "Customer stories and testimonials.",
        href: "#",
        icon: BsHeart,
        children: [],
      },
      {
        title: "Discussion",
        description:
          "Interact with other users and our team in our community discussion forums.",
        href: "#",
        icon: BsChatDots,
        children: [],
      },
    ],
  },
  {
    title: "Support",
    href: "/support",
    children: [],
  },
];