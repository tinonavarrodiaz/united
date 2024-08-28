import { useEffect, useRef } from 'react'
import Img from '../atoms/Img'

export default function Slider() {

  const slider:any = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const images = [...slider.current.querySelectorAll('picture')]
    const total = images.length-1
    let activeEle = slider.current.querySelector('.active') as HTMLPictureElement
    let indexActive = images.indexOf(activeEle)
    setInterval(() => {
      activeEle.classList.remove('active')
      if(total>indexActive){
        images[indexActive+1].classList.add('active')

      }else{
        images[0].classList.add('active')
      }
      activeEle = slider.current.querySelector('.active') as HTMLPictureElement
      indexActive = images.indexOf(activeEle)
    }, 5000);
  },[])
  return (
    <div className="Slider"  ref={slider}>
      <Img src="slider1" ext="jpg" alt="slider" className="active" index="0"/>
      <Img src="slider2" ext="jpg" alt="slider" className="" index="1" />
      <Img src="slider3" ext="jpg" alt="slider" className="" index="2" />
    </div>
  )
}
