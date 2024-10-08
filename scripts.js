document.getElementById("signInBtn").addEventListener("click", function() {
    document.getElementById("signInForm").classList.add("active-form");
    document.getElementById("signUpForm").classList.remove("active-form");
    this.classList.add("active");
    document.getElementById("signUpBtn").classList.remove("active");
});

document.getElementById("signUpBtn").addEventListener("click", function() {
    document.getElementById("signUpForm").classList.add("active-form");
    document.getElementById("signInForm").classList.remove("active-form");
    this.classList.add("active");
    document.getElementById("signInBtn").classList.remove("active");
});
