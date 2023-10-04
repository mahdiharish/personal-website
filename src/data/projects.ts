export type Project = {
    title: string;
    description: string;
    techs: string[];
    link: string;
}

const project: Project[] = [
    {
        title: "Curagan",
        description: "Mobile-based web app for people to make appointment with doctor for online consultation.",
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
        techs: [
            "Next.js",
            "TailwindCSS",
            "Railway"
        ],
        link: "https://github.com/mahdiharish/MARKILANG"
    },
    {
        title: "Kanban Web App",
        description: "Comprehensive task manager and to-do app website using Kanban methodology.",
        techs: [
            "Next.js",
            "TailwindCSS",
            "Supabase"
        ],
        link: "https://github.com/mahdiharish/Kanban-Web-App"
    },
];

export default project;