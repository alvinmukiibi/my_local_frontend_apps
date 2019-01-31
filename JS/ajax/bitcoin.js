//first select the dom elements using jquery

const price = document.querySelector("#price");
const btn = document.querySelector("#btn");

// listen for clicks from the button

btn.addEventListener("click", () => {
  const theReq = new XMLHttpRequest();

  theReq.onreadystatechange = () => {
    if (theReq.readyState === 4 && theReq.status === 200) {
      let theRes = theReq.responseText;
      //once you get the response remember its a string so you have to parse it to JSON
      let parsedRes = JSON.parse(theRes);
      //destructure and pull out the key you want
      const { rate } = parsedRes.bpi.USD;
      //update the dom
      price.innerText = rate + " USD";
    }
  };

  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  theReq.open("GET", url);
  theReq.send();
});
