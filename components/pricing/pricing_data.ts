import { BsCloud, BsServer, BsStars } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export const features = [
  {
    name: "100+ Components",
    description:
      "100+ components and helper functions with source code to help you develop your project faster.",
    icon: BsStars,
  },
  {
    name: "Production Ready",
    description:
      "Effortlessly create your next production-ready experience with superapp libraries & components.",
    icon: IoRocketSharp,
  },
  {
    name: "self-hosted or Cloud",
    description:
      "Deploy your application on our fully managed platform, cloud or on-premises.",
    icon: BsCloud,
  },
];

export const product = {
  name: "Lifetime",
  price: "1000",
  description: "All in one bundle",
  features: [
    "100+ Components",
    "Unlimited projects",
    "Lifetime access",
    "Customer support",
    "Free updates",
    "Community access",
  ],
};

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Feature = ElementType<typeof features>;
