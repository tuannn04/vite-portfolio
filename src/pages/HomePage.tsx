import GeneralInfo from "../components/molecules/GeneralInfo";
import Avatar from "../components/molecules/Avatar";
import Section from "../components/molecules/Section";
import DesktopMenu from "../components/molecules/DesktopMenu";
import { useLocation } from "react-router-dom";
import useNavItems from "../hooks/useNavItems";
import { HomeCard } from "../components/organisms/HomeCard";

export default () => {
    const { pathname } = useLocation();
    const navItems = useNavItems(pathname);
    return (
        <div className={'w-full'}>
            <HomeCard className="pb-12"/>
            <DesktopMenu navItems={navItems} />
            
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <Avatar />
                <GeneralInfo />
            </div>
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