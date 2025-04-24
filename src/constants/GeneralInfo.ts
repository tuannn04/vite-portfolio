import Avatar from "../assets/avatar-black-white.png";

type GeneralInfoObject = {
    [key: string]: any
}

const GeneralInfo: GeneralInfoObject = {
    name: 'John Doe',
    avatar: Avatar,
    role: "This is the long role",
    description: "This is a short description describe a little bit your-self",
    purpose: 'This is your personal purpose, it should be shown in 2 lines on mobile'
}

export default GeneralInfo;