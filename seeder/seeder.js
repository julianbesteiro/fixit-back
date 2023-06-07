//ejecutar en la terminal:  node seeder/seeder.js

const mongoose = require("mongoose");
const { Case, User, Office, Device } = require("../models");

async function seedData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fixit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const offices = [
      {
        name: "Globant Tower",
        address: {
          street: "Carlos M. Della Paolera 261",
          city: "Buenos Aires",
          state: "CABA",
          country: "Argentina",
        },
        location: [1, 2],
        map: "mapcaba.jpg",
      },
      {
        name: "La Docta",
        address: {
          street: "Av. Colón 3440",
          city: "Barrio Alto Alberdi",
          state: "Cordoba",
          country: "Argentina",
        },
        location: [2, 3],
        map: "mapcba.jpg",
      },
      {
        name: "Bahia Blanca",
        address: {
          street: "Dr. Luis María Drago 45, 9° Piso",
          city: "Bahía Blanca",
          state: "Buenos Aires",
          country: "Argentina",
        },
        location: [3, 4],
        map: "mapbahia.jpg",
      },
    ];

    const users = [
      {
        name: "Jose Perez",
        password: "hola",
        email: "a@a.com",
        cellphone: 1234,
        role: "backend developer",
        is_admin: false,
        address: "Carlos M. Della Paolera 1249, Buenos Aires, CABA, Argentina",
        location: [1, 2],
      },
      {
        name: "Juan Gonzalez",
        password: "hola",
        email: "b@b.com",
        cellphone: 2345,
        role: "gaming developer",
        is_admin: false,
        address: "Av. Colón 4440, Barrio Alto Alberdi, Cordoba, Argentina",
        location: [2, 3],
      },
      {
        name: "Manuel Rodriguez",
        password: "hola",
        email: "c@c.com",
        cellphone: 3456,
        role: "service desk",
        is_admin: true,
        address:
          "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        location: [3, 4],
      },
    ];

    const cases = [
      {
        user: "6478f2400ad7434030dd0d81",
        home_office: true,
        damaged_equipment: {
          name: "6480a26a78472943cd22342b",
          image: "laptop.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: "6478f201b4ff5b5937d4a2fd",
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: "6478eee36c85483ca072a5ad",
      },
      {
        user: "6478f2400ad7434030dd0d82",
        home_office: true,
        damaged_equipment: {
          name: "6480a26a78472943cd22342b",
          image: "mouse.jpg",
          location: "Av. Colón 4440, Barrio Alto Alberdi, Cordoba, Argentina",
        },
        status: "open",
        owner: "6478f201b4ff5b5937d4a2fd",
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: "6478eee36c85483ca072a5ae",
      },
    ];

    const devices = [
      {
        name: "notebook",
      },
      {
        name: "mouse",
      },
      {
        name: "headset",
      },
    ];

    await Office.insertMany(offices);
    await User.insertMany(users);
    await Case.insertMany(cases);
    await Device.insertMany(devices);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedData();
