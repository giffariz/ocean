const en = {
    home: {
        title1: "Discover Your Inner",
        title2: "Personality Hero",
        greeting: "Step into a journey of self-discovery through the Big 5 personality world. Meet vibrant characters and reveal which trait shapes the real you!",
    },

    characacters: {
        title1: "Meet the",
        title2: "Characters",
        openness: {
            name: "Openness",
            title: "The Dreamer",
            description:
                "People high in Openness to Experience live in a world of ideas, possibilities, and untouched beauty. They're drawn to abstract thinking, imagination, and the unconventional. Their creativity isn’t just for fantasy—it drives them to explore philosophy, art, culture, and innovation. They're naturally curious and constantly seek to broaden their perspective.\n\nAccording to IPIP and the NEO-PI-R model, Openness is closely related to artistic interest, intellectual curiosity, and tolerance for ambiguity. These individuals dislike rigid routines and prefer taking paths less traveled. They often initiate fresh ideas and bring a unique perspective to any group or organization.\n\nHowever, their rich inner world can sometimes make them seem ungrounded. They may struggle with finishing one idea before jumping to the next, and their unconventional approach can appear eccentric to others. They're idealistic, but not always practical.\n\nStill, the world needs Dreamers. Without them, there would be no art, innovation, or transformative change.",
            keyCharacteristics: ["Imaginative", "artistic", "reflective", "curious", "abstract", "flexible"],
            strength: ["Creative", "Open-minded", "Visionary", "Fast learner", "Experimental", "Full of ideas"],
            weakness: ["Easily bored", "Unfocused", "Too idealistic", "Overthinks", "Unrealistic", "Dislikes routine"],
            funfacts: [
                "Can be deeply inspired just by the color of the sunset or the smell of rain.",
                "YouTube tabs range from string theory to candle-making to Latin etymology.",
                "Wallpaper might be a surrealist painting.",
                "Writes quotes or poetry randomly in Notes app.",
                "More ideas than time to finish them.",
                "Can start a debate about life’s meaning over a juice commercial."
            ]
        },
        conscientiousness: {
            name: "Conscientiousness",
            title: "The Guardian",
            description:
                "Those high in Conscientiousness are the embodiment of discipline and responsibility. They love order, have strong self-control, and rarely miss a task or promise. In life, they're achievement-oriented—working hard and smart, with clear plans and careful evaluation.\n\nScientifically, this trait is strongly linked with academic and professional success, as well as long-term life stability. Conscientious people are often seen as role models due to their reliability and integrity. They’re the ones who update their budget spreadsheets before bed and wake up with a full agenda.\n\nHowever, they can fall into perfectionism, guilt over resting, or panic in chaotic environments. In team settings, they may be rigid or resistant to change.\n\nEven so, they’re the backbone of systems that work. Without them, vision never becomes execution.",
            keyCharacteristics: ["Disciplined", "meticulous", "responsible", "focused", "diligent", "structured"],
            strength: [
                "Dependable",
                "Goal-oriented",
                "Patient",
                "Consistent",
                "Resists temptation",
                "Great planner"
            ],
            weakness: [
                "Rigid",
                "Perfectionistic",
                "Afraid to fail",
                "Too serious",
                "Poor at improvising",
                "Risk of burnout"
            ],
            funfacts: [
                "Feels joy checking off a completed to-do list.",
                "Has personal spreadsheets for finances, time, even sleep.",
                "Rearranges closet if the colors don’t align.",
                "Always the first to arrive at a meeting.",
                "Sets multiple alarms 'just in case.'",
                "'Break time' means reviewing next week’s plans."
            ]
        },
        extraversion: {
            name: "Extraversion",
            title: "The Adventurer",
            description:
                "Extraversion reflects a high level of social drive and external energy. These individuals thrive in crowds, radiate enthusiasm, and turn silent rooms into vibrant spaces. They're spontaneous, outgoing, and often lead conversations or group dynamics.\n\nStudies show that extraverts experience more frequent positive emotions, have wider social networks, and demonstrate high confidence. They're not afraid of social risks and often seek stimulation from the outside world.\n\nBut they’re not without flaws. Extraverts can struggle with solitude, talk over others, or overlook subtle emotional cues. Impulsivity and a need for social validation can also be challenges.\n\nStill, they’re the spark in every gathering. Without them, life would feel less alive.",
            keyCharacteristics: ["Cheerful", "energetic", "confident", "social", "spontaneous", "expressive"],
            strength: [
                "Socially adaptive",
                "Expressive",
                "Positive",
                "Natural leaders",
                "Bold",
                "Great at mingling"
            ],
            weakness: [
                "Needs external validation",
                "Impulsive",
                "Avoids solitude",
                "Interrupts",
                "Lacks reflection",
                "Easily distracted"
            ],
            funfacts: [
                "Can chat with the ride-hailing driver the whole trip.",
                "Instagram stories? Updated hourly.",
                "Smiles at the camera instinctively.",
                "Can start a convo with anyone in an elevator.",
                "Always excited to be the impromptu volunteer.",
                "Sends memes when group chats go quiet."
            ]
        },
        agreeableness: {
            name: "Agreeableness",
            title: "The Peacemaker",
            description:
                "This trait reflects warmth, compassion, and empathy. High-agreeableness individuals are gentle, conflict-averse, and often put others first. In social situations, they prefer to be the bridge—not the barrier.\n\nIPIP research shows agreeableness is linked to prosocial behavior such as giving, helping, and deep listening. They’re ideal teammates, mediators, and emotional anchors in personal relationships.\n\nBut their kindness can cost them. They may over-accommodate, fear hurting others, or struggle to enforce personal boundaries. Without self-awareness, they risk being taken advantage of.\n\nEven so, they balance the world. They make others feel heard, accepted, and safe.",
            keyCharacteristics: ["Kind", "understanding", "patient", "tolerant", "supportive", "soft-spoken"],
            strength: ["Empathetic", "Forgiving", "Conflict-averse", "Helpful", "Trustworthy", "Loyal"],
            weakness: ["Over-accommodating", "Can't say 'no'", "Easily used", "Lacks assertiveness", "Approval-seeking", "Hesitant to speak up"],
            funfacts: [
                "Says 'it’s okay' even when it’s not.",
                "First to react with a heart emoji.",
                "Checks if everyone’s eaten—always.",
                "Helps others move on even if they haven’t.",
                "More stressed by others’ anger than their own.",
                "Can hug you emotionally through words."
            ]
        },
        neuroticism: {
            name: "Neuroticism",
            title: "The Watcher",
            description:
                "Neuroticism represents emotional sensitivity and depth. Those high in this trait feel things intensely—whether it’s anxiety, sadness, guilt, or fear. They tend to overthink, but also reflect deeply and feel the world in ways others may not understand.\n\nAccording to IPIP, this trait is tied to emotional vulnerability, stress sensitivity, and introspection. While they may experience more internal struggle, they also have heightened empathy and intuition.\n\nUnmanaged, this emotional richness can become overwhelming. They may dwell on small worries, question every move, or spiral into rumination. But with awareness, this emotional depth becomes a well of understanding, creativity, and care.\n\nThey are not weak—they’re profound. Their emotional world is a canvas of nuance and meaning.",
            keyCharacteristics: ["Sensitive", "introspective", "anxious", "easily stressed", "emotional", "overthinker"],
            strength: [
                "Deep empathy",
                "Self-aware",
                "Emotionally expressive",
                "Intuitive",
                "Perceptive",
                "Emotionally intelligent"
            ],
            weakness: [
                "Overwhelmed easily",
                "Mood swings",
                "Self-critical",
                "Needs reassurance",
                "Indecisive",
                "Slow to move on"
            ],
            funfacts: [
                "Types long texts, deletes them, rewrites again.",
                "Sad songs = comfort, not sadness.",
                "Remembers painful words... from five years ago.",
                "Replays social interactions in their head.",
                "Can cry over a film—even if the character's a robot.",
                "Lays in bed thinking: 'Did I talk too much today?'"
            ]
        },
    },

    test: {
        title1: "Begin the Test",
        title2: "Reveal Your Trait",
        description: "Understand your personality through a fun yet scientific Big 5 test. Find out what makes your mind and soul unique. For a swift overview, try the Quick Test with 40 questions. Want deeper, more accurate results? Go for the Full Test with 140 questions.",
        quick1: "Quick Test",
        quick2: "40 Questions",
        full1: "Full Test",
        full2: "140 Questions",
    },

    footer: {
        highlight: [{
            title: "Scientific",
            description: "based on IPIP research",
        }, {
            title: "Flexible",
            description: "choose your preferred test",
        }, {
            title: "Accurate",
            description: "detailed trait analysis",
        }],
        copyright: "© 2025 - All rights reserved - ",
        textLink: "Giff"
    }
};

export default en;