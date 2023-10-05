import {MaterialIcons, AntDesign, Entypo} from "@expo/vector-icons";
import {colors} from "../../assets/styles/globalStyles";

const Icon = {
    transfer: <MaterialIcons name="compare-arrows" size={20} color={colors.gray}/>,
    down: <AntDesign name="caretdown" size={24} color="black"/>,
    left: <Entypo name="arrow-left" size={24} color="black"/>
}


const iconDetails = [
    {family: "AntDesign", color: "blue", icons: ["wallet"]},
    {family: "Entypo", color: "blue", icons: ["wallet"]},
    {family: "FontAwesome", color: "blue", icons: ["google-wallet"]},
    {family: "FontAwesome5", color: "blue", icons: ["wallet"]},
    {family: "Fontisto", color: "blue", icons: ["wallet"]},
    {family: "MaterialCommunityIcons", color: "blue", icons: ["wallet-membership"]},
    {family: "MaterialIcons", color: "blue", icons: ["wallet-travel"]},
];

export {Icon, iconDetails}
