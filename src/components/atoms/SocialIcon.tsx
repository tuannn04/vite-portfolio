import { cn } from "../../lib/utils";
import HyperLink from "./HyperLink";
import Image from "./Image";

interface SocialIconProps extends React.HTMLAttributes<HTMLLIElement>, Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
    image: string,
    href: string
}

export default function SocialIcon({ image, href, alt, className, ...props }: SocialIconProps) {
    return (
        <li {...props} className={cn("rounded-full bg-text h-full aspect-square", className)}>
            <HyperLink href={href} target="_blank" className="flex w-full h-full">
                <Image src={image} className="w-auto h-[50%] m-auto" alt={alt}/>
            </HyperLink>
        </li>
    );
}