import Avatar from "../molecules/Avatar";
import GeneralInfo from "../molecules/GeneralInfo";
import Section from "../molecules/Section";


interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function HomeCard({className}: HomeCardProps) {
    return (
        <Section id="home" className={className}>
            <div className={"grid lg:grid-cols-2"}>
                <div className="max-w-[60%]">
                    <Avatar />
                </div>
                <GeneralInfo />
            </div>
        </Section>
    )
}
