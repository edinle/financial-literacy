const projectOverview = [
    {
        name: "Financial Literacy",
        img: "/hex-class/00ff00/financial.png",
        description: "Lorem ipsum dolor sit amet",
        bgColor: "#A5CFB9",
        bgTexture: "/hex-class/00ff00/texture1.png",
        link: "00ff00/financial-literacy"
    },
    {
        name: "Sustainability Practices",
        img: "/hex-class/00ff00/sustainable.png",      
        description: "Lorem ipsum dolor sit amet",
        bgColor: "#ACD2E3",
        bgTexture: "/hex-class/00ff00/texture2.png",
        link: "00ff00/sustainability-practices"
    },
    {
        name: "Nature/ Environmental Activism",
        img: "/hex-class/00ff00/nature.png",
        description: "Lorem ipsum dolor sit amet",
        bgColor: "#DBEFE5",
        bgTexture: "",
        link: "00ff00/nature-environmental-activism"
    },
    {
        name: "Mental Health and Wellness",
        img: "/hex-class/00ff00/mental.png",
        description: "Lorem ipsum dolor sit amet",
        bgColor: "#CAF0DC",
        bgTexture: "",
        link: "00ff00/mental-health-wellness"
    },
]

const sustainability = {
    doing: [
        {
            color: "#2A3C30",
            description:
                "Publishing  updated news stories and articles that highlight all the different facets of conservation",
        },
        {
            color: "#32804E",
            description:
                "Spotlighting other organizations, aid, and websites  filled with helpful information and ways to act",
        },
        {
            color: "#5D7C2E",
            description:
                "Never pay walling, gatekeeping, or withholding resources from you or anyone else!",
        },
    ],
    mission: [
        {
            title: "Conservation",
            color: "#5D7C2E",
            subheading:
                "We cover biodiversity, animal, marine, and of course, human conservation efforts",
            description:
                "When it comes to conversation, many assume they need some sort of professional certification or education to get involved. But there's lots of ways the daily consumer can contribute to conservation movements. Even habits like turning off your lights when you leave the room or taking shorter showers to cut down on water use are examples of just a few small changes individuals can implement to make a big impact!",
        },
        {
            title: "Consumerism",
            color: "#DF862A",
            subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "Trash",
            color: "#6F8384",
            subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ],
};

const mentalHealth = {
    hotlines: [
        {
            number: "988",
            text: "National Suicide and Crisis Lifeline"
        },
        {
            number: "1 (866) 488 - 7386",
            text: "24/7 Trevor Project Suicide Hotline"
        },
        {
            number: "1 (800) 662-4357",
            text: "SAMSHA's National Helpline"
        },
        {
            number: "1 (800) 656-4673",
            text: "National Sexual Assault Hotline"
        }
    ],
    stats: [
        {
            stat: "39%",
            text: "of students in college experience a significant mental health issue"
        },
        {
            stat: "1/2",
            text: "mental health issues begin by age 14; 75% begin by age 24"
        },
        {
            stat: "67%",
            text: "of people 18-24 with anxiety or depression don't seek treatment"
        },
    ],
    resources: [
        {
            name: "UCLA",
            resource: {
                link: "https://counseling.ucla.edu/",
                logo: "/hex-class/00ff00/health/caps.png",
                title: "Counseling & Psychological Services (CAPS)",
                description: "Details about CAPS"
            }
        },
        {
            name: "USC",
            resource: {
                link: "https://sites.usc.edu/counselingandmentalhealth/",
                logo: "/hex-class/00ff00/health/usc.png",
                title: "USC Counseling & Mental Health Services",
                description: "Details about USC Counseling"
            }
        }
    ],
    actions: [
        {
            title: "regularly exercise",
            description: "even a 30 minute daily walk can improve your mood and health",
            image: "/hex-class/00ff00/health/sneakers.png",
            background: "#CCC96F"
        },
        {
            title: "prioritize sleep",
            description: "stick to a schedule that ensures you get enough rest",
            image: "/hex-class/00ff00/health/pillow.png",
            background: "#9A84AE"
        },
        {
            title: "stay connected",
            description: "spend time nurturing connections with friends and family",
            image: "/hex-class/00ff00/health/heart.png",
            background: "#4F7B9F"
        },
        {
            title: "eat a balanced diet ",
            description: "stay hydrated, enjoy nutritious meals regularly, and moderate your caffeine and alcohol consumption",
            image: "/hex-class/00ff00/health/food.png",
            background: "#F4B093"
        },
        {
            title: "make time for yourself",
            description: "take time to unwind with relaxing hobbies",
            image: "/hex-class/00ff00/health/knit.png",
            background: "#D26482"
        },
    ],
    symptoms : [
        {
            description: "difficulty sleeping"
        },
        {
            description: "changes in appetite"
        },
        {
            description: "difficulty concentrating"
        },
        {
            description: "inability to do usual tasks"
        },
        {
            description: "frustration and irritability"
        },
        {
            description: "loss of interest in enjoyable events"
        },
    ]
}

export { projectOverview, sustainability, mentalHealth }