const getScoreLetter = (score) => {
    switch (true) {
        case score >= 90 && score <= 100:
            return `A`
            break
        case score >= 80 && score <= 90:
            return `B`
            break
        case score >= 70 && score <= 80:
            return `C`
            break
        case score >= 60 && score <= 70:
            return `D`
            break
        default:
            return `Invalid marks`
    }
}
const scoreFeedback = (score) => {
    switch (true) {
        case score >= 90 && score <= 100:
            return `Excellent work`
            break
        case score >= 80 && score <= 90:
            return `Good work`
            break
        case score >= 70 && score <= 80:
            return `You passed`
            break
        case score >= 60 && score <= 70:
            return `You passed`
            break
        case score < 60:
            return `Keep practicing`
        default:
            return `Invalid marks`
    }
}
const hasPassed = (score) => {
    if (score >= 60) {
        return true
    } else {
        return false
    }
}


const gradeReport = (name, score) => {
    let grade = getScoreLetter(score)
    let passed = hasPassed(score)
    let feedback = scoreFeedback(score)
    return {
        name,
        score,
        grade,
        passed,
        feedback
    }
}

console.log(gradeReport('Mohamett Ali Daahir', 90));
