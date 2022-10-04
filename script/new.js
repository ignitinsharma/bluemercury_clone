// let url= `http://localhost:3000/api/products`;
let url=`https://stormy-scrubland-12904.herokuapp.com/api/products`;

//get Data of Collection

let getData= async(page)=>{
let res= await fetch(`${url}?_page=${page}&_limit=8`);
res= await res.json();
console.log(res)
append(res);

}


// Display Products

let append= (data)=>{
    let collectionData= document.getElementById("collectionData");
    collectionData.innerHTML=null;

    data.forEach(({badge,image,brand,title,price,id})=>{
        let div= document.createElement("div");
        let div1= document.createElement("div");
   
        let b= document.createElement("h6");
        let i= document.createElement("img");
        i.id="imgid"
        let t= document.createElement("p");
        let br= document.createElement("h3");
        let p= document.createElement("p");
        let heart= document.createElement("img");
        let brek= document.createElement("br");

        div.className="product";
        div.onclick=()=>{
            linkCart(id);
      
        }
        div1.className="heart"
        b.className="badge";
        t.className="title";
        br.className="brand";
        p.className="price"
    
        heart.src="https://geo-media.beatport.com/image_size/500x500/6b0d6c21-32b3-4b01-872c-1553a9c6d83d.jpg";
        b.innerText= badge;
        i.src= image;
        t.innerText= title;
        br.innerText= brand;
        p.innerText= `$${price}`;

        div1.append(b,heart)
         div.append(div1,i,br,t,p);
       
 
        collectionData.append(div);
    })
   
}


// sort by price


let sort=async()=>{
    let sortby= document.getElementById("sortby").value;
    console.log(sortby)
    let res= await fetch(`${url}?_sort=price&_order=${sortby}`)
    res= await res.json()
    append(res)
    
}

// pagination
let page=1;
let pagination=async()=>{
    let pages= document.getElementById("pagination");
    pages.innerHTML=null;
    let res= await fetch(url);
    res= await res.json();

    

    let tp= Math.round(res.length/8)

  

        let previous= document.createElement("button");
        previous.innerText="<";
        previous.onclick=()=>{
           
                page--;
            getData(page);    
    }
    pages.append(previous);
    // getData(page)

    for(let i=1; i<=tp; i++){
        let button= document.createElement("button");
        button.innerText=i;
  
       button.onclick=()=>{
           console.log(i)
           getData(i)
       }
         
        
        pages.append(button)
    
    }
   


    let next= document.createElement("button");
   
    next.onclick=()=>{
        page++;
getData(page);
    }
    next.innerText=">";
    let hr= document.createElement("hr")
    pages.append(next,hr);

}
pagination();

getData(page);
// fillter work

let filterbutton= document.getElementById("filterButton");

let fb= document.createElement("h2");
fb.innerText="+";
filterbutton.append(fb)
let filterb=()=>{
    filterbutton.innerHTML=null;
    let fb= document.createElement("h2");
    let x=1;
    x++;
    if(x%2==0){
        fb.innerText="-";
    }
    else{
        fb.innerText="+";
    }
 
    console.log(x)
    filterbutton.append(fb)
}
// x++;
// filterb()

//==============>fillter++++++++++++++++++++++=>
let temp= false;
function filterMenu(type_main){
    if(temp===false){
        temp=true;
        type_main.style.height="300px"
        
    }
    else if(temp===true){
        temp=false;
        // type_main.style.height="0px"
    }
}
filterMenu();
let filterType=()=>{
    let type_main= document.getElementById("type_main");
    type_main.innerHTML=null;
    // let type_div= document.createElement("div");
    let type1= document.createElement("p");
    type1.innerText="Bath Oil";
    let type2= document.createElement("p");
    type2.innerText="Bath Salts";

    type_main.append(type1,type2)
    filterMenu(type_main);
}

// LINk CART========>

async function linkCart(index){

    let res= await fetch(`${url}?id=${index}`)
    res= await res.json();
    let data= res[0];
    let cartData = JSON.parse(localStorage.getItem("cart_item")) || [];
    cartData.push(data);
    
    localStorage.setItem("cart_item",JSON.stringify(cartData))
    console.log(cartData)

}