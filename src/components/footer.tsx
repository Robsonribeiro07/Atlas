import Link from "next/link";

export function Footer() {
    return (
        <footer className="text-[#a0a0a0] mx-auto w-fit mt-5">
        &copy; {new Date().getFullYear()} Atlas. Feito por <Link href=''>Robson Ribeiro</Link>
      </footer>
    )
}