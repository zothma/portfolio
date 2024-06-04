import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, href, ...props }) {
  const { asPath: currentPath } = useRouter();

  return (
    <span className={currentPath == href ? "font-bold" : ""}>
      <Link href={href} {...props}>
          {children}
      </Link>
    </span>
  )
}