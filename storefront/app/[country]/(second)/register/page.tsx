// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

// Assets
import registerImage from "@/public/assets/images/register.png";

export default function Page() {
  return (
    <>
      <div className="mt-21 flex h-full">
        <div className="register-image hidden w-1/2 md:block">
          <Image
            height={816}
            width={720}
            src={registerImage}
            priority
            alt="register-image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full max-w-6xl justify-center md:w-1/2">
          <div className="m-8 flex w-full max-w-96 flex-col gap-6 md:gap-8 lg:mt-16">
            <h2 className="text-xl lg:mb-8 lg:text-4xl">
              Hey, welcome to Sofa Society!
            </h2>
            <div className="flex flex-col gap-6 md:flex-row">
              <Input label="First name" className="md:w-1/2" />
              <Input label="Last name" className="md:w-1/2" />
            </div>
            <Input label="Email" />
            <Input label="Password" />
            <Input label="Confirm password" />
            <Button className="mb-8 w-full py-3">Register</Button>
            <p className="text-grayscale-500">
              Already have an account? No worries, just{" "}
              <Link
                className="text-black underline underline-offset-4"
                href={"/log-in"}
              >
                log in.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
