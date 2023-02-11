import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-great-blue-900 text-gray-300 flex justify-end p-4 mx-auto max-w-screen-2xl ">
      <div className="flex space-x-6">
        <Image src={"/assets/github.png"} height={30} width={30} alt="github" />
        <Image
          src={"/assets/twitter.png"}
          height={30}
          width={30}
          alt="github"
        />
        <Image
          src={"/assets/instagram.png"}
          height={30}
          width={30}
          alt="github"
        />
        <Image
          src={"/assets/linkedin.png"}
          height={30}
          width={30}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Navbar;
