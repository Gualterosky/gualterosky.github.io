const app = document.querySelector(".app")
const login = document.getElementById("login")
const register = document.getElementById("register")
register.addEventListener("click",()=>{
    app.classList.add("active")
})

login.addEventListener("click",()=>{
    app.classList.remove("active")
})