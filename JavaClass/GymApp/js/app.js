const exercises = [
    new Exercise('Squat','images/squat.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps', 'legs'),
    new Exercise('Dead Lift','images/deadlift.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps', 'legs'),
    new Exercise('Bench Press','images/benchpress.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps', 'chest'),
];

const exercises2 = {
    pierna : [ {nombre: 'Squat', desc: 'Squad Desc'},
            {nombre: 'Racks', desc: 'Racks Desc'}],
    chest : [ {nombre: 'press', desc: 'press Desc'},
            {nombre: 'press2', desc: 'press2 Desc'}]
}

const recorrerEjercicios = (ejer) =>{
    let eje = (exercises2[ejer]) ? 
        exercises2[ejer].map( exer =>{
        return exer.nombre
        })
        :
        eje ="no existe"

    return eje
    // exercises2[ejer].map( exercise => {
    //     console.log(exercise.nombre)
    // })
}

const $container = document.getElementById('container')
const $week = document.getElementById('week')
const $pierna = document.getElementById('pierna')

$pierna.addEventListener('click', () =>{
    console.log(recorrerEjercicios($pierna.value))
})

const weekDay = () => {
    let daysText = ''
    let date = new Date();
    let numDay = date.getDate()
    const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    for (let i = 0; i < dias.length; i++) {
        const dia = dias[i % 7];
        if(date.getDay() == i){
            daysText += `
                <div class='day-cont'>
                    <a class='day special'>${dia}</a>
                    <p>${numDay}</p>
                </div>
                `
        } else
            daysText += `
                <div class='day-cont'>
                    <a class='day'>${dia}</a>
                    <p>${numDay}</p>
                </div>
                `
    }
    $week.innerHTML = daysText
    return date.getDay()
}


function showExercises(){
    weekDay()
    let theExercises = ""
    if(weekDay() == 0){
        const legs = exercises.filter(exercise => exercise.type == 'legs')
        legs.map(exercise => {
            theExercises += 
            `
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="${exercise.image}">
                            <span class="card-title grey-text text-darken-4">${exercise.nombre}</span>
                        </div>
                        <div class="card-content">
                            <p >${exercise.description}</p>
                        </div>
                        <div class="card-action">
                            <p>Calories: ${exercise.calories}</p>
                            <p>Amount Reps: ${exercise.time}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    $container.innerHTML = theExercises
}


