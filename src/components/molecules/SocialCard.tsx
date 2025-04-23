import SocialIcon from "../atoms/SocialIcon";
import SocialNetworkConstant from "../../constants/SocialNetwork";

interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function SocialCard({ className }: SocialCardProps) {
    return (
        <div className={className}>
            <ul className="flex flex-row gap-3 h-10 end-mobile:h-12">
                {
                    SocialNetworkConstant.map((item, index) => {
                        return <SocialIcon key={index} image={item.image} href={item.href} alt={item.alt}/>
                    })
                }
            </ul>
        </div>
    )
}