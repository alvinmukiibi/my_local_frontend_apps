const select = document.querySelector("#select");
const info = document.querySelector("#info");

select.addEventListener("change", () => {
  //first check if there is something in the new value
  if (
    select.value === null ||
    select.value === "" ||
    select.value === undefined
  ) {
    info.innerText = "Nothing bro";
  } else {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        info.innerHTML = req.responseText;
      }
    };
    let selectedValue = select.value;
    let url = "http://localhost/backend_ajax/return.php?query=" + selectedValue;
    req.open("GET", url);
    req.send();
  }
});
