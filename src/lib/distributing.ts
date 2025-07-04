import { Question } from "./questions"

export function calculateRelativeDistribution(
    answers: Record<number, number>,
    questions: Question[]
): Record<string, number> {
    const rawScores: Record<string, number> = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0,
    }

    // Hitung skor mentah
    Object.entries(answers).forEach(([questionId, answer]) => {
        const question = questions.find((q) => q.id === Number.parseInt(questionId))
        if (question) {
            let score = answer
            if (question.reverse) {
                score = 6 - answer
            }
            rawScores[question.trait] += score
        }
    })

    const totalScore = Object.values(rawScores).reduce((sum, val) => sum + val, 0)
    if (totalScore === 0) {
        return {
            openness: 0,
            conscientiousness: 0,
            extraversion: 0,
            agreeableness: 0,
            neuroticism: 0,
        }
    }

    // Langkah 1: hitung proporsi float dan simpan sisa pecahannya
    const floatScores: Record<string, number> = {}
    const roundedScores: Record<string, number> = {}
    const remainders: { trait: string; remainder: number }[] = []

    Object.entries(rawScores).forEach(([trait, score]) => {
        const percentage = (score / totalScore) * 100
        const floored = Math.floor(percentage)
        floatScores[trait] = percentage
        roundedScores[trait] = floored
        remainders.push({ trait, remainder: percentage - floored })
    })

    // Langkah 2: alokasikan sisa ke trait dengan remainder terbesar
    const remaining = 100 - Object.values(roundedScores).reduce((a, b) => a + b, 0)
    remainders.sort((a, b) => b.remainder - a.remainder)

    for (let i = 0; i < remaining; i++) {
        const traitToAdd = remainders[i].trait
        roundedScores[traitToAdd] += 1
    }

    return roundedScores
}
