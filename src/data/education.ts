type Education = {
    title: string;
    institution: string;
    educationTime: string;
    description: string;
}

const education: Education[] = [
    {
        title: "Full Stack Software Engineering",
        institution: "RevoU",
        educationTime: "January 2023 - August 2023",
        description: "Finished 27 weeks of intensive bootcamp related to web and software development, with tech stacks such as JavaScript, TypeScript, React.js, Next.js, NestJS, Docker, etc."
    },
    {
        title: "Bachelor of Food Technology",
        institution: "Brawijaya University",
        educationTime: "August 2014 - August 2018",
        description: "Graduated with GPA of 3.18."
    }
]

export default education;