function changeNav() {
    const navBar = document.getElementById("navBar")
    let scrollValue = window.scrollY;
    if (scrollValue <= 250) {
        navBar.classList.remove("changeBG")
    } else {
        navBar.classList.add("changeBG")
    }
    console.log(scrollValue)
}
window.addEventListener('scroll', changeNav)