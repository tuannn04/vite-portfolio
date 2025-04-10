import GeneralInfo from "../constants/GeneralInfo";

export default () => {
    return (
        <div className={'w-[100%]'}>
            <ul>
                {
                    Object.keys(GeneralInfo).map(key => {
                        return (
                            <li key={key}>
                                <span className={'font-bold capitalize'}>{key}: </span>
                                <span>{GeneralInfo[key]}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}