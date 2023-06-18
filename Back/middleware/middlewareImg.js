var fs = require('fs');
const { directorio } = require('../middleware/directorio');

exports.imagenExiste = (req, res, next) => {
    const id = req.body.id;
    let path = directorio() + "/imagenes/" + id
    //Si no existe la imagen regresa 404
    if (!fs.existsSync(path + ".png") || !fs.existsSync(path + ".jpg")) {
        res.status(404).json({ error: "No existe la imagen y por ende el blog no existe" })
        //Si existe la imagen se borra de la carpeta uploading
        fs.unlink(directorio() + "/uploading/" + req.file.originalname, (err) => {
            if (err) console.log(err);
        });
    }
    else if (fs.existsSync(path + ".png") || fs.existsSync(path + ".jpg")) {
        res.status(404).json({ error: "Ya existe una imagen para ese blog y por ende el blog tambien" });
        //Si existe la imagen se borra de la carpeta uploading
        fs.unlink(directorio() + "/uploading/" + req.file.originalname, (err) => {
            if (err) console.log(err);
        });
    }
    else {
        //Pongo en el body el path de la imagen por si se necesita despues
        req.body.ImgPath = path;
        next();
    }
}

exports.reemplazarImagen = async (req, res) => {
    //Calculo en donde esta la imagen a reemplazar
    let path = directorio() + "/imagenes/" + req.body.id
    try {
        //Me fijo si existe como .png, y si existe la borro
        if (fs.existsSync(path + ".png")) {
            fs.unlink(path + ".png")
        }
        //Me fijo si existe como .jpg, y si existe la borro
        else if (fs.existsSync(path + ".jpg")) {
            fs.unlink(path + ".jpg")
        }
    }
    catch (error) {
        res.status(400).json({ error: "File deleting error" })
    }
    //Muevo la imagen nueva
    ruta = this.moverImagen(req)
    return ruta
}

exports.moverImagen = (req) => {
    //Mueve la imagen de la carpeta uploading con el nombre que le da el usuario
    // a la carpeta Imagenes con el nombre blogid.extension
    fs.renameSync(directorio() + "/uploading/" + req.file.originalname,
        directorio() + "/imagenes/" + req.body.id + "." + req.file.originalname.split(".")[1])
    path = "localhost:8000/imagenes/" + req.body.id + "." + req.file.originalname.split(".")[1]
    return path
}

exports.reparseFormToBody = (req, res, next) => {
    //formData no acepta JSONs, por lo que se recibe un string y lo cambio a un JSON para manejarlo
    //Pongo el string en req.body
    req.body = JSON.parse(req.body)
    next()
}