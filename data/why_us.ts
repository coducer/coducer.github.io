import { BsCloud, BsCodeSlash, BsServer } from "react-icons/bs";
import { FaCodeBranch, FaCubes, FaHtml5 } from "react-icons/fa";

export const whyUsData = [
  {
    name: "Time",
    // description: 'Pre build libraries and SDKs to extend, customize and secure your backend.',
    description:
      "Consume the API from any client (Express.js, Nest.js, Django) or even IoT devices, using REST or SDKs.",
    icon: FaCodeBranch,
  },
  {
    name: "Ideology",
    description:
      "Use our frontend library and helper functions to complete your customer journey with libraries (React.js, Vue.js, Angular.js).",
    icon: FaHtml5,
  },
  {
    name: "Process",
    description:
      "We run containers in a fully managed runtime environment, we handle everything critical for production.", // — (configuration, orchestration, load balancing, failovers, logging, security, and more..)",
    icon: BsServer,
  },
  {
    name: "Scale",
    description:
      "Extend the capabilities of superapp with our Cloud, our fully managed platform or deploy on-premises.",
    icon: BsCloud,
  },
  {
    name: "Support",
    description:
      "We use and contribute actively opensource tools tools which helps us to build better products.", // Most of our libraries are available on GitHub and maintained by hundreds of contributors.",
    icon: BsCodeSlash,
  },
  {
    name: "Opensource",
    description:
      "We use and contribute actively opensource tools tools which helps us to build better products.", // Most of our libraries are available on GitHub and maintained by hundreds of contributors.",
    icon: BsCodeSlash,
  }
];
