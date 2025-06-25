import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";


interface headerClasses extends VariantProps<typeof headerClasses> {
    children: React.ReactNode;
    className?: string;
}

const headerClasses = cva("", {
    variants: {
        variant: {
            h1: "text-3xl sm:text-4xl lg:text-5xl text-primary font-bold",
            h2: "text-2xl md:text-3xl font-bold text-primary",
            h3: "text-xl md:text-2xl font-bold text-primary",
            h4: "text-lg md:text-xl font-semibold text-primary",
            p: "text-primary/80 text-sm md:text-md lg:text-lg mt-5 max-w-lg sm:max-w-7xl",
        },
    },
    defaultVariants: {
        variant: "h3",
    },
}
)

export const  Headings = ({children, variant="h3", className}: headerClasses) => {
    const Tag = variant as keyof JSX.IntrinsicElements;
    return (
        <Tag className={twMerge(headerClasses({variant}), className)}>
           {children}
        </Tag>
    )
}