const { check } = require("express-validator");

exports.blogValidator = [
    check("title")
        .not()
        .isEmpty()
        .withMessage("El titulo es requerido")
        .isString()
        .withMessage("El titulo no debe contener números"),
    check("tiempoLectura")
        .not()
        .isEmpty()
        .withMessage("El tiempoLectura es requerido")
        .isNumeric()
        .withMessage("El tiempoLectura debe ser en formato numerico"),
    check("img")
        .not()
        .isEmpty()
        .withMessage("Se requiere una imagen")
        .isString()
        .withMessage("El nombre de la imagen debe ser de tipo texto"),
];