import React from 'react'
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpeg";
import pic3 from "../images/pic3.jpeg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";



function Home() {
  return (
    
      <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={pic1}
              width="100%"
              height="500px"
              className="d-block w-100"
              alt="pic1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={pic2}
              width="100%"
              height="500px"
              className="d-block w-100"
              alt="pic2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={pic3}
              width="100%"
              height="500px"
              className="d-block w-100"
              alt="pic3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section>
        <div class="container-fluid mt-5">
          <h1 class="text-center text-uppercase mt-4">About us</h1>
          <hr class="w-25 mx-auto" />
          <div class="row mb-4">
            <div class="col-md-6 col-lg-6 col-sm-12">
              <img src={pic4} alt="pic4" width="100%" height="300px" />
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, aut. Dicta eum ad sapiente iusto, natus, temporibus
                beatae quidem. Ad vitae nulla nobis adipisci eligendi laudantium
                inventore, quasi, sapiente similique?Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Tempore, aut. Dicta eum ad
                sapiente iusto, natus,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                quae similique, officiis beatae, recusandae esse rem nulla unde
                illum praesentium voluptatibus dolorum ipsa excepturi nobis
                numquam doloremque aspernatur a veniam commodi porro. A, illo
                nihil recusandae possimus tempore iure dicta.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, aut. Dicta eum ad sapiente iusto, natus, temporibus
                beatae quidem. Ad vitae nulla nobis adipisci eligendi laudantium
                inventore, quasi, sapiente similique?Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Tempore, aut. Dicta eum ad
                sapiente iusto, natus,
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="mid m-3">
        <button
          class="btn btn-primary max"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Click For fun
        </button>
      </div>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <img src={pic5} class="img-fluid m-auto" alt="pic5"  />
        </div>
      </div>

      <section class="bg-primary mt-5">
        <h1 class="text-center text-white">CONTACT</h1>
        <p class="text-center p-1 display-3 text-white">0876543</p>
        <p class="text-center text-uppercase p-2 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Odit magni
          libero consequatur error ipsa, iusto sit, impedit dolore quas totam?
        </p>
      </section>

      
      </>

  )
}

export default Home