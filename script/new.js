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

    data.forEach(({badge,image,brand,title,price})=>{
        let div= document.createElement("div");
   
        let b= document.createElement("h6");
        let i= document.createElement("img");
        let t= document.createElement("p");
        let br= document.createElement("h3");
        let p= document.createElement("p");

        div.className="product";
        b.className="badge";
        t.className="title";
        br.className="brand";
        p.className="price"
    
        b.innerText= badge;
        i.src= image;
        t.innerText= title;
        br.innerText= brand;
        p.innerText= `$${price}`;

        div.append(b,i,br,t,p);
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
let page;
let pagination=async()=>{
    let pages= document.getElementById("pagination");
    pages.innerHTML=null;
    let res= await fetch(url);
    res= await res.json();

    
    page=1;
    let tp= Math.round(res.length/8)

    for(let i=0; i<tp; i++){
        
        // console.log(p)
        pages.append(i)
    }
    if(page!==1){
        console.log(page)
        let previous= document.createElement("button");
        previous.innerText="<";
        previous.onclick=()=>{
            if(page>1){
                page--;
            }
          
            getData(page);    
    }
    console.log(p)
    pages.append(previous);
    // getData(page)
}
        getData(page);
    }
   
// else{
    let next= document.createElement("button");
   
    next.onclick=()=>{
        
        // console.log(x)
       if(tp>page){
        page++;
       }
       
    
   
// console.log(tp.length)
getData(page);

    next.innerText=">";


    pages.append(next);

   

}

// };
pagination();


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
