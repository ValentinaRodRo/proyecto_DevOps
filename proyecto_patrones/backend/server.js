const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB en Kubernetes
const mongoURI = "mongodb://mongo-service:27017/nombredb";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Conectado a MongoDB en Kubernetes"))
  .catch(err => console.error("❌ Error de conexión a MongoDB:", err));

const NombreSchema = new mongoose.Schema({ nombre: String });
const Nombre = mongoose.model("Nombre", NombreSchema);

// Endpoint para obtener nombres
app.get("/nombres", async (req, res) => {
  try {
    const nombres = await Nombre.find();
    res.json(nombres);
  } catch (error) {
    console.error("❌ Error al obtener nombres:", error);
    res.status(500).json({ error: "Error al obtener nombres" });
  }
});
// Endpoint para la raíz
app.get("/", (req, res) => {
  res.send("🚀 API funcionando correctamente");
});


// Endpoint para agregar un nombre
app.post("/nombres", async (req, res) => {
  try {
    if (!req.body.nombre) {
      return res.status(400).json({ error: "El campo 'nombre' es requerido" });
    }
    const nuevoNombre = new Nombre({ nombre: req.body.nombre });
    await nuevoNombre.save();
    res.json(nuevoNombre);
  } catch (error) {
    console.error("❌ Error al guardar nombre:", error);
    res.status(500).json({ error: "Error al guardar nombre" });
  }
});

// Verificar que el servidor está corriendo
const PORT = 3000;
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`✅ Ruta registrada: ${r.route.path}`);
  }
});

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
