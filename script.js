let nac = document.querySelector(".nac1");
let ele1 = document.querySelector("#open")
let ele2 = document.querySelector("#close")

ele1.addEventListener('click', () => {
    nac.style.display = "block";
    ele1.style.display = "none";
    ele2.style.display = 'block';
})

ele2.addEventListener('click', () => {
    nac.style.display = 'none';
    ele2.style.display = 'none';
    ele1.style.display = "block";

})








