$("#getBtn").click(() => {
  let url = "https://api.github.com/users/obama";
  $.get(url)
    .done(res => {
      console.log(res);
    })
    .fail(() => {
      console.log("errors");
    });
});
$("#postBtn").click(() => {
  let url = "https://api.github.com/users/obama";
  $.post(url, { name: "alvin", age: 22 })
    .done(res => {
      console.log(res);
    })
    .fail(() => {
      console.log("errors");
    });
});
$("#getJSONBtn").click(() => {
  let url = "https://api.github.com/users/obama";
  $.getJSON(url)
    .done(res => {
      console.log(res);
    })
    .fail(() => {
      console.log("errors");
    });
});
