import GeneralInfo from "../components/GeneralInfo.tsx";
import Avatar from "../components/Avatar.tsx";

export default () => {
    return (
        <div className={'w-full'}>
            <div className={"grid sm:grid-cols-2"}>
                <GeneralInfo/>
                <Avatar/>
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <GeneralInfo/>
                <Avatar/>
            </div>
            <div className={"grid sm:grid-cols-2"}>
                <GeneralInfo/>
                <Avatar/>
            </div>
            <div>
                This is the Details
            </div>
        </div>
    )
}