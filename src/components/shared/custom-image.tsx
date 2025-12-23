import Image, { StaticImageData } from "next/image";

export function CustomImage({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="mx-6 overflow-hidden w-fit rounded-xl border">
      <Image src={src} alt={alt} className={`${className} object-cover`} width={width} height={height} />
    </div>
  );
}
