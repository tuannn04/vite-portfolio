import GeneralInfo from "../components/molecules/GeneralInfo";
import Avatar from "../components/molecules/Avatar";
import Section from "../components/organisms/Section";

export default () => {
    return (
        <div className={'w-full'}>
            <Section id={'info'}>
                <div className={"grid sm:grid-cols-2"}>
                    <div className="max-w-[60%]">
                        <Avatar />
                    </div>
                    <GeneralInfo />
                </div>
            </Section>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <Section id={'about'}>
                <div className={"grid sm:grid-cols-2"}>
                    <Avatar />
                    <GeneralInfo />
                </div>
            </Section>
            <div>
                This is the Details
            </div>
        </div>
    )
}