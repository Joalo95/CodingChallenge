const express = require("express");
const router = express.Router();
const { runValidation } = require("../validators/runValidation");
const { blogValidator } = require("../validators/validatorBlog");
const { allBlogs, addBlog, editBlog, deleteBlog } = require("../controllers/controllerBlog");
const { reparseFormToBody, imagenExiste } = require("../middleware/middlewareImg");
const { directorio } = require("../middleware/directorio");

//Multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, directorio() + "/uploading");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

router.post("/nuevo", upload.single('Imagen'), reparseFormToBody, imagenExiste, blogValidator, runValidation, addBlog);
router.put("/editar/:id", upload.single('Imagen'), reparseFormToBody, imagenExiste, blogValidator, runValidation, editBlog);
router.delete("/eliminar/:id", deleteBlog);
router.get("/lista", allBlogs);

module.exports = router;