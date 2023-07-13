export const faqData = [
  {
    uid: "job001",
    title: "Why Should I Prefer 100 Days of MVP?",
    department: "General Questions",
    description:"100 Days of MVP brings extensive experience working with successful tech product startups, affirming what works to build a scalable minimum viable product. We understand that non-tech founders need a tech leader and a stellar development team that delivers results quickly. Our approach focuses on planning your sprint or roadmap to shape and validate your solution over time, similar to movie production. We start from day -30, connecting with non-tech founders, understanding their MVP goals, prioritising core market-friendly features, and crafting a vetted process tailored for their needs. With access to the right tools and experienced experts, we bring your vision into action, allowing you to focus on other crucial areas.",
    // location: "San Francisco, CA",
    // type: "Full-Time",
  },
  {
    uid: "job002",
    title: "Do I get access to the Code of my MVP?",
    department: "General Questions",
    description:"Absolutely! You do get to access your final version of MVP Code once all the milestones are completed and the final payment is made. We also offer post live support for the next 30 days to fix bugs from the date of source code delivery.",
  },
  {
    uid: "job003",
    title: "How can you deliver a functional MVP within 100 Days?",
    department: "General Questions",
    description:"With our extensive experience in product development, we understand the essential requirements for shaping a successful minimum viable product. Leveraging our repository of reusable and customizable modules, we efficiently build MVPs within 100 days. Our well-crafted and proven process, combined with our expertise and dedicated team, empowers non-tech founders to confidently bring their products to market faster than ever before.",
  },
  {
    uid: "job004",
    title: "What Technologies and Tools do you use?",
    department: "Tech",
    description:"We use JavaScript / TypeScript / Python as and when required. Our prime objective is to deliver an outstanding product using the right technology at the right place. We never believe in rebuilding everything from scratch, and we used a combination of open-source libraries/product and SaaS products. We follow a reactive, Don't Repeat Yourself (DRY) Policy.",  
  },
  {
    uid: "job005",
    title: "Why do you prefer Open Source over Proprietary Technologies",
    department: "Tech",
    description:"Open Source gives us the freedom to customise the tool based on individual requirements and thereby ensure that each product is unique. We do use Proprietary Tools when the product demands it. The fundamental idea is to provide first-class products that win the hearts of the users and add value to their lives.",
  },
  {
    uid: "job006",
    title: "Does the Technology vary when the Product is ready to Scale?",
    department: "Tech",
    description:"Not necessarily. It depends on the architecture and scope of the problem statement to ascertain the change in technology. We, at 100 days of MVP, prefer to use microservice over monolithic architecture. It gives us room to build or replace the respective service when needed.",
  },
  {
    uid: "job007",
    title: "Do you Assist in Marketing the Launched Product?",
    department: "Additional Services",
    description:"We, at 100 days of MVP, help build features in the product that help you go-to-market quickly. At this point, we do not provide actual marketing. We have great recommendations though and are always ready to help you connect with our partner networks or community.",
  },
  {
    uid: "job008",
    title: "Do you provide Maintenance and Additional Support after Launch?",
    department: "Additional Services",
    description:"Absolutely! We have a dedicated team to cater to post launch support and we offer maintenance support as well. Bug Fixes for the duration of 30 calendar days from the date of source code delivery can also be availed when needed.",
  },
  {
    uid: "job009",
    title: "What Industries have you worked with? ",
    department: "Credibility and Success",
    description:"We have worked with diverse industries like AdTech, HealthCare, Fintech, Government Services, Social Welfare, HR Tech to name a few. We call ourselves Industry Agnostic and are open to work with all and sundry."
  },
  {
    uid: "job010",
    title: "How many of your team members work on my project?",
    department: "Credibility and Success",
    description:"Well that depends on the Scope of your Project. To ensure that you get your functional MVP within 100 Days, we are always willing to employ the optimal number of people that your project demands."
  },
  {
    uid: "job011",
    title: "Who are your ideal customers?",
    department: "Credibility and Success",
    description:"We are open to work with companies of any category as long as we are providing them product development aid and be their tech arm. However, we have special affinity towards Non-tech SaaS Founders with solid product and business expertise."  },
  {
    uid: "job012",
    title: "How much is this going to cost me?",
    department: "Pricing",
    description:"The cost would depend on the type of projects we work with. Our services generally start from 25,000 USD."
  },
  {
    uid: "job013",
    title: "How do I begin working with Team 100 Days of MVP?",
    department: "Onboarding",
    description:"Great Choice Mate! First, get in touch with us by filling out the contact form. Our team will connect with you. Followed by subsequent calls, we will define the scope of the project and the services we can offer you. Finally, we will provide a cost estimate, our work process and arrange kickoff calls with both teams involved. Once the paperwork is complete, we begin right away and in 100 days your MVP will be alive and thriving!."
  },
];


export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type FAQData = ElementType<typeof faqData>;
