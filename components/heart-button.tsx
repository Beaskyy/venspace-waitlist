import { Heart } from "lucide-react";
import { useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const HeartButton = () => {
  const [hasFavourited, setHasFavourited] = useState(false);

  const toggleFavourite = () => {
    setHasFavourited(!hasFavourited);
  };
  return (
    <div
      onClick={toggleFavourite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <Heart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <Heart
        size={24}
        className={`${hasFavourited ? "fill-rose-500" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};
