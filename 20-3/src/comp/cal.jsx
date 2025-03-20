import './cal.css'

function Cal(){
    return <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_-UXDcaA4EZch_jx3IfRCv6LfhIih4pdUg&s" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonPa5BNRhdgMhImBzjgqNiUKFOZFS_Q_3Ug&s" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://images.shiksha.com/mediadata/images/1718792832phpXRCMy7.jpeg" className="d-block w-100 " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}

export default Cal