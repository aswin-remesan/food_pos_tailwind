import requests from "../utils/requests";
import Image from "next/image";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav
      className="
        bg-white
        p-1
        sm:p-2
        z-40
        h-screen
        max-w-[600px]
        xl:min-w-[200px]
        shadow-lg"
    >
      <div>
        {Object.entries(requests).map(([key, { title, url, icon }]) => (
          <div
            key={key}
            className="
                flex flex-col
                text-[0.6rem]
                p-1
                sm:flex-row items-center
                sm:text-base
                
                active:bg-blue-200
                active:text-blue-500
                active:shadow
                
                sm:space-x-2 sm:p-4
                hover:bg-blue-200
                hover:text-white
                hover:shadow
                hover:animate-pulse
                
                rounded-xl
                cursor-pointer"
            onClick={() => router.push(`/?category=${key}`)}
          >
            <Image key={key} src={icon} width={30} height={30} alt={key} />

            <h2
              key={key}
              className="
                tracking-widest
                font-medium
                mt-1 mb-3
                sm:m-0"
            >
              {title}
            </h2>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
