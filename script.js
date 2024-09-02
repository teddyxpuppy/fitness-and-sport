// Get references to necessary DOM elements
const form = document.getElementById('fitness-form');
const resultSection = document.getElementById('result-section');
const fitnessResult = document.getElementById('fitness-result');
const sportSection = document.getElementById('sport-section');
const sportButton = document.getElementById('sport-button');
const coachAssignment = document.getElementById('coach-assignment');
const dietPlanSection = document.getElementById('diet-plan-section');
const dietPlan = document.getElementById('diet-plan');
const coachChoiceSection = document.getElementById('coach-choice-section');

// Function to calculate BMI
function calculateBMI(weight, height) {
    height = height / 100; // Convert height to meters
    return (weight / (height * height)).toFixed(2);
}

// Function to check if the person is fit
function isFit(bmi) {
    return bmi >= 18.5 && bmi <= 24.9;
}

// Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = calculateBMI(weight, height);

    if (isFit(bmi)) {
        fitnessResult.textContent = `You are fit! Your BMI is ${bmi}.`;
        sportSection.classList.remove('hidden');
        dietPlanSection.classList.add('hidden');
    } else {
        fitnessResult.textContent = `You are not fit. Your BMI is ${bmi}. Please follow this diet plan.`;
        sportSection.classList.add('hidden');
        dietPlanSection.classList.remove('hidden');
        displayDietPlan(bmi, gender);
    }

    resultSection.classList.remove('hidden');
});

// Function to display the diet plan based on BMI and gender
function displayDietPlan(bmi, gender) {
    let dietRecommendation;

    if (bmi < 18.5) {
        dietRecommendation = `Your BMI indicates that you are underweight. Consider increasing your calorie intake with nutrient-dense foods such as nuts, avocados, whole grains, and lean proteins. Try to have smaller, more frequent meals and incorporate strength training exercises.`;
        if (gender === "Female") {
            dietRecommendation += ` Women may also benefit from including iron-rich foods such as spinach, legumes, and red meat.`;
        }
    } else if (bmi > 24.9) {
        dietRecommendation = `Your BMI indicates that you are overweight. Consider a balanced diet with plenty of fruits, vegetables, whole grains, and lean proteins. Limit your intake of sugary drinks, fast foods, and excessive carbohydrates. Regular physical activity is also recommended.`;
        if (gender === "Male") {
            dietRecommendation += ` Men should focus on maintaining muscle mass through strength training while managing calorie intake.`;
        }
    }

    dietPlan.textContent = dietRecommendation;
}

// Function to handle sport selection and coach assignment
sportButton.addEventListener('click', function() {
    const selectedSport = document.getElementById('sports').value;
    coachChoiceSection.classList.remove('hidden');

    const coachChoiceButton = document.getElementById('coach-choice-button');
    coachChoiceButton.addEventListener('click', function() {
        const coachRequired = document.querySelector('input[name="coach-required"]:checked').value;
        let coachName;

        if (coachRequired === "yes") {
            switch (selectedSport) {
                case 'Cricket':
                    coachName = 'Coach Virat';
                cn='8763456899';
                    break;
                case 'Football':
                    coachName = 'Coach Messi';
                 cn='8763456899'
                    break;
                case 'Basketball':
                    coachName = 'Coach LeBron Rao';
                 cn='8763456899'
                    break;
                case 'Tennis':
                    coachName = 'Coach Serena Singh';
                 cn='8763456899'
                    break;
                case 'Badminton':
                    coachName = 'Coach PV Raj';
                 cn='8763456899'
                    break;
                default:
                    coachName = 'NO COUCH AS PER YOUR REUIREMENTS';
             
            }
            coachAssignment.textContent = `Great! You are ready to play ${selectedSport}.\n You have been assigned to ${coachName}. \nThe contact number is ${cn}`;
        } else {
            coachAssignment.textContent = `Great! You are ready to play ${selectedSport}. You have chosen to self-learn. Good luck!`;
        }

        coachAssignment.classList.remove('hidden');
    });
});
