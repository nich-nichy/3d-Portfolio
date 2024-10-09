import { aroopa, guvi } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    postgres,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Aroopa Technologies Pvt. Ltd.",
        icon: aroopa,
        iconBg: "#fff",
        date: "February 2023 - August 2023",
        months: "7 months",
        points: [
            "Learned web development fundamentals and gained practical experience in building web applications.",
            "Learned Microsoft power BI and created interactive dashboard's.",
            "From the second month onwards, I entered on a project called Aroopa Apps, where I was responsible for authenticating third-party service integration like Amazon, Google, Microsoft etc.",
        ],
    },
    {
        title: "MERN Developer - Trainee",
        company_name: "Aroopa Technologies Pvt. Ltd.",
        icon: aroopa,
        iconBg: "#fff",
        date: "September 2023 - May 2024",
        months: "9 months",
        points: [
            "Developed and maintained web applications using React JS, React Redux, Node JS, and Express JS.",
            "I worked on a module called Integration, where I created a system that authenticates more than 15 OAuth 2.0 integrations, such as Google, Microsoft, Amazon etc.",
            "Leveraged Amazon AWS Secret Vault and Scheduler to securely manage user tokens and automate the refresh process.",
            "I also developed microservices (RESTful API using Node.js and Express.js) that integrated third-party services into the Product, such as Google Spreadsheets, Microsoft Teams, and Zoho CRM.",
            "Participated in guiding and providing constructive feedback on OAuth 2.0 and microservices to other developers in our product based project.",
            "Developed a reusable node that allows users to easily add Google Sheets functionality by drag and drop to any node in the Flow workflow module.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Collaborated with team members on Azure DevOps to ensure smooth code integration, push, pull, and commit operations.",
            "Volunteerly involved in creating videos for OAuth 2.0 scope access for clover and google."
        ],
    },
    {
        title: "Upskilling - Full stack web development",
        company_name: "Guvi",
        icon: guvi,
        iconBg: "#fff",
        date: "July 2024 - September 2024",
        points: [
            "Learned more topics in web development",
            "Learning DSA using Python and solved some problems in Codekata and Leetcode.",
            "Learned more about Prompt Engineering and creating some AI projects.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nich-nichy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohamed-nishath-m-049516191/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ORS',
        description: 'An Online Vehicle Rental System, created as a task provided by Guvi',
        link: '',
        gitLink: ''
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Nizzie',
        description: 'An automation builder that sends messages to discord',
        link: '',
        gitLink: ''
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'OAuth Authenticator',
        description: 'An package that authenticates third-party services, this project is still in progress',
        link: '',
        gitLink: ''
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Chatbot',
        description: 'An AI agent set appointments, this project is still in progress',
        link: '',
        gitLink: ''
    },
];