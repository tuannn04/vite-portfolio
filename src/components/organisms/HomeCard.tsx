import Avatar from "../molecules/Avatar";
import GeneralInfo from "../molecules/GeneralInfo";
import Section from "../molecules/Section";


interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function HomeCard({className}: HomeCardProps) {
    return (
        <Section id="home" className={className}>
            <div className={"grid end-mobile:grid-cols-2"}>
                <div className="sm:max-w-[60cqw] end-mobile:max-w-[50cqw]">
                    <Avatar />
                </div>
                <GeneralInfo />
            </div>
        </Section>
    )
}
