const btn = document.querySelector("#btn");
const img = document.querySelector("#theImage");
//listen for clicks
btn.addEventListener("click", () => {
  // alert("clicked");

  //make the request here

  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = () => {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      myResponse = myRequest.responseText; //this returns a string that looks like a JSON object so you can't destructure off whatever key you want from it, atleast not yet
      //so we need to parse it to JSON format
      let parsedResponse = JSON.parse(myResponse); //this changes the JSON-looking string to a real JSON object from which we can destructure whatever key we want
      const { message } = parsedResponse; //so now we have the data back
      //console.log(message);
      //so now we update the dom
      img.src = message;
    }
  };

  let url = "https://dog.ceo/api/breeds/image/random";
  myRequest.open("GET", url);
  myRequest.send();
});
