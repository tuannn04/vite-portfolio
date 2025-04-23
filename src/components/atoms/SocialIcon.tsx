import HyperLink from "./HyperLink";
import Image from "./Image";

interface SocialIconProps extends React.HTMLAttributes<HTMLLIElement> {
    image: string,
    href: string
}

export default function SocialIcon({ image, href, ...props }: SocialIconProps) {
    return (
        <li {...props}>
            <HyperLink href={href} target="_blank">
                <Image src={image}/>
            </HyperLink>
        </li>
    );
}