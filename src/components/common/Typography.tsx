import React from 'react';

// Define all possible variant types
type TypographyVariant =
    "h"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2"
    | "caption3"
    ;

// Map of variant styles
const variants: Record<TypographyVariant, string> = {
    h: "text-[52px] font-merriweather leading-[120%] text-primary",
    h1: "text-[49px] font-merriweather leading-[120%] text-accent-foreground",
    h2: "text-[43px] font-merriweather leading-[120%]",
    h3: "text-[37px] font-merriweather leading-[120%]",
    h4: "text-[32px] font-merriweather leading-[120%]",
    h5: "text-[28px] font-lato leading-[120%]",
    h6: "text-[24px] font-lato leading-[120%]",
    h7: "text-[21px] font-lato leading-[150%]",
    body1: "text-[18px] font-lato leading-[160%]",
    body2: "text-[16px] font-lato leading-[160%]",
    body3: "text-[14px] font-lato leading-[130%]",
    caption1: "text-[12px] font-lato leading-[120%]",
    caption2: "text-[10px] font-lato leading-[120%]",
    caption3: "text-[8px] font-lato leading-[120%]",

    // lead: "text-xl text-muted-foreground",
    // large: "text-lg font-semibold",
    // small: "text-sm font-medium leading-none",
    // muted: "text-sm text-muted-foreground",
    // blockquote: "mt-6 border-l-2 pl-6 italic",
    // list: "my-6 ml-6 list-disc [&>li]:mt-2",
    // inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    // code: "relative rounded bg-muted p-4 font-mono text-sm font-semibold"
};

// Default HTML element mapping for variants
const defaultElementMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    // TODO: fix element mapping 
    h: "h1",
    h1: "h2",
    h2: "h3",
    h3: "h4",
    h4: "h5",
    h5: "h6",
    h6: "span",
    h7: "span",
    caption1: "p",
    caption2: "p",
    caption3: "p",
    body1: "p",
    body2: "p",
    body3: "p",

    // p: "p",
    // lead: "p",
    // large: "div",
    // small: "small",
    // muted: "p",
    // blockquote: "blockquote",
    // list: "ul",
    // inlineCode: "code",
    // code: "pre"
};

type TypographyWeight = "regular" | "medium" | "bold"

const weights: Record<TypographyWeight, string> = {
   bold:"font-bold",
   regular:"font-normal",
   medium:"font-medium"
};

interface TypographyProps {
    variant: TypographyVariant;
    weight?:TypographyWeight
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;  // Allow any additional props
}

const Typography = ({
    variant,
    children,
    className = "",
    as,
    weight = "medium",
    ...props
}: TypographyProps): JSX.Element => {
    const Component = as || defaultElementMap[variant];

    return (
        <Component
            className={`${variants[variant]} ${weights[weight]} ${className} `}
            {...props}
        >
            {children}
        </Component>
    );
};

export { Typography };