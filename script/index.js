const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

// // Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

    // set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}



let data1;
let data2;
let data3;



let cont = document.getElementById("container1")

let url = "https://stormy-scrubland-12904.herokuapp.com/api/products";

let prod = async() => {
  let res = await fetch(`${url}`);
   data1 = await res.json();
  renderDom(data1)
  // console.log(data1)
}
prod()

let adv = ({image,brand,title,price,id},) => {
  let div1 = document.createElement("div")
  div1.setAttribute("class","product1")
  div1.onclick = () => {
    
    cart1(id);
  }

  let img = document.createElement("img")
  img.src = image;

  let t1 = document.createElement("h3")
  t1.innerText = title;
  t1.setAttribute("class","t1")

  let p1 = document.createElement("h4")
  p1.innerText = brand;
  p1.setAttribute("class","p1")

  let p2 = document.createElement("p")
  p2.innerText = `$ ${price}`
  p2.setAttribute("class","p2")

  div1.append(img,p1,t1,p2)
  return div1;  
}


let renderDom = (data1) => {
  data1.forEach((ele) => {
    let app = adv(ele);
    cont.append(app);
  })
  
}

  let span1 = document.getElementsByTagName('span1');
	let div1 = document.getElementsByClassName('product1');
	var l1 = 0;
	span1[1].onclick = ()=>{
		l1++;
		for(var i of div1)
		{
            i.style.left = l1*-100+"%"
            // console.log(l1)
		}
	}
  
	span1[0].onclick = ()=>{
		l1--; 
		for(var i of div1)
		{	
            i.style.left =l1- l1*100+"%"
            // console.log(l1)
		}
	}

  
      let cart1 = async(id) => {
        console.log(id)
        let res = await fetch(`${url}?id=${id}`);
        let newData = await res.json();
        // let newData = Data[0]
        newData = newData[0] 
        
        let cartData = JSON.parse(localStorage.getItem("cart_item")) || [];
        cartData.push(newData);
        
        localStorage.setItem("cart_item",JSON.stringify(cartData))
        console.log(cartData)
    }


  // for slider2 //

  
let cont2 = document.getElementById("container2")

let url2 = "https://stormy-scrubland-12904.herokuapp.com/api/products";

let prod2 = async() => {
  let res = await fetch(`${url2}`);
  data2 = await res.json();
  renderDom2(data2)
  // console.log(data2)
}
prod2()

let adv2 = ({image,brand,title,price,id}) => {
  let div2 = document.createElement("div")
  div2.setAttribute("class","product2")
  div2.onclick = () => {
    
    cart2(id);
  }

  let img = document.createElement("img")
  img.src = image;

  let t1 = document.createElement("h3")
  t1.innerText = title;
  t1.setAttribute("class","t1")

  let p1 = document.createElement("h4")
  p1.innerText = brand;
  p1.setAttribute("class","p1")

  let p2 = document.createElement("p")
  p2.innerText = `$ ${price}`
  p2.setAttribute("class","p2")

  div2.append(img,p1,t1,p2)
  return div2;  
}


let renderDom2 = (data) => {
  data.forEach((ele) => {
    let app = adv2(ele);
    cont2.append(app);
  })
  
}

let span2 = document.getElementsByTagName('span2');
let div2 = document.getElementsByClassName('product2');
	var l2 = 0;
	span2[1].onclick = () => {
		l2++;
        console.log(div2.length)
		for(var i of div2)
		{
            i.style.left = l2*-100+"%"
        
		}
	}
	span2[0].onclick = ()=>{
		l2--; 
		for(var i of div2)
		{	
            i.style.left = l2 - l2*100+"%"
            console.log(l2)
		}
	}
  let cart2 = async(id) => {
    console.log(id)
    let res = await fetch(`${url}?id=${id}`);
    let newData = await res.json();
    // let newData = Data[0]
    newData = newData[0] 
    
    let cartData = JSON.parse(localStorage.getItem("cart_item")) || [];
    cartData.push(newData);
    
    localStorage.setItem("cart_item",JSON.stringify(cartData))
    console.log(cartData)
}

 
//for slider3//

 
let cont3 = document.getElementById("container3")

let url3 = "https://stormy-scrubland-12904.herokuapp.com/api/products";

let prod3 = async() => {
  let res = await fetch(`${url3}`);
  data3 = await res.json();
  renderDom3(data3)
  // console.log(data3)
}
prod3()

let adv3 = ({image,brand,title,price,id}) => {
  let div3 = document.createElement("div")
  div3.setAttribute("class","product3")
  div3.onclick = () => {
    
    cart3(id);
  }


  let img = document.createElement("img")
  img.src = image;

  let t1 = document.createElement("h3")
  t1.innerText = title;
  t1.setAttribute("class","t1")

  let p1 = document.createElement("h4")
  p1.innerText = brand;
  p1.setAttribute("class","p1")

  let p2 = document.createElement("p")
  p2.innerText = `$ ${price}`
  p2.setAttribute("class","p2")

  div3.append(img,p1,t1,p2)
  return div3;  
}


let renderDom3 = (data) => {
  data.forEach((ele) => {
    let app = adv3(ele);
    cont3.append(app);
  })
  
}

var span = document.getElementsByTagName('span3');
	var div = document.getElementsByClassName('product3');
	var l = 0;
	span[1].onclick = () => {
		l++;
		for(var i of div)
		{
            i.style.left = l*-100+"%"
            console.log(l)
		}
	}
	span[0].onclick = ()=>{
		l--; 
		for(var i of div)
		{	
            i.style.left = l - l*100+"%"
		}
	}

  
  let cart3 = async(id) => {
    console.log(id)
    let res = await fetch(`${url}?id=${id}`);
    let newData = await res.json();
    // let newData = Data[0]
    newData = newData[0] 
    
    let cartData = JSON.parse(localStorage.getItem("cart_item")) || [];
    cartData.push(newData);
    
    localStorage.setItem("cart_item",JSON.stringify(cartData))
    console.log(cartData)
}

