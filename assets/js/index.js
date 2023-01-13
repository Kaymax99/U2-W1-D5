function changeNav() {
    const navBar = document.getElementById("navBar")
    const navButton = document.getElementById("navButt")
    let scrollValue = window.scrollY;
    if (scrollValue <= 250) {
        navBar.classList.remove("changeNavBG")
        navButton.classList.remove("changeNavButtBG")
    } else {
        navBar.classList.add("changeNavBG")
        navButton.classList.add("changeNavButtBG")
    }
}
window.addEventListener('scroll', changeNav)