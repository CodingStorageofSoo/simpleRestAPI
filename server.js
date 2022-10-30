const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("Start Server : localhost: 3001");
});

// console.log(uuidAPIKey.create());

const key = {
  apiKey: "YABJ03W-9QD4NZV-ND6P61V-3JPV247",
  uuid: "f297200f-4dda-4aff-ab4d-63071cadb110",
};

app.get("/server/users/:apiKey/:type", async (req, res) => {
  let { apiKey, type } = req.params;

  if (!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.uuid)) {
    res.send("apikey is not valid");
  } else {
    if (type == "seoul") {
      let data = [
        {
          name: "Kim",
          city: "Seoul",
        },
        {
          name: "Choi",
          city: "Seoul",
        },
      ];
      res.send(data);
    } else if (type == "jeju") {
      let data = [
        {
          name: "Park",
          city: "jeju",
        },
        {
          name: "Lee",
          city: "jeju",
        },
      ];
      res.send(data);
    } else {
      res.send("Type is not correct.");
    }
  }
});
