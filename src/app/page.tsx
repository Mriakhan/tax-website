import Image from "next/image";
import Header from "./component/header";
import Herosection from "./component/herosection";
import Saving from "./component/saving";

export default function Home() {
  return (
    <>
      < Header />
      < Herosection />
      <Saving />
    </>
  );
}
