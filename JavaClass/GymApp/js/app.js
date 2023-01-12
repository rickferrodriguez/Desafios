const exercises = [
    new Exercise('Legs Extensions','images/squat.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
    new Exercise('Bench Press','images/deadlift.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
    new Exercise('Pull ups','images/benchpress.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
];

const $container = document.getElementById('container')

function showExercises(){
    let theExercises = ""
    exercises.map(exercise => {
        theExercises += `
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="${exercise.image}">
                            <span class="card-title grey-text text-darken-4">${exercise.nombre}</span>
                        </div>
                        <div class="card-content">
                            <p>${exercise.description}</p>
                        </div>
                        <div class="card-action">
                            <p>Calories: ${exercise.calories}</p>
                            <p>Amount Reps: ${exercise.time}</p>
                        </div>
                    </div>
                </div>
        `
    })
    $container.innerHTML = theExercises
}


