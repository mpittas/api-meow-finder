import React from "react"
import Link from "next/link"
import Image from "next/image"

interface LinkIconProps {
  href: string
  text: string
}

const LinkIcon: React.FC<LinkIconProps> = ({href, text}) => {
  const validHref = href || "/default-path"

  return (
    <>
      <Link
        href={validHref}
        target="_blank"
        className="flex items-center leading-4 gap-x-2 p-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium"
      >
        {/* <Image
          src="/external-icon.svg"
          alt="External link"
          width={10}
          height={10}
        /> */}
        {text}
      </Link>
    </>
  )
}

export default LinkIcon
