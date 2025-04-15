import GeneralInfo from "../../constants/GeneralInfo";
import Image from "../atoms/Image";

export default (): React.ReactNode => {
    return (
        <div className={'w-[100%]'}>
            <div className={"w-full"}>
                <Image src={GeneralInfo.avatar} alt="Avatar"/>
            </div>
        </div>
    )
}