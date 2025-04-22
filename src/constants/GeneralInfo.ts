import Avatar from "../assets/black-square.png";

type GeneralInfoObject = {
    [key: string]: any
}

const GeneralInfo: GeneralInfoObject = {
    name: 'John Doe',
    avatar: Avatar,
    role: "This is the role",
    description: "This is a short description describe a little bit your-self"
}

export default GeneralInfo;