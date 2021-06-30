const sideMenu = document.querySelector('.nav-response');

function openMenu() {
  sideMenu.style.visibility = 'visible';
}

function closeMenu() {
  sideMenu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

const modalBtn = document.querySelector(".modal-btn")

const data = document.querySelector(".modal")

const dataValue = document.createElement("div")

dataValue.classList.add("pop-up")

dataValue.innerHTML = `
<h3 class="pop-up-heading">Multi Post Story</h3>
<i class="fa fa-times-circle pop-up-close"></i>
<ul class="pop-up-skills">
  <li class="pop-up-skls">HTML</li>
  <li class="pop-up-skls">CSS</li>
  <li class="pop-up-skls">Ruby on Rails</li>
</ul>
<img src="Assets/Snapshoot Portfolio.png" class="pop-up-background" alt="Pop-up Image">
<p class="pop-up-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type 
   specimen book. It has survived not only five centuries, but also the leap into 
   electronic typesetting, remaining essent</p>
  <div class="pop-up-button">
    <a href="#" class="pop-up-btn">Livelink<i class="fa fa-arrow-circle-down"></i></a>
    <a href="#" class="pop-up-btn">Sourcelink<i class="fa fa-github"></i></a>
  </div>`
data.appendChild(dataValue);

const popClose = document.querySelector(".pop-up-close")
popClose.addEventListener("click", function(){
  dataValue.classList.add("displayModal")
});

modalBtn.addEventListener("click", function(){  
dataValue.classList.remove("displayModal")
});
