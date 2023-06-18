const knex = require("../config/knexConfig");
const { moverImagen, reemplazarImagen } = require("../middleware/middlewareImg");
const { directorio } = require("../middleware/directorio");
var fs = require("fs");

exports.addBlog = async (req, res) => {
    const blog = req.body
    //Muevo la imagen de la carpeta uploading a la carpeta imagenes
    blog.img = moverImagen(req);
    await knex("blogs")
        .insert({
            id: blog.id,
            titulo: blog.titulo,
            tiempo_lectura: blog.tiempo_lectura,
            img: blog.img
        })
        .then(() => {
            res.status(200).json({ error: null, data: "Se agrego correctamente", blog })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

exports.editBlog = (req, res) => {
    const blog = req.body;
    //Muevo la foto de uploading a la carpeta imagenes, reemplazando la imagen existente
    reemplazarImagen(req).then((result) => {
        blog.img = result
    })
    knex("Blogs")
        .where("id", blog.id)
        .update({
            id: blog.id,
            titulo: blog.titulo,
            tiempo_lectura: blog.tiempo_lectura,
            img: blog.img
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error: null, data: "Se edito correctamente", blog });
        });
};

exports.deleteBlog = (req, res) => {
    //Borra el blog cuyo id es req.params.id
    knex("Blogs")
        .where("id", Number(req.params.id))
        .delete()
        .then(() => {
            //Borro la imagen de la carpeta Imagenes
            path = directorio() + "/imagenes/" + req.params.id
            //Me fijo si existe un .png
            if (fs.existsSync(path + ".png")) {
                //Borro la imagen
                fs.unlink(path + ".png", (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("\nNo existe imagen tipo png");
                    }
                })
                //Me fijo si existe un .jpg
            } else if (fs.existsSync(path + ".jpg")) {
                //Borro la imagen
                fs.unlink(path + ".jpg", (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("\nNo existe imagen tipo jpg");
                    }
                })
            } else {
                //Si no encuentra la imagen regresa 404 pero indica que se borro el registro de la base de datos
                res.status(404).json({ message: "Imagen no encontrada, pero borrado de la base de datos." });
            }
            res.status(200).json({ error: null, data: "Se elimino correctamente", blog });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

exports.allBlogs = (req, res) => {
    knex("Blogs")
        .then((respuesta) => {
            res.status(200).json({ error: null, data: "Lista", respuesta });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};