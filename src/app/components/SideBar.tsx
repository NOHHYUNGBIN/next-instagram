import { AuthUser } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: AuthUser;
};
export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex item-center">
        {image && <Avatar image={image} size="medium" highlight={false} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About ▪ Help ▪ Press ▪ API ▪ Jobs ▪ Provacy ▪ Terms ▪ Location ▪
        Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright BEENSTAGRAM from nohhb
      </p>
    </>
  );
}
