import Img from "../atoms/Img";

export default function Distillery() {
  return (
    <section className='Distillery bg-body-secondary' id="distillery">
      <div className="Distillery__text" data-aos="fade-right">
        <h2>Our Distillery</h2>
        <p>Destiladora Agave Azul, located in <br/>
          San Juanito de Escobedo, benefits <br/>
          from the region&apos;s ideal climate and <br/>
          rich volcanic soil, perfect for <br/>
          cultivating premium agave. This <br/>
          environment ensures high-quality <br/>
          tequila production, leveraging <br/>
          traditional techniques and modern <br/>
          innovations. The distillery&apos;s strategic <br/>
          location also provides easy access to <br/>
          local markets and export routes, <br/>
          enhancing its reach and reputation.</p>
      </div>
      <div className='Distillery__img' data-aos="fade-left">
        <Img src="hacienda" ext="png" alt="Destiladora Agave Azul" className='w-full' ></Img>
      </div>
    </section>
  )
}
