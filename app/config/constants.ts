import { Dimensions } from "react-native";

export const Constants = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    AsyncStorageKeys: {
        educationalData: 'educationalData',
        bookmark: 'bookmark'
    },
}

export const educational = [

    {
        "id": "1",
        "title": "Introduction to React Native",
        "description": "Learn the basics of React Native development and build your first mobile app.This course covers components, styling, and navigation.",
        "category": "Programming",
        "duration": "45 minutes",
        "level": "Beginner",
        "thumbnail": "https://picsum.photos/id/0/200/300",
        "instructor": "Sarah Johnson",
        "tags": ["react", "javascript", "mobile"]
    },
    {
        "id": "2",
        "title": "Financial Literacy 101",
        "description": "Master the essentials of personal finance, including budgeting, saving, and investing basics to secure your financial future.",
        "category": "Finance",
        "duration": "60 minutes",
        "level": "Beginner",
        "thumbnail": "https://picsum.photos/id/20/200/300",
        "instructor": "Michael Chen",
        "tags": ["finance", "investing", "budgeting"]
    },
    {
        "id": "3",
        "title": "Digital Marketing Fundamentals",
        "description": "Discover key digital marketing concepts and strategies to grow your online presence and reach your target audience effectively.",
        "category": "Marketing",
        "duration": "90 minutes",
        "level": "Intermediate",
        "thumbnail": "https://picsum.photos/id/42/200/300",
        "instructor": "Jessica Williams",
        "tags": ["marketing", "social media", "SEO"]
    },
    {
        "id": "4",
        "title": "Advanced React Native Animations",
        "description": "Take your React Native skills to the next level by mastering complex animations and transitions for a polished user experience.",
        "category": "Programming",
        "duration": "120 minutes",
        "level": "Advanced",
        "thumbnail": "https://picsum.photos/id/60/200/300",
        "instructor": "David Kumar",
        "tags": ["react", "animations", "UI/UX"]
    },
    {
        "id": "5",
        "title": "Public Speaking Mastery",
        "description": "Build confidence and develop effective public speaking skills for presentations, meetings, and other professional settings.",
        "category": "Soft Skills",
        "duration": "75 minutes",
        "level": "Intermediate",
        "thumbnail": "https://picsum.photos/id/64/200/300",
        "instructor": "Robert Garcia",
        "tags": ["communication", "leadership", "confidence"]
    },
    {
        "id": "6",
        "title": "Data Science Essentials",
        "description": "Get started with data science fundamentals, including data analysis, visualization, and basic statistical concepts.",
        "category": "Data",
        "duration": "105 minutes",
        "level": "Beginner",
        "thumbnail": "https://picsum.photos/id/48/200/300",
        "instructor": "Emily Zhao",
        "tags": ["data", "statistics", "analysis"]
    },
    {
        "id": "7",
        "title": "UI/UX Design Principles",
        "description": "Learn the core principles of user interface and user experience design to create intuitive, attractive digital products.",
        "category": "Design",
        "duration": "60 minutes",
        "level": "Intermediate",
        "thumbnail": "https://picsum.photos/id/26/200/300",
        "instructor": "Alex Morgan",
        "tags": ["design", "user experience", "interfaces"]
    },
    {
        "id": "8",
        "title": "Business Negotiation Tactics",
        "description": "Master proven negotiation strategies to achieve better outcomes in business deals, partnerships, and everyday situations.",
        "category": "Business",
        "duration": "90 minutes",
        "level": "Advanced",
        "thumbnail": "https://picsum.photos/id/91/200/300",
        "instructor": "Natalie Patel",
        "tags": ["negotiation", "business", "communication"]
    }

]