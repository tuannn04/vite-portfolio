import { cn } from "../../lib/utils";
import HyperLink from "./HyperLink";
import Image from "./Image";

interface SocialIconProps extends React.HTMLAttributes<HTMLLIElement> {
    image: string,
    href: string
}

export default function SocialIcon({ image, href, className, ...props }: SocialIconProps) {
    return (
        <li {...props} className={cn("rounded-full bg-text w-10 h-10", className)}>
            <HyperLink href={href} target="_blank" className="flex w-full h-full">
                <Image src={image} className="w-auto h-[50%] m-auto"/>
            </HyperLink>
        </li>
    );
}