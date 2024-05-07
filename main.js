const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

bar.onclick = () => {
  nav.classList.add("active");
};
close.onclick = () => {
  nav.classList.remove("active");
};

smallImg[0].onclick = ()=> {
  mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = ()=> {
  mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = ()=> {
  mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = ()=> {
  mainImg.src = smallImg[3].src;
}



