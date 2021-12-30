console.log("hello");
//form

const formSearch = document.getElementById("form");
const inputSearch = document.getElementById("input");
const locationValue = document.getElementById("location");

formSearch.addEventListener("submit", (e) => {
  console.log(inputSearch.value);
  e.preventDefault();

  const inputValue = inputSearch.value;
  fetch("http://localhost:3000/locations?address=" + inputValue).then(
    (response) => {
      console.log("address", response);
      response.json().then((data) => {
        console.log("data", data);
        if (data.error) {
          return (locationValue.innerHTML = data.error);
        }
        locationValue.innerHTML = data[0].address;
      });
    }
  );
});
