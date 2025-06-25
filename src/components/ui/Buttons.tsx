import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface buttonClasses extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
     type?: "button" | "submit" | "reset"  | undefined;
    disabled?: boolean
}

const buttonClasses = cva("border border-secondary/50 primary-shadow hover:primary-shadow-hover rounded-md cursor-pointer", {
    variants: {
        variant: {
            primary: "bg-primary text-background hover:bg-primary/90 ripple-primary",
            secondary: "text-primary hover:bg-secondary/30 ripple-secondary",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        },
        size: {
            small: "px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm",
            medium: "px-4 py-2.5",
            large: "px-6 py-3 text-lg",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
    },
}
)

export const  Buttons = ({children,type = "button" ,disabled=false, href, variant, size, onClick, className}: buttonClasses) => {
    if (href) {
        return (
            <Link href={href} className={twMerge(buttonClasses({ variant, size }), className)}>
            {children}
            </Link>
        );
    }
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={twMerge(buttonClasses({ variant, size }), className)}>
            {children}
        </button>
    );
}