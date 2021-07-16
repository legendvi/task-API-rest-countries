// 1.create a XHR Object

let request = new XMLHttpRequest();
// 2.3open a connection

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

// 3.send connection;
request.send();

// 4.once the data is received, convert the Data

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(
      data[i]["name"],
      "- ",
      data[i]["capital"],
      "-",
      data[i]["flag"]
    );
  }
};
