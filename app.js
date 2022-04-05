let menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    const link = document.querySelector('.nav-bar');

    if (link.style.display === "block") {
        link.style.display = "none";
       
    }
    else {
        link.style.display = "block";
        
}
})
