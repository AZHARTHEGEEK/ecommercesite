import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Spinner';
import Menu from './Menu';
import Footer from './Footer';
import Slider from './Slider';
import Category from './Category';
import { useHistory } from 'react-router-dom';
const Laptop=()=>{
    let history=useHistory()
    let [data,setData]=useState([])
    let [laptop,setLaptop]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result =>{
            setData(result.data)
        })
        .catch(err => console.log(err))
    },[])
    const res=data.filter(obj => obj.category==="Laptop" )
    const handleParams=(obj)=>{
        const option={
            pathname:`/product/${obj.id}`,
            state:obj
        }
        history.push(option)

    }
    return(
        <>
        <Menu />
        <Slider />
        <Category />
        <br />
        <br />
        <br />
<div class="container text-center mb-4">

<div class="row wow fadeIn">

{res===null ? <Loading />
:
res.map(data => {
    return(
<div class="col-lg-3 col-md-6 mb-4" style={{cursor:"pointer"}} onClick={()=>{handleParams(data)}}>


<div class="card">
<div class="view overlay">
<img width="400" height="180" src={data.photo} class="card-img-top" alt="Iphone 12 Pro Max" />
<a href="./product-page.html">
<div class="mask rgba-white-slight"></div>
</a>
</div>


<div class="card-body text-center">

<a href="" class="grey-text">
<h5>{data.category}</h5>
</a>
<h5>
<strong>
<a href="./product-page.html" class="dark-grey-text">{data.name}
<span class="badge badge-pill danger-color">NEW</span>
</a>
</strong>
</h5>
<h4 class="font-weight-bold blue-text">
<strong>{data.price}</strong>
</h4>
</div>

</div>

</div>
    )
})

}
</div>
</div>


      
   
<div className="text-end">

<Footer />
</div>
        </>
    )
}

export default Laptop