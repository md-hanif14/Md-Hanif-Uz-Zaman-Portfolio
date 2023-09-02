import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Hello, I'm <b>Md Hanif Uz Zaman</b>, a MERN (MongoDB, Express.js, React, Node.js) developer passionate about crafting exceptional web experiences. With expertise in both front-end and back-end development, I specialize in building user-friendly, responsive applications that deliver results.
            <br />

            <b>What I Offer:</b>
            <br />

            <b>Front-end Excellence:</b> I create pixel-perfect, engaging user interfaces using React.js.
            <br />

            <b>Back-end Proficiency:</b> Leveraging Node.js and Express.js, I build robust server-side solutions and RESTful APIs.
            <br />

            <b>Database Mastery:</b> MongoDB is my database of choice for efficient data management.
            <br />

           <b> Full-stack Versatility:</b> I work seamlessly across the entire development stack.
            <br />

            <b>Agile Approach:</b> I'm experienced in agile methodologies for efficient project management.
            <br />

           <b>My Drive:</b>

            I'm a problem solver at heart, dedicated to writing clean, maintainable code. I thrive on learning new technologies to stay at the cutting edge of web development.
            <br />

            <b>Let's Collaborate:</b>
            <br />

            If you're seeking a MERN developer who can turn your ideas into polished web applications, let's connect. Reach out to <b>hanifuzzaman.jsr@gmail.com</b>  to discuss how we can bring your vision to life.
            <br />

            Thank you for visiting my portfolio, and I'm excited about the opportunity to work together.


          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
