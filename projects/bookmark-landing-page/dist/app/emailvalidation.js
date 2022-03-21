const emailInput = document.querySelector(".emailinput");
const btn = document.querySelector(".subs-btn");
const errorMsg = document.querySelector(".email-error-msg");
const errorIcon = document.querySelector(".email-error");


btn.addEventListener("click", () => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    errorMsg.classList.add("active");
    errorIcon.classList.add("active");
  } else {
    errorMsg.classList.remove("active");
    errorIcon.classList.remove("active");
  }
});
