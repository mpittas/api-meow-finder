import React from "react"
import Image from "next/image"

interface IconBoxProps {
  title?: string
  subtitle?: string
  image?: string
}

const IconBox: React.FC<IconBoxProps> = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  image = "/globe.svg",
}) => {
  return (
    <>
      <div className="flex items-center leading-4 gap-x-3">
        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-full">
          <Image src={image} alt="External link" width={20} height={20} />
        </div>
        <div>
          <div className="text-xs text-slate-600">{title}</div>
          <div className="text-sm text-slate-800 font-medium">{subtitle}</div>
        </div>
      </div>
    </>
  )
}

export default IconBox
