const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCzaOXNf0oOSBSzoVppLU-dF7waNbuFnFbaUfIvQFoy31P3u8QV2m0bZSIvLQBOamq/exec";

$("#contact-alert").hide();

$(".contact-form").on("submit", async function (e) {
  e.preventDefault();

  const btn = $(".contact-form button");
  const alertBox = $("#contact-alert");

  btn.prop("disabled", true).text("Submitting...");

  alertBox
    .removeClass("success error")
    .addClass("loading")
    .text("Submitting your form...")
    .show();

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        message: $("#message").val(),
        experience: $("#experience").val()
      })
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    alertBox
      .removeClass("loading error")
      .addClass("success")
      .text("✅ Thank you! Your form was submitted successfully. We’ll get back to you soon.");

    clearForm();
    btn.text("Request Sent");

  } catch (err) {
    alertBox
      .removeClass("loading success")
      .addClass("error")
      .html("❌ Something went wrong. Please try again or email us at <strong>yamitechmedia@gmail.com</strong>.");

    btn.prop("disabled", false).text("Request Lesson");
  }
});

function clearForm() {
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#message").val("");
  $("#experience").val("");
}