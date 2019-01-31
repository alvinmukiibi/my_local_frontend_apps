const XHR = new XMLHttpRequest();

let api = "https://api.github.com/zen";

//the function called redyState on the request object returns the state in which the client is, the states are
// 0 for client created but open() not yet called
// 1 for open() has been called
// 2 for send() has been called and headers and status are available
// 3 for loading i.e. responseText is partial
// 4 for done i.e operation is complete and data is now available

XHR.onreadystatechange = () => {
  //console.log("STATE IS " + XHR.readyState);
  //now check is state is 4
  if (XHR.readyState === 4) {
    if (XHR.status === 200) {
      let res = XHR.responseText;
      console.log(res);
    } else {
      console.log("There was a problem from the server");
    }
  }
};

XHR.open("GET", api);
//however the return of a response does not only depend on the state being returned, it also depends on the server (api) thats sending back the response
//so this means we must test it too to see the server resource availability status
//so we use the status codes, 404, 200 and so on
XHR.send();
