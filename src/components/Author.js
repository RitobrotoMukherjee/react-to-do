import Header, { Paragraph } from './Helper';

const text = `Ritobroto Mukherjeee, Software Developer with a 3 years of industrial experience in backend development.
He loves data structures and algorithms immensly.
He also has done a fullstack web development bootcamp in Microverse a remote software training school with 1300+ hours of programming.`;

const Author = () => (
  <section className="Section">
    <Header heading="Author" />
    <Paragraph text={text} />
  </section>
);

export default Author;
