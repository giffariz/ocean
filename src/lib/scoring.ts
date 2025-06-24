import { Question } from "./questions"

export function calculateScores(answers: Record<number, number>, questions: Question[]): Record<string, number> {
    const traitScores: Record<string, number[]> = {
        openness: [],
        conscientiousness: [],
        extraversion: [],
        agreeableness: [],
        neuroticism: [],
    }

    // Process each answer using the actual questions used in the test
    Object.entries(answers).forEach(([questionId, answer]) => {
        const question = questions.find((q) => q.id === Number.parseInt(questionId))
        if (question) {
            let score = answer
            // Reverse scoring for reverse-coded items
            if (question.reverse) {
                score = 6 - answer
            }
            traitScores[question.trait].push(score)
        }
    })

    // Calculate average scores and convert to percentages
    const finalScores: Record<string, number> = {}
    Object.entries(traitScores).forEach(([trait, scores]) => {
        if (scores.length > 0) {
            const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
            // Convert from 1-5 scale to 0-100 percentage
            finalScores[trait] = ((average - 1) / 4) * 100
        } else {
            finalScores[trait] = 0
        }
    })

    return finalScores
}