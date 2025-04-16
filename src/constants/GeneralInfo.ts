import Avatar from "../assets/black-square.png";

type GeneralInfoObject = {
    [key: string]: any
}

const GeneralInfo: GeneralInfoObject = {
    name: 'John Doe',
    avatar: Avatar,
    role: "Developer"
}

export default GeneralInfo;