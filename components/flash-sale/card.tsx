import {
  Button,
  Card,
  CardFooter,
  CardHeader
} from "@nextui-org/react";
import Image from "next/image";


export default function FlashSaleCard() {
  return (
    <Card isFooterBlurred className="w-[250px] bg-[#FC6736] shadow-none">
      <CardHeader className="flex-col items-start">
        <div className="rounded bg-white w-full h-[100px] relative overflow-hidden">
          <Image
            width={1080}
            height={720}
            alt="bandit-free-fire"
            className="object-cover"
            src={"/ff-bandit.jpg"}
          />
        </div>
        <p className="mt-2 font-bold uppercase text-[#FEFBF6] text-small flex w-full justify-between items-center px-1.5">
          <div className="relative w-6">
            <Image width={64} height={64} src={"/flash.png"} alt="flash" />{" "}
          </div>
          <span>1.000 DM</span>
        </p>
      </CardHeader>
      <CardFooter className="justify-between">
        <p className="text-tiny text-[#F2EFE5] font-bold">Free Fire</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Beli Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
}
