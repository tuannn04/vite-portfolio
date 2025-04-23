import GeneralInfo from "../../constants/GeneralInfo";
import GradientTextCard from "../atoms/GradientTextCard";
import SocialCard from "./SocialCard";

export default () => {
    return (
        <div className={'w-full flex flex-col justify-around'}>
            <div className="flex flex-col gap-6">
                <GradientTextCard className="uppercase text-xs tracking-[0.125rem] font-semibold">
                    {GeneralInfo.role}
                </GradientTextCard>
                <div className="text-4xl sm:text-5xl">
                    {GeneralInfo.description}
                </div>
                <div className="text-lg">
                    {GeneralInfo.purpose}
                </div>
                <SocialCard/>
            </div>
        </div>
    )
}