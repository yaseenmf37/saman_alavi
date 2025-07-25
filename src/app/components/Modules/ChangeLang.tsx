import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import iranFlag from "../../../../public/images/iran.png";
import usaFlag from "../../../../public/images/usa.png";
import { usePathname, useRouter } from "next/navigation";
const ChangeLang = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLangHandler = (newLang) => {
    console.log(newLang);
    // Split the pathname by '/' and take the last segment
    const segments = pathname.split("/");

    if (segments[1] === "fa") {
      segments[1] = "en"; // Replace 'fa' with 'en'
      const newPath = segments.join("/");
      router.push(newPath);
    } else {
      segments[1] = "fa"; // Replace 'en' with 'fa'
      const newPath = segments.join("/");
      router.push(newPath);
    }
  };
  return (
    <div className="flagContainer bg-[#fff] rounded-xl rounded-[4px]">
      <Menu>
        <MenuButton
          as={Button}
          background="none"
          rightIcon={<MdKeyboardArrowDown />}
        >
          <Image
            width={38}
            height={38}
            src={locale === "en" ? usaFlag : iranFlag}
            alt={locale === "en" ? "English" : "Persian"}
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            isDisabled={locale === "en" && true}
            minH="48px"
            onClick={() => changeLangHandler("en")}
          >
            <Image width={38} height={38} src={usaFlag} alt="usa-flag" />
            <span className="text-[#000]">English</span>
          </MenuItem>
          <MenuItem
            isDisabled={locale === "fa" && true}
            minH="48px"
            onClick={() => changeLangHandler("fa")}
          >
            <Image width={38} height={38} src={iranFlag} alt="ir_flag" />
            <span className="text-[#000]">فارسی</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ChangeLang;
