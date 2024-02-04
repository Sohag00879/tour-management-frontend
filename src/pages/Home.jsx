import React from 'react'
import '../styles/home.css'
import {Container , Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
// import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  {/* hero section start */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero_content'>
          <div className="hero-subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt=''/>
          </div>
          <h1>Travelling opens the door to creating <span className='highlight'>
            memories
            </span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus numquam doloremque repellat officia, harum fugit expedita, sapiente itaque recusandae rem et temporibus similique corrupti iste modi hic neque sequi tempore quasi a ducimus tempora sit. Nobis deleniti incidunt cum ipsum facilis eaque eveniet fuga, quidem, veniam, eius quibusdam saepe.</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt='' />
          </div>
        </Col>
        <Col lg='2'>
          {/* <div className="hero_img-box">
            <video src={'https://www.youtube.com/watch?v=aXUNExAekGo'} controls />
          </div> */}
        <div className='hero_img-box mt-4'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/csnD5EVL5z8?si=YHI-ncd18lYkzMNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* hero section end */}

<section>
  <Container>
    <Row>
      <Col lg='3'>
        <h5 className='services_subtitle'> What we serve</h5>
        <h2 className='services_title'>We offer our best services</h2>
      </Col>
      <ServiceList/>
    </Row>
  </Container>
</section>

{/* feature tour section start */}
<section>
<Container>
<Row>
    <Col lg="12" className='mb-5'>
      <Subtitle subtitle={'Explore'}/>
      <h2 className='featured_tour-title'>Our featured tours</h2>
    </Col>
    <FeaturedTourList/>
  </Row>
</Container>
</section>
{/* feature tour section end */}

{/* experience section start */}
<section>
  <Container>
    <Row>
      <Col lg="6">
        <div className="experience-container">
          <Subtitle subtitle={'Experience'}/>
          <h2>Waith our all experience <br/> we wil serve you </h2>
          <p>
            Lorem ipsum dolor sit amet, consectur adipisicing elit.
            <br/>
            Quas aliquam, hic tempora inventore suscipit unde.
          </p>
        </div>
        <div className="counter_wrapper d-flex align-items-center gap-5">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successfull Trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter_box">
            <span>3</span>
            <h6>Years experience</h6>
          </div>
        </div>
      </Col>
      <Col lg="6">
        <div className="experience_img">
          <img src={experienceImg} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
{/* experience section end */}

{/* gallery section start */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className='gallery_title'>Visit our customers tour gallery</h2>
      </Col>
      <Col lg="12">
        <MasonryImagesGallery/>
      </Col>
    </Row>
  </Container>
</section>
{/* gallery section start */}

{/* testimonial section start */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className="testimonial_title">
          What our fans say about us
        </h2>
      </Col>
      <Col lg='12'>
        <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>
{/* testimonial section end */}
<Newsletter/>

  </>
}

export default Home