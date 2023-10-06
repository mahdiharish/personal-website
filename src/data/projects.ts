export type Project = {
    title: string;
    description: string;
    role: string;
    techs: string[];
    link: string;
}

const project: Project[] = [
    {
        title: "Curagan",
        description: "Mobile-based web app for people to make appointment with doctor for online consultation.",
        role: "Lead project and back-end developer",
        techs: [
            "Next.js",
            "TailwindCSS",
            "NestJs",
            "AWS"
        ],
        link: "https://github.com/curagan"
    },
    {
        title: "MARKILANG",
        description: "Auction and bidding website for hobby items.",
        role: "Back-end and database developer",
        techs: [
            "Next.js App Router (Full Stack Development)",
            "TailwindCSS",
            "Railway"
        ],
        link: "https://github.com/mahdiharish/MARKILANG"
    },
    {
        title: "Kanban Web App",
        description: "Comprehensive task manager and to-do app website using Kanban methodology.",
        role: "Front-end developer",
        techs: [
            "Next.js",
            "TailwindCSS",
            "Supabase"
        ],
        link: "https://github.com/mahdiharish/Kanban-Web-App"
    },
];

export default project;