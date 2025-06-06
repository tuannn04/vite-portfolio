import GeneralInfo from "../../constants/GeneralInfo";
import Image from "../atoms/Image";

export default (): React.ReactNode => {
    return (
        <div className={'w-full'}>
            <Image src={GeneralInfo.avatar} alt="Avatar" className="rounded-full" />
        </div>
    )
}