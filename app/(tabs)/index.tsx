import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";

export default function Index() {
  return (
    <Box className="flex-1 items-center bg-[#25292e]">
      <Box className="flex-1">
        <Image
          className="w-80 h-[440px] rounded-2xl"
          alt="background-image"
          size="full"
          source={require("@/assets/images/background-image.png")}
        />
      </Box>
    </Box>
  );
}
