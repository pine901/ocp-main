const axios = require("axios")

const sendApi = (type, param) => {
  let apiprefix = "";
  param.map((index, value) => {
    apiprefix += value + "/";
  })
  
  axios({
    method: type,
    url: "https://api/ocp/" + apiprefix,
  })
    .then((res) => {
      console.log("Successfully performed");
    })
    .catch((error) => {
      console.log(error);
    });
};