interface ambassadors {
    title: string;
    description: string;
    rewards?: string[];
}

export const ambassadors: ambassadors[] = [
    {
        title: "Developers",
        description: "Develop applications and products for Codespacers, provide feedback on the Codespace community's developer roadmap, and collaborate with the Codespace development team on product development.",
        rewards: [
            "Exclusive swag.",
            "Mentorship sessions with Codespace technical teams and leadership.",
            "Seasonal Codespace Ambassador retreats."
        ]
    },
    {
        title: "Advocates",
        description: "Create intermediate to advanced technical content for the Codespace community, judge hackathons, and host events and meetups for Codespace.",
        rewards: [
            "Exclusive swag.",
            "Mentorship sessions with the Codespace DevRel and Community teams.",
            "Featured stories on social channels.",
            "Seasonal Codespace Ambassador retreats."
        ]
    },
    {
        title: "Pioneers",
        description: "Moderate Codespace community platforms, moderate virtual events and meetups (e.g., Google Meet, Twitter Spaces), and help increase engagement on Codespace and partner social media.",
        rewards: [
            "Standard swag.",
            "Periodic learning sessions with Codespace advocates and team members.",
            "Shoutouts on Codespace social media.",
        ]
    },
]

export const requirements = [
    "A Strong passion for tech",
    "Member of the Codespace community",
    "Great communication and presentation skills",
    "Experience as a Developer is a requirement for Developer role",
    "Experience as a Developer Relations/Advocate is a requirement for Advocate role",
    "Experience as a Community Manager/Moderator is a requirement for Pioneer role",
    "Ability to learn a new skill quickly"
]