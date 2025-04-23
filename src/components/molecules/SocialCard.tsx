import SocialIcon from "../atoms/SocialIcon";
import SocialNetworkConstant from "../../constants/SocialNetwork";

interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function SocialCard({ className }: SocialCardProps) {
    return (
        <div className={className}>
            <ul className="block relative">
                {
                    SocialNetworkConstant.map((item) => {
                        return <SocialIcon image={item.image} href={item.href} className={"w-8 h-8"}/>
                    })
                }
            </ul>
        </div>
    )
}