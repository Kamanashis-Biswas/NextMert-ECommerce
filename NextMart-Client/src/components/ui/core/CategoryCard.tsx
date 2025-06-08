import { ICategory } from "@/types";
import Image from "next/image";

const fallbackIcon = "/file.svg"; // public ফোল্ডারে একটি fallback ছবি রাখো

const CategoryCard = ({ category }: { category: ICategory }) => {
  const iconSrc =
    category?.icon && category.icon.trim() !== ""
      ? category.icon
      : fallbackIcon;

  return (
    <div className="bg-white bg-opacity-50 border-2 border-white rounded-2xl text-center p-6 h-44">
      <div className="w-24 h-24 mx-auto">
        <Image
          src={iconSrc}
          width={96}
          height={96}
          alt="category icon"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold truncate mt-3">{category?.name}</h3>
    </div>
  );
};

export default CategoryCard;
