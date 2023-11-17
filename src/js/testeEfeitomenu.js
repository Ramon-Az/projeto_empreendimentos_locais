window.addEventListener("scroll", function(){
    let header = document.querySelector('.nav-menu');

    if (window.scrollY > 0) {
        console.log("executando scroll")
        header.classList.add('rolagem');
        document.querySelector('.text').style.display = "none";
    } else {
        console.log("Início do scroll");
        header.classList.remove('rolagem');
        document.querySelector('.text').style.display = 'block';
    }
});
