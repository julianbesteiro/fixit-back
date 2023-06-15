const axios = require("axios");
require("dotenv").config();

async function setImageUrl(base64Data) {
  const clientId = process.env.CLIENT_ID; // Reemplaza con tu ID de cliente de Imgur

  try {
    const response = await axios.post(
      "https://api.imgur.com/3/image",
      { image: base64Data },
      {
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      }
    );

    // Obtener el enlace a la imagen cargada
    const imageUrl = response.data.data.link;
    return imageUrl;
  } catch (error) {
    console.error("Error al cargar la imagen a Imgur:", error);
    throw error;
  }
}

module.exports = {
  setImageUrl,
};
