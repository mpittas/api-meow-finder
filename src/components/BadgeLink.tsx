import React from "react"
import Link from "next/link"
import Image from "next/image"

interface BadgeLinkProps {
  href: string
  text: string
}

const BadgeLink: React.FC<BadgeLinkProps> = ({href, text}) => {
  const validHref = href || "/default-path"

  return (
    <>
      <Link
        href={validHref}
        target="_blank"
        className="flex items-center leading-4 gap-x-2 p-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium underline"
      >
        <Image
          src="/external-icon.svg"
          alt="External link"
          width={10}
          height={10}
        />
        {text}
      </Link>
    </>
  )
}

export default BadgeLink
