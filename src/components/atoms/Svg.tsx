
type SvgProps = {
    img: string;
    alt: string;
    cn: string;
}

export default function Svg({img,alt,cn}: SvgProps) {
  return (
    <img src={img} alt={alt} width={500} height={100} className={cn} />
  )
}
