
import { brands } from "../../data/brands";
import Img from "../atoms/Img";


export default function Brands() {
  return (
    <section className='Brands' id="brands">
      <h2 className="Brands__title">Brands</h2>
      <div className="Brands__gallery">
        {
          brands.map((brand,i) => (
            <div key={brand.id} className="Brands__item" data-aos="flip-left" data-aos-delay={i*100}>
              <Img src={brand.image} ext="png" alt={brand.name} ></Img>
            </div>
          ))
        }
      </div>
    </section>
  )
}
