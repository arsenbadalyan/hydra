// importing icons
import { locationIcon, callIcon, mailIcon } from "./icons";

// Data interfaces
type imgType = typeof locationIcon;

interface IInfoBarItem {
    icon: imgType,
    title: string,
    text: string
};

// List of Bar info items
const infoBarData:IInfoBarItem[] = [
    {
        icon: locationIcon,
        title: "Pay Us a Visit",
        text: "Union St, Seattle, WA 98101, United States"
    },
    {
        icon: callIcon,
        title: "Give Us a Call",
        text: "(110) 1111-1010"
    },
    {
        icon: mailIcon,
        title: "Send Us a Message",
        text: "Contact@HydraVTech.com"
    }
];

export default infoBarData;