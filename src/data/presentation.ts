type Social = {
    label: string;
    link: string;
    image: string;
}

type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    profile?: string;
}

const presentation: Presentation = {
    mail: "mahdiharish12@gmail.com",
    title: "Hello, welcome to my portfolio website! I am Mahdi Harish!",
    description: "I am an aspiring software engineering student who recently joins to learn about web and software development. My current goal is to become fullstack developer, although I am currently leaning towards backend development. I have learned using React, Next.js, and NestJS for development, and currently learning PHP and Go. Also Astro is interesting so far so I am thinking on using this with my personal website, which is this one.",
    socials: [
        {
            label: "GitHub",
            link: "https://github.com/mahdiharish",
            image: "https://img.icons8.com/color/96/github--v1.png"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/mahdiharish12/",
            image: "https://img.icons8.com/color/96/linkedin.png"
        },
        {
            label: "CV",
            link: "/src/assets/cv_mahdi.pdf",
            image: "https://img.icons8.com/office/96/parse-from-clipboard.png"
        }
    ],
};

export default presentation;