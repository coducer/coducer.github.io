export const faqData = [
  {
    uid: "job001",
    title: "Why Should I Prefer 100 Days of MVP?",
    department: "Engineering",
    description:
      "100 Days of MVP brings extensive experience working with successful tech product startups, affirming what works to build a scalable minimum viable product. We understand that non-tech founders need a tech leader and a stellar development team that delivers results quickly. Our approach focuses on planning your sprint or roadmap to shape and validate your solution over time, similar to movie production. We start from day -30, connecting with non-tech founders, understanding their MVP goals, prioritising core market-friendly features, and crafting a vetted process tailored for their needs. With access to the right tools and experienced experts, we bring your vision into action, allowing you to focus on other crucial areas.",
  },
  {
    uid: "job002",
    title: "How can you deliver a functional MVP within 100 Days?",
    department: "Marketing",
    description:
      "With our extensive experience in product development, we understand the essential requirements for shaping a successful minimum viable product. Leveraging our repository of reusable and customizable modules, we efficiently build MVPs within 100 days. Our well-crafted and proven process, combined with our expertise and dedicated team, empowers non-tech founders to confidently bring their products to market faster than ever before",
    },
  {
    uid: "job003",
    title: "What Technologies and Tools do you use?",
    department: "Sales",
    description:"We use JavaScript / Typescript / Python House as and when required. Our prime objective is to deliver an outstanding product using the right technology at the right place. We never believe in rebuilding everything from scratch, and we used a combination of open-source libraries/product and SaaS products. We follow a reactive, Don't Repeat Yourself (DRY) Policy.",
   },
  {
    uid: "job004",
    title: "Why do you prefer Open Source over Proprietary Technologies",
    department: "Engineering",
    description:"Open Source gives us the freedom to customise the tool based on individual requirements and thereby ensure that each product is unique. We do use Proprietary Tools when the product demands it. The fundamental idea is to provide first-class products that win the hearts of the users and add value to their lives.",
  },
  {
    uid: "job005",
    title: "Does the Technology vary when the Product is ready to Scale?",
    department: "Marketing",
    description:"Not necessarily. It depends on the architecture and scope of the problem statement to ascertain the change in technology. We, at 100 days of MVP, prefer to use microservice over monolithic architecture. It gives us room to build or replace the respective service on need.",
  },
  {
    uid: "job006",
    title: "Do you Assist in Marketing the Launched Product?",
    department: "Sales",
    description:"We, at 100 days of MVP, help build features in the product that help you go-to-market quickly. At this point, we do not provide actual marketing. We have great recommendations though and are always ready to help you connect with our partner networks or community.",
  },
  {
    uid: "job007",
    title: "Do you provide Maintenance and Additional Support after Launch?",
    department: "Sales",
    description:"Absolutely! We have a dedicated team to cater to the post launch support and we offer maintenance support as well.",
  },

  {
    uid: "job008",
    title: "Can I pay you in Equity? ",
    department: "Sales",
    description:"Well, it's a Yes and a No. We prefer to work with a team for one or two iterations before we engage with them on a cash + equity model.",
  },
  {
    uid: "job006",
    title: "Do you Assist in Marketing the Launched Product?",
    department: "Sales",
    description:"We, at 100 days of MVP, help build features in the product that help you go-to-market quickly. At this point, we do not provide actual marketing. We have great recommendations though and are always ready to help you connect with our partner networks or community.",
  },
];


export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type FAQData = ElementType<typeof faqData>;
