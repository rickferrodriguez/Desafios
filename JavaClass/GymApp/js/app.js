const exercises = [
    new Exercise('Legs Extensions','images/squat.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
    new Exercise('Bench Press','images/deadlift.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
    new Exercise('Pull ups','images/benchpress.jpg','The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastusmuscles.','400','4reps'),
];

function showExercises(){
    exercises.forEach(exercise => {
        // Obtener el valor de cada uno de los elementos de la clase
        const eNombre = `${exercise.nombre}`;
        const eDescription = `${exercise.description}`;
        const eCalories = `${exercise.calories}`;
        const eTime = `${exercise.time}`;

        // Utilice la función `document.createElement()` para crear el elemento
        const row = document.createElement('div');
        const col = document.createElement('div');
        const carta = document.createElement('div');
        const d_nombre = document.createElement('span');
        const div_img_element = document.createElement('div')
        const img_element = document.createElement('img')
        const div_desc_element = document.createElement('div');
        const d_description= document.createElement('p');
        const d_calories = document.createElement('div');
        const d_time = document.createElement('div');

        // agregar clases a los elementos
        col.classList.add('col','s12','m7');
        carta.classList.add('card');
        d_nombre.classList.add('card-title','grey-text','text-darken-4');
        div_img_element.classList.add('card-image');
        img_element.classList.add('responsive-img');
        div_desc_element.classList.add('card-content', 'grey');

        // Asigno el contenido a través de la propiedad `textContent`
        d_nombre.textContent = eNombre;
        d_description.textContent = eDescription;
        d_calories.textContent = eCalories;
        d_time.textContent = eTime;
        img_element.src = exercise.image;

        // Inserto el elemento en el DOM
        let contenedora = document.getElementById("container");
        contenedora.appendChild(col);
        col.appendChild(carta);
        carta.appendChild(div_img_element);
        div_img_element.appendChild(img_element);
        div_img_element.appendChild(d_nombre);
        carta.appendChild(div_desc_element);
        div_desc_element.appendChild(d_description);
        carta.appendChild(d_calories);
        carta.appendChild(d_time);
    })
}


