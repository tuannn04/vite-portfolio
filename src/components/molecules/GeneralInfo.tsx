import GeneralInfo from "../../constants/GeneralInfo";

export default () => {
    return (
        <div className={'w-[100%]'}>
            <ul>
                <li className="text-sm uppercase">
                    <h1>{GeneralInfo.role}</h1>
                </li>
            </ul>
        </div>
    )
}