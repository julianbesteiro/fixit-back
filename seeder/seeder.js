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
        name: "Julian Besteiro.",
        password:
          "$2b$08$2ogl9Z1H/di94an2uh5bvOiHaOGiQjdzyEND.WokzXGatqY21i5i6",
        email: "julianbesteiro1@gmail.com",
        cellphone: 1234,
        role: "backend developer",
        is_admin: false,
        address: "Carlos M. Della Paolera 1249, Buenos Aires, CABA, Argentina",
        location: [1, 2],
      },
      {
        name: "Juan Gonzalez",
        password:
          "$2b$08$CzQkUh.gtPee0b26WfnR0..gjb0HSN/SVb3m1tedFh7mAQDdi9eay",
        email: "juan@alfasd.com",
        cellphone: 2345,
        role: "service desk",
        is_admin: true,
        address: "Av. Colón 4440, Barrio Alto Alberdi, Cordoba, Argentina",
        location: [2, 3],
      },
    ];

    const devices = [
      {
        name: "Modem",
      },
      {
        name: "HDMI cable",
      },
      {
        name: "Monitor",
      },
      {
        name: "Cellphone",
      },
      {
        name: "Notebook",
      },
      {
        name: "Headset",
      },
      {
        name: "Mouse",
      },
      {
        name: "Chair",
      },
      {
        name: "Keyword",
      },
      {
        name: "Notebook charger",
      },
      {
        name: "Cellphone charger",
      },
      {
        name: "Port adapter",
      },
      {
        name: "Other",
      },
    ];

    await Office.insertMany(offices);
    await User.insertMany(users);
    await Device.insertMany(devices);

    const getCaseData = async () => {
      const caseData = await User.find();
      return caseData;
    };

    const getCaseData2 = async () => {
      const caseData2 = await Office.find();
      return caseData2;
    };

    const userData = await getCaseData();
    const officeData = await getCaseData2();

    const cases = [
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Headset",
          image: "headset.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Mouse",
          image: "mouse.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Modem",
          image: "modem.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Cellphone",
          image: "cellphone.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Chair",
          image: "chair.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Keyword",
          image: "keyword.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook charger",
          image: "notebookcharger.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Cellphone charger",
          image: "cellphonecharger.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Port adapter",
          image: "portadapter.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Other",
          image: "other.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "OLDEST, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 80 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "NEWEST, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() + 1 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
    ];

    await Case.insertMany(cases);

    console.log(Date.now() - 20 * 24 * 60 * 60 * 1000);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedData();
