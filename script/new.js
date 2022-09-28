// let url= `http://localhost:3000/api/products`;
let url=`https://stormy-scrubland-12904.herokuapp.com/api/products`;

//get Data of Collection

let getData= async()=>{
let res= await fetch(url);
res= await res.json();
console.log(res)
append(res);
}
getData();

// Display Products

let append= (data)=>{
    let collectionData= document.getElementById("collectionData");
    collectionData.innerHTML=null;

    data.forEach(({badge,image,brand,title,price})=>{
        let div= document.createElement("div");
   
        let b= document.createElement("p");
        let i= document.createElement("img");
        let t= document.createElement("p");
        let br= document.createElement("h3");
        let p= document.createElement("p");

        div.className="product"
    
        b.innerText= badge;
        i.src= image;
        t.innerText= title;
        br.innerText= brand;
        p.innerText= price;

        div.append(b,i,br,t,p);
        collectionData.append(div);
    })
   
}

