import React, { Component } from 'react'

class TabDashboard extends Component {
    render() {
        return (
            <div>

<div className="row">
    <div className="col"  style={{width:"50%"}}>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <iframe width="625" height="250"
        src="https://www.youtube.com/embed/2e9viAUvwq4">
        </iframe>
    </div>
    <div class="carousel-item">
    <iframe width="625" height="250"
        src='./logo.jpg'>
        </iframe>  
    </div>
    <div class="carousel-item">
    <iframe width="625" height="250"
        src="https://www.youtube.com/embed/FFkOKY5JLwQ">
        </iframe>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    <div className="col bg-light" style={{width:"50%"}}>

                 


                    <div id="carouselProducts" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselProducts" data-slide-to="0" class="active"></li>
    <li data-target="#carouselProducts" data-slide-to="1"></li>
    <li data-target="#carouselProducts" data-slide-to="2"></li>
    <li data-target="#carouselProducts" data-slide-to="3"></li>
    <li data-target="#carouselProducts" data-slide-to="4"></li>
    <li data-target="#carouselProducts" data-slide-to="5"></li>


  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="jumbotron">   
      <h1>Our Products</h1>
        <p>These products are organic affordable and help farmers to make farming a profitable venture.</p>
      </div>
    </div>

    <div class="carousel-item">
    <iframe width="625" height="250"
        src='./products/banana starting.jpg'>
        </iframe>  
    </div>
    <div class="carousel-item">
    <iframe width="625" height="250"
        src="./products/Potassium Fluvate.jpg">
        </iframe>
    </div>

    <div class="carousel-item">
    <iframe width="625" height="250"
        src="./products/Potassium Humate.jpg">
        </iframe>
    </div>

    <div class="carousel-item">
    <iframe width="625" height="250"
    src="./products/reva+.jpg" >
        </iframe>
    </div>

    <div class="carousel-item">
    <iframe width="625" height="250"
        src="./products/revaG9.jpg">
        </iframe>
    </div>




  </div>
  <a class="carousel-control-prev" href="#carouselProducts" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselProducts" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



                    
    </div>

</div>


                
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-3 bg-light mr-sm-1 ml-sm-1 ">
                        <h3>Reach out:</h3>
                        <h4>Email:</h4>
                        <h6>bkisansmartfarming@gmail.com</h6>
                        <ul>
                          <li><h5>OFFICE-CONTACT:</h5></li>
                          <li>9424538222</li>
                        </ul>
                        <ul><h6>Contacts:</h6>
                              <li>9754838222</li>
                              <li>9754038222</li>
                              <li>9754138222</li>
                              <li>7697438222</li>
                              <li>8966838222</li>
                        </ul>
                        </div>

                        <div class="col-sm-3 bg-light mr-sm-1 ml-sm-1">
                        <h3>Location</h3>
                        <i class="fas fa-map-marker-alt"></i>
                        <h5>village+post - Taloon, district + Barwani(Madhyapradesh), Pin: 451551, India</h5>
                        <a href="https://goo.gl/maps/jRn15qT3nipavgiDA" target="_blank"><h6 >Reva flora</h6></a> 
                        <a href="https://goo.gl/maps/PnUQM1D4Pa9u11AWA" target="_blank"><h6>B-kisan</h6></a> 
                        </div>

                        <div class="col-sm-3 bg-light mr-sm-1 ml-sm-1">
                        <h3>Column 4</h3>
                        <a href="https://linkedin.com/in/b-kisan-24a998200" target="_blank">Linkdin</a>
                        <a href="https://www.kisanpathashala.com" target="_blank">Company Website</a>                
                        </div>

                        <div class="col-sm-2 bg-light mr-sm-1 ml-sm-1">
                        <h3>Column 4</h3>
                        <a href="linkedin.com/in/b-kisan-24a998200">Linkdin</a><br/>
                        <a href="www.kisanpathashala.com">Company Website</a>                
                        </div>

                    </div>
                    </div>
                <div>
                </div>
            </div>
        )
    }
}
export default TabDashboard