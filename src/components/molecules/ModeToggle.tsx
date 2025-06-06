import DarkModeImg from "../../assets/dark-mode.svg";
import LightModeImg from "../../assets/light-mode.svg";
import { useThemeContext } from "../../context/ThemeContext";
import Image from "../atoms/Image";

export default function ModeToggle() {
    const { toggleMode } = useThemeContext();
    
    return (
        <button className="flex items-center w-12 h-6 bg-text br rounded-full" onClick={toggleMode}>
            <span className="rounded-xl bg-main w-4 h-4 relative ml-1 dark:ml-7 duration-300">
                <span className="w-3 h-3 block absolute left-[20%] dark:left-[5%] top-[5%] dark:top-[20%]">
                    <Image src={LightModeImg} className={"block dark:hidden"} />
                    <Image src={DarkModeImg} className="hidden dark:block" />
                </span>
            </span>
        </button>
    )
}