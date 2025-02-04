import React from 'react';
import {twMerge} from "tailwind-merge";

const Circle = ({
                    className,
                    children,
                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
       <p className={twMerge( "text-sm lg:text-base font-normal text-secondary",
           className)}> {children}

       </p>
    );
};

export default Circle;