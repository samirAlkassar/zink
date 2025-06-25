import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";


interface subHeaderClasses extends VariantProps<typeof subHeaderClasses> {
    children: React.ReactNode;
    className?: string;
}

const subHeaderClasses = cva("text-primary/75 ", {
    variants: {
        variant: {
            p1: "text-md md:text-lg lg:text-xl max-w-lg sm:max-w-6xl",
            p2: "text-sm md:text-md lg:text-lg max-w-lg sm:max-w-6xl",
            p3: "text-xs md:text-sm lg:text-md max-w-sm",
        },
    },
    defaultVariants: {
        variant: "p2",
    },
}
)

export const  SubHeadings = ({children, variant="p2", className}: subHeaderClasses) => {
    return (
        <p className={twMerge(subHeaderClasses({variant}), className)}>
           {children}
        </p>
    )
}