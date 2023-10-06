type Skill = {
    tech: string;
    level: string;
    type: string;
    image: string;
}

const skill: Skill[] = [
    {
        tech: "JavaScript",
        level: "Intermediate",
        type: "lang",
        image: "./src/assets/javascript.png"
    },
    {
        tech: "TypeScript",
        level: "Intermediate",
        type: "lang",
        image: "./src/assets/typescript.png"
    },
    {
        tech: "React.js",
        level: "Intermediate",
        type: "frontend",
        image: "./src/assets/react.png"
    },
    {
        tech: "Next.js",
        level: "Intermediate",
        type: "frontend",
        image: "./src/assets/nextjs.png"
    },
    {
        tech: "NestJS",
        level: "Intermediate",
        type: "backend",
        image: "./src/assets/nestjs.png"
    },
    {
        tech: "Node.js",
        level: "Beginner",
        type: "backend",
        image: "./src/assets/nodejs.png"
    },
    {
        tech: "Astro",
        level: "Beginner",
        type: "frontend",
        image: "./src/assets/astro.png"
    },
    {
        tech: "Prisma",
        level: "Intermediate",
        type: "backend",
        image: "./src/assets/prisma.png"
    },
    {
        tech: "PostgreSQL",
        level: "Intermediate",
        type: "backend",
        image: "./src/assets/postgresql.png"
    },
    {
        tech: "PHP",
        level: "Beginner",
        type: "lang",
        image: "./src/assets/php.png"
    },
        {
        tech: "Golang",
        level: "Beginner",
        type: "lang",
        image: "./src/assets/golang.png"
    },
]

export default skill;