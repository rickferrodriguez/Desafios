class Exercise{
    constructor(nombre, image, description, calories, time){
        this._nombre = nombre;
        this._image = image;
        this._description = description;
        this._calories = calories;
        this._time = time;
    }

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre}

    get image(){return this._image}
    set image(image){this._image = image}

    get description(){return this._description}
    set description(description){this._description = description}

    get calories(){return this._calories}
    set calories(calories){this._cal = calories}

    get time(){return this._time}
    set time(time){this._time = time}
}
