import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaCode,
  FaSave,
  FaAtlas,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    amiga: FaCode,
    sega: FaSave,
    "3do": FaAtlas,
  };

  return (
    <HStack alignItems={"center"} marginY={2}>
      {platforms.map((platform) => (
        <Icon
          fontSize={"16px"}
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
