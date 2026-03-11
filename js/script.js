const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCzaOXNf0oOSBSzoVppLU-dF7waNbuFnFbaUfIvQFoy31P3u8QV2m0bZSIvLQBOamq/exec";

$(".contact-form").on("submit", async function (e) {
  e.preventDefault();

  await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val(),
      experience: $("#experience").val()
    })
  });

  alert("Sending ")
});