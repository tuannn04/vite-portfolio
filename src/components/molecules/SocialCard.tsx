import SocialIcon from "../atoms/SocialIcon";
import SocialNetworkConstant from "../../constants/SocialNetwork";

interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function SocialCard({ className }: SocialCardProps) {
    return (
        <div className={className}>
            <ul className="flex flex-row gap-2 h-10">
                {
                    SocialNetworkConstant.map((item) => {
                        return <SocialIcon image={item.image} href={item.href}/>
                    })
                }
            </ul>
        </div>
    )
}