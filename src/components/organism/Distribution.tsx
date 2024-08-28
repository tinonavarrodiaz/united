import Img from "../atoms/Img";


export default function Distribution() {
  return (
    <section className="Distribution bg-body-secondary">
      <div className='Distribution__img' data-aos="fade-right">
        <Img src="chulavista" ext="png" alt="Tequia Chulavista" className='w-full' ></Img>
      </div>
      <div className="Distribution__text" data-aos="fade-left">
        <h2 className="">Distribution</h2>
        <p className="">
          <span className='font-heading '>Our wines, beers, and spirits</span> come <br/>
          from all parts of the world. Our logistics team <br/>
          schedules daily inbound trucks and ocean <br/>
          containers, where all are carefully inspected <br/>
          upon receiving, to ensure they meet United <br/>
          Beverages high standards. Our warehouse <br/>
          staff processes orders destined for our <br/>
          customers throughout California and our <br/>
          distributers throughout the United States.
        </p>
        <ul className="">
          <li>First Class Logistics.</li>
          <li>Product shipped throughout California <br/>
          and all of the United States.</li>
          <li>First Class Service.</li>
          <li>Brand Marketing and top account</li>
        </ul>
      </div>
    </section>
  )
}
