// import PageContainer from "../../layout/PageContainer.jsx";
// import SectionHeading from "../../ui/SectionHeading.jsx";

// import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

// const technologyGroups = [
//   {
//     title: "AI & Automation",
//     technologies: [
//       "OpenAI APIs",
//       "LangChain",
//       "Python ML Libraries",
//       "Workflow Automation",
//     ],
//   },
//   {
//     title: "Frontend",
//     technologies: [
//       "React.js",
//       "Next.js",
//       "HTML5 / CSS3",
//       "Tailwind CSS",
//       "TypeScript",
//     ],
//   },
//   {
//     title: "Backend",
//     technologies: [
//       "Node.js",
//       "Express.js",
//       "Python",
//       "Django",
//       "Flask",
//       "REST",
//       "GraphQL",
//     ],
//   },
//   {
//     title: "Mobile",
//     technologies: ["React Native", "Expo", "iOS", "Android"],
//   },
//   {
//     title: "Databases",
//     technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
//   },
//   {
//     title: "Cloud & DevOps",
//     technologies: ["AWS", "DigitalOcean", "Vercel", "Docker", "GitHub Actions"],
//   },
//   {
//     title: "Integrations",
//     technologies: [
//       "Razorpay",
//       "Stripe",
//       "Twilio",
//       "SendGrid",
//       "Google Maps",
//       "Firebase Cloud Messaging",
//     ],
//   },
// ];

// function TechnologyGroupCard({ group }) {
//   return (
//     <article className="tech-stack-card">
//       <h3 className="tech-stack-card-title">{group.title}</h3>

//       <ul className="tech-stack-list">
//         {group.technologies.map((technology) => (
//           <li className="tech-stack-chip" key={technology}>
//             {technology}
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// }

// function TechnologyStack() {
//   const headingRef = useScrollReveal();
//   const gridRef = useScrollReveal();

//   return (
//     <section className="section technology-stack">
//       <PageContainer>
//         <div ref={headingRef} className="reveal">
//           <SectionHeading
//             title="Technology"
//             description="A stack chosen for the problem, not the trend."
//             align="center"
//           />
//         </div>

//         <div ref={gridRef} className="tech-stack-grid reveal">
//           {technologyGroups.map((group) => (
//             <TechnologyGroupCard key={group.title} group={group} />
//           ))}
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

// export default TechnologyStack;
