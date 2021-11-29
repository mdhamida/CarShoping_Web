import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from "next/link";
const Bike = () => {
    return (
        <>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <Navbar/>
          

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/bike5.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="buke3.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="bike5.jpg"  width="1400" height="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





<div class="card-group">
<h2>New Bike</h2>
 <div class="card">

   <img src="/b1.jpeg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
    
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="/b2.jpg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="b3.png" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>
</div>


<div class="card-group">
<h3>Luxery Bike</h3>
 <div class="card">

   <img src="/b4.webp" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
    
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="/b5.jpeg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="b6.jpg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>
</div>




<div class="card-group">
<h3>Electric Bike</h3>
 <div class="card">

   <img src="/b7.jpg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
    
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="/b8.jpg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="b9.png" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs.1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>
</div>



<div class="card-group">
<h3>Popular Bike</h3>
 <div class="card">

   <img src="/b10.jpeg" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">1 Lakh.</button>
    
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="/b11.png" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs 1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>

 <div class="card">
   <img src="b11.png" class="card-img-top" alt="error"/>
   <div class="card-body">
     <h5 class="card-title">Honda</h5>
     <p class="card-text">Diwali offers</p>
     <button type="button" class="btn btn-danger">Rs. 1 Lakh.</button>
     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   </div>
 </div>
</div>




        </>
    )
}

export default Bike
