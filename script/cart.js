//https://stormy-scrubland-12904.herokuapp.com/api/products

// {
//     "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810081492522-1_600x.jpg?v=1663939982",
//     "brand": "R+CO BLEU",
//     "title": "F-Layer Deep Conditioning Serum",
//     "price": "64",
//     "badge": "NEW CONSCIOUS BEAUTY",
//     "id": 1
// }
let cart_item= JSON.parse(localStorage.getItem('cart_item'))||[]
let container= document.getElementById('container')

let getData =async()=>{
    // let res =await fetch(`https://stormy-scrubland-12904.herokuapp.com/api/products`)
    // res= await res.json()
    
    renderDom(cart_item)
}

let renderDom=(data)=>{

    console.log(data)
    container.innerHTML=null
    console.log(cart_item)
    let l= cart_item.length
    if(l===0){
        document.getElementById('msg').innerText="is Empty"
        let btn= document.createElement('button')
        btn.setAttribute('class',"add_new_items")
        btn.innerText='Shop for more Items'
        btn.onclick=()=>{
            window.location.href='./index.html'
        }
        container.append(btn)
    }else{
        document.getElementById('msg').innerText=`(${l} items)`
        totalPrice(1)
    }


    data.forEach(({image,brand,title,price,badge,id,quantity=1})=>{

        let div= document.createElement('div')
        let img= document.createElement('img')
        img.src=image
        let name=document.createElement('p')
        name.innerText=title
        let b= document.createElement('h3')
        b.innerText=brand
        let p= document.createElement('p')
        p.innerText=`$${price}`
        let btndiv= document.createElement('div')
        let plus= document.createElement('button')
        let minus= document.createElement('button')
        plus.innerText= "+"
        minus.innerText="-"
        let display= document.createElement('span')
        display.innerText=quantity
        display.setAttribute('class',"quantity")
        div.setAttribute('class','card')
        btndiv.setAttribute('class','btndiv')
        plus.setAttribute('class','plus')
        minus.setAttribute('class','minus')
        let border= document.createElement('div')
        border.setAttribute('class','border')
        let del= document.createElement('button')
        del.setAttribute('class',"delete")
        del.innerText='Delete'
        del.onclick=()=>{
            deleteData(id)
        }

        //to add items from api

        // div.onclick=()=>{
        //     let prod={image,brand,title,price,badge,id,quantity}
        //     cart_item.push(prod)
        //     console.log(prod)
        //     localStorage.setItem('cart_item',JSON.stringify(cart_item))
        // }

        plus.onclick=()=>{
            quantity++
            display.innerText=quantity
            // console.log(quantity)
            totalPrice(quantity,id)
        }

        minus.onclick=()=>{
            if(quantity==1){
                quantity=1
            }else{
                quantity--
            } 
            display.innerText=quantity
            // console.log(quantity)
            totalPrice(quantity,id)
        }

        btndiv.append(plus,display,minus)
        div.append(img,name,p,del)
        border.append(div,btndiv)
        container.append(border)
    })
}
getData()

function totalPrice(quantity=1,i){
    let p= document.getElementById('price')
    let val=0;

    cart_item.forEach((el,id)=>{
        if(el.id===i){
            val+= Number(el.price)*quantity
        }else{
            val+=Number(el.price)
        }
        
    })
    p.innerText=`Price : ${val}`
}

function deleteData(id){
    let newdata= cart_item.filter((el)=>{
        return id!== el.id
    })
    localStorage.setItem('cart_item',JSON.stringify(newdata))
    renderDom(newdata)
    if(newdata.length==0){
        document.getElementById('msg').innerText="is Empty"
    }else{
        document.getElementById('msg').innerText= `(${newdata.length} items)`
    }
    
}
let checkout= document.getElementById('checkout')
checkout.onclick=()=>{
    window.location.href="./checkout.html"
}