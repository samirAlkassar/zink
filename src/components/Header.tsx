import { ThemeButton } from "./ThemeButton";
import { Buttons } from "./ui/Buttons";
import { Container } from "./ui/Container";
import { CiBasketball } from "react-icons/ci";


export const Header = () => {

    return (
        <header className="py-5">
            <Container className="flex items-center justify-between">
                <a className="flex items-center gap-2 justify-center cursor-pointer" href="/">
                    <CiBasketball  className="text-3xl" />
                    <h1 className="font-semibold text-xl">ZenK</h1>
                </a>

                <div className="flex items-center lg:gap-2 gap-1">
                    <ThemeButton />
                    <Buttons variant={"secondary"} size="small" href="/login">Login</Buttons>
                    <Buttons variant={"primary"} size="small" href="/signUp">Sign Up</Buttons>
                </div>
            </Container>
        </header>
    )
};