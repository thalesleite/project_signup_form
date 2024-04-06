const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm_password")
const loginForm = document.getElementById("loginForm")

const error = document.getElementById("error")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  error.innerText = ""

  if (password.value !== confirmPassword.value) {
    error.innerText = "* Passwords do not match"
  }
})
