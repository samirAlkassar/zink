import {Container} from "./ui/Container";
import { CiBasketball } from "react-icons/ci";
import { SubHeadings } from "./ui/SubHeadings";
import Link from "next/link";


export const Footer = () => {
    return (
        <footer className="bg-secondary/20 py-10 px-6 mt-">
            <Container className="flex justify-between px-4">
                    <a className="flex items-center gap-2 justify-center cursor-pointer" href="/">
                        <CiBasketball  className="text-2xl"/>
                        <h1 className="font-bold text-md">ZenK</h1>
                    </a>
                    <SubHeadings variant="p3" className="text-center text-primary/80 mt-4">
                        © 2025 ZenK. All rights reserved.
                    </SubHeadings>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-primary/80 hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/" className="text-primary/80 hover:text-primary transition-colors">Terms</Link>
                        <Link href="/" className="text-primary/80 hover:text-primary transition-colors">Contact</Link>
                    </div>
            </Container>
        </footer>
    )
}