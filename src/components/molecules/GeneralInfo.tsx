import GeneralInfo from "../../constants/GeneralInfo";

export default () => {
    return (
        <div className={'w-full flex flex-col justify-around'}>
            <div className="flex flex-col gap-6">
                <div className="bg-[image:var(--color-special)] bg-clip-text text-transparent">
                    {GeneralInfo.role}
                </div>
                <div className="text-5xl">
                    {GeneralInfo.description}
                </div>
            </div>
        </div>
    )
}