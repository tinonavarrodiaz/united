import Svg from "../atoms/Svg";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div data-aos="zoom-in">
        <h2>Contact</h2>
        <p>
          Monday to Friday 9am-4pm <br/>
          Phone Number: 5629663149 <br/>
          sales@united-beverages.com <br/>
          17517 Fabrica Way Suite L Cerritos, <br/>
          CA. 90703 7001
        </p>
      </div>
      <Svg img="logo.svg" alt="logo" cn={`Logo`} />
    </section>
  )
}
