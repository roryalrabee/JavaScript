function calculateGrade(score) {
    if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) {
        return "Invalid input";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    return typeof age === "number" &&
           Number.isFinite(age) &&
           age >= 18 &&
           hasTicket === true;
}

console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 0:", calculateGrade(0));
console.log("Grade 100:", calculateGrade(100));
console.log("Grade -1:", calculateGrade(-1));
console.log("Grade 101:", calculateGrade(101));
console.log("Grade string:", calculateGrade("90"));
console.log("Grade null:", calculateGrade(null));

console.log("Access allowed:", checkAccess(20, true));
console.log("No ticket:", checkAccess(20, false));
console.log("Underage:", checkAccess(17, true));
console.log("Boundary age:", checkAccess(18, true));
console.log("Invalid age:", checkAccess("20", true));
console.log("Invalid ticket:", checkAccess(20, "true"));
