import React from 'react';
import './Portfolio.css'; // Import the CSS file
import GPTLogo from '../Images/GPTLogo.jpeg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

// Image URL for the "About Me" section
// const aboutImage = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';


// Project images
const image = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';

// Background Image URL for the Home section
const backgroundImage = 'https://www.cocotutors.com/wp-content/uploads/2018/09/tutor.jpg';

export const Body = () => {
  const projects = [
    {
      img: 'https://img.freepik.com/free-photo/female-tutor-cute-boy-learning-home_23-2148573949.jpg',
      title: 'Experienced Tutors',
      description: 'Our tutors are carefully selected based on their qualifications, teaching experience, and passion for education.',
     
    },
    {
      img: 'https://blogimage.vantagecircle.com/content/images/2019/07/flexible-working-time.png',
      title: 'Flexible Scheduling',
      description: 'We understand the demands on students time, which is why we offer tutoring sessions that fit around your schedule, whether in-person or online.',
      link: 'http://ruralworks.epizy.com/'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGdI4D2hZRoPw4dasXWMxbh3BKq4g-SkI8y4MbY0MCxdDX69CEm86LICefs_OPNuEiIA&usqp=CAU',
      title: 'Personalized Learning',
      description: 'We tailor our teaching methods to suit the learning style and pace of each student, ensuring that every lesson is both effective and engaging.',
      link: 'http://prehans.lovestoblog.com/'
    },
    {
      img: 'https://img.freepik.com/free-vector/different-school-subjects-vector-illustrations-set_778687-1578.jpg',
      title: 'Comprehensive Subject Coverage',
      description: 'From core subjects like Math, Science, and English to specialized areas like coding , our extensive tutor network ensures that we can support a wide range of academic needs.',
      link: '#'
    },
    {
      img: 'https://www.ocbc.com/iwov-resources/sg/ocbc/business/img/articles/use-your-strong-business-track-record/2_Imageswithinarticles_1.jpg',
      title: 'Proven Track Record',
      description: 'We take pride in the success stories of our students. With a high rate of improved grades and satisfied families, our results speak for themselves. Your success is our priority.',
      link: 'https://prehans.github.io/web-music-player/'
    },
    {
      img: 'https://www.nicepng.com/png/detail/199-1991514_pricing-icon-png-affordable-price-icon-png.png',
      title: 'Affordable Rates',
      description: 'Quality education shouldn’t be out of reach. We offer competitive pricing without compromising on the standard of teaching.',
      link: 'https://digitalmediatime.netlify.app/'
    }
  ];

  return (
    <>
      {/* Home Section */}
      <section className="home" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-content">
          <h3> Welcome !! <i className='bx bxs-hand bx-tada bx-rotate-90'></i> </h3>
          <h1> Find the Best Tutors for Your Needs</h1>
          {/* <h3> And I'm a <span className="multiple-text"></span></h3> */}
          <p>Contact Us ..</p>
         
          <div className="social-media">
    <a href="mailto: gptvaranasi10@gmail.com"><i className="fas fa-envelope"></i></a>
      <a href="https://chat.whatsapp.com/JCrMJaU4XEWDKf8KmEaBBK" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
    <a href="https://www.instagram.com/gharpetuition_gpt_?igsh=MW53eHpmYjZ3ZW85dA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
</div>

        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={GPTLogo} alt="About Me" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            {/* <i className='bx bxs-group'></i>About <span>Me</span> */}
          </h2>
          <h3>About <span>Us!</span></h3>
          <p>
          At Ghar Pe Tuition, we believe that personalized education is the key to unlocking a student’s full potential. Founded with the mission to provide high-quality, accessible, and tailored tutoring services, our bureau connects students with experienced tutors who specialize in a wide range of subjects.

           Our approach is simple yet effective: we match each student with a tutor who not only has expertise in the subject matter but also understands the student's unique learning style and needs. Whether you’re looking to boost grades, prepare for exams, or develop a deeper understanding of a subject, our tutors are here to guide you every step of the way
              </p>
          {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn">
            <b>Know More</b>
          </a> */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio" id="projects">
        <h2 className="heading"><i className='bx bx-book'></i>Why Choose  <span>Us?</span></h2>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="portfolio-box" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// export default Body;
