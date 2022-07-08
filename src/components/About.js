import Header, { Paragraph } from './Helper';

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam,
sunt architecto cumque id nesciunt tempora nobis quas libero a,
expedita voluptatum qui.
Laudantium expedita molestias quos ratione rerum quia delectus exercitationem,
libero, provident deleniti dolorem at. Ullam quo, minus magnam quia consectetur libero sit,
voluptates laboriosam repudiandae modi distinctio ratione quas?
Ea accusamus tenetur perferendis earum distinctio
recusandae dignissimos! Iure, modi ad!`;

const About = () => (
  <section className="Section">
    <Header heading="About Us" />
    <Paragraph text={text} />
  </section>
);

export default About;
