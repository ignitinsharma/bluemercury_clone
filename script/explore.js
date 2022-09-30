let slideshow= document.getElementById("slideShow");
let imgData=[
    "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hhm-2022-hero-des-2.jpg?v=1663264616",
    `https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-center.svg?v=1651258769`
]

let slideShow=()=>{
    for(let i=0; i<imgData.length; i++){
        
        setInterval(() => {
            console.log(imgData[i])
      
            }, 5000);
    }
  
   
 
}
// slideShow()

//========= CELEBRATING HISPANIC FOUNDERS =============

let chfData= [
    {
        image:`https://cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_x650.jpg?v=1663261346%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_1000x.jpg?v=1663261346`,
        subheading:`TATA HARPER`,
        heading:"Tata Harper",
        desc:"",
        attri:"LEARN MORE"
    },
    {
        image:`https://cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_x650.jpg?v=1663261582%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_1000x.jpg?v=1663261582`,
        subheading:`NATURA BISSE`,
        heading:"Veronica Fisas",
        desc:"DAUGHTER OF FOUNDER RICARDO FISAS",
        attri:"LEARN MORE"
    },
    {
        image:`https://cdn.shopify.com/s/files/1/0283/0185/2747/files/joanna-vargas-founder_44b0a83d-4d34-42f0-b7c7-a8a38baf0173_x650.jpg?v=1663261497%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/joanna-vargas-founder_44b0a83d-4d34-42f0-b7c7-a8a38baf0173_1000x.jpg?v=1663261497`,
        subheading:`JOANNA VARGAS`,
        heading:"Joanna Vargas",
        desc:"",
        attri:"LEARN MORE"
    }
]

let i=0;
let previous= ()=>{
    if(i==0){
        i=3
    }
    i--;

    console.log(i)
    append();
}
let next=()=>{
    if(i==2){
        i=-1;
    
    }

    i++;
    console.log(i)
    append();
}
console.log(i)

let append=()=>{
let explore_content= document.getElementById("explore_content");
explore_content.innerHTML=null;
let div= document.createElement("div");
let h2= document.createElement("h2");
let h1= document.createElement("h1");
let p= document.createElement("p");
let a= document.createElement("a");
let img= document.createElement("img");
img.src=chfData[i].image;
h2.innerText= chfData[i].subheading;
h1.innerText= chfData[i].heading;
p.innerText= chfData[i].desc;
a.innerText=chfData[i].attri;
div.append(h2,h1,p,a)
explore_content.append(img,div)
}
append()