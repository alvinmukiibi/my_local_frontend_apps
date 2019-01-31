$("#btn").click(() => {
  //make a request
  //advs here are, less code, data comes already parsed
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filter",
    dataType: "json"
  })
    .done(res => {
      $("p").text(res[0]);
    })
    .fail(() => {
      alert("failed!!");
    });
});
