import Img from '../atoms/Img'

export default function What() {
  return (
    <section className='What' id="about_us">
      <div className="What__info" data-aos="fade-right">
        <h2>What we do</h2>
         <p>
          <span className='font-heading'>Our brands at United Beverages</span> are different <br/>
          and important to both knowledgeable and <br/>
          emerging wine, beer and spirits experts and <br/>
          consumers. Each of our products in the <br/>
          United Beverages portfolio, have been <br/>
          scrutinized, researched and specifically <br/>
          selected for its quality and/or its innovation <br/>
          along with its respect for the traditions it <br/>
          represents.
        </p>
        <p className=''>
          Each member of the team at United <br/>
          Beverages is an industry professional who <br/>
          has an extensive background in wine, beer <br/>
          and spirits sales, and distribution. Their <br/>
          knowledge of and passion for our products, <br/>
          combined with a commitment to customer <br/>
          service, have enabled United Beverages to <br/>
          build lasting relationships with a <br/>
          sophisticated, demanding, and expanding <br/>
          customer base
        </p>
      </div>
      <div className='What__image-cont' data-aos="fade-left">
        <Img src="tarea" ext="png" alt="Tequia La Tarea" className='w-full' ></Img>
      </div>
    </section>
  )
}
