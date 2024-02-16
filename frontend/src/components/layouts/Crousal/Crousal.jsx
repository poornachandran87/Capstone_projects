import './Crousal.css'
export default function Crousal(){
    return(
        <div>
            <div id="carouselExampleRide" class="carousel slide"  >
  <div class="carousel-inner" style={{height:'500px'}} >
    <div class="carousel-item active">
      <img src="https://hips.hearstapps.com/hmg-prod/images/plants-index-1558561755.png"  class="d-block w-100 carousel-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://as1.ftcdn.net/v2/jpg/03/16/83/44/1000_F_316834496_4xpm6fZ3iHcNT1llAIonh1VCq6iti5Yd.jpg" class="d-block w-100 carousel-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/09/29195121/cover-copy.jpg" class="d-block w-100 carousel-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}