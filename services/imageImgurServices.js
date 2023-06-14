const axios = require("axios");
require("dotenv").config();

const setImageUrl = async (imgBase64) => {
  const clientId = "TU_CLIENT_ID"; // Reemplaza con tu Client ID de Imgur
  const apiUrl = "https://api.imgur.com/3/image";

  const formData = new FormData();
  formData.append("image", base64Image);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      const imageUrl = data.data.link;
      saveImageUrlToDatabase(imageUrl);
      return imageUrl;
    } else {
      throw new Error("Error al cargar la imagen en Imgur");
    }
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
  }
};

module.exports = {
  setImageUrl,
};
