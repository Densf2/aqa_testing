
// const averageGrade = 50


if (averageGrade < 60) {
    console.log("Unsatisfied")
}   else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Satisfied")
}   else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log("Good")
}   else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log("Very Good")
}    else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log("Excellent")
}   else {
    console.log("Error");
}

// Switch method

const averageGrade = 50
let NotificationBe;

switch (true) {
    case averageGrade < 60:
        NotificationBe = "Unsatisfied";
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        NotificationBe = "Satisfied";
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        NotificationBe = "Good";
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        NotificationBe = "Very Good";
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        NotificationBe = "Excellent";
        break;
    default:
        NotificationBe = "Error";
}

console.log(NotificationBe);
