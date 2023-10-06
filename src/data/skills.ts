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
        image: "https://img.icons8.com/color/96/javascript--v1.png"
    },
    {
        tech: "TypeScript",
        level: "Intermediate",
        type: "lang",
        image: "https://img.icons8.com/color/96/typescript.png"
    },
    {
        tech: "React.js",
        level: "Intermediate",
        type: "frontend",
        image: "https://img.icons8.com/officel/96/react.png"
    },
    {
        tech: "Next.js",
        level: "Intermediate",
        type: "frontend",
        image: "https://img.icons8.com/color/96/nextjs.png"
    },
    {
        tech: "NestJS",
        level: "Intermediate",
        type: "backend",
        image: "https://img.icons8.com/color/96/nestjs.png"
    },
    {
        tech: "Node.js",
        level: "Beginner",
        type: "backend",
        image: "https://img.icons8.com/fluency/48/node-js.png"
    },
    {
        tech: "Astro",
        level: "Beginner",
        type: "frontend",
        image: "https://api.iconify.design/devicon/astro.svg?width=96"
    },
    {
        tech: "Prisma",
        level: "Intermediate",
        type: "backend",
        image: "https://img.icons8.com/color/96/prisma-orm.png"
    },
    {
        tech: "PostgreSQL",
        level: "Intermediate",
        type: "backend",
        image: "https://img.icons8.com/color/96/postgreesql.png"
    },
    {
        tech: "PHP",
        level: "Beginner",
        type: "lang",
        image: "https://img.icons8.com/officel/96/php-logo.png"
    },
        {
        tech: "Golang",
        level: "Beginner",
        type: "lang",
        image: "https://img.icons8.com/color/96/golang.png"
    },
]

export default skill;