<<<<<<< HEAD
=======
import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
<<<<<<< HEAD
  {
    name: "Tennis",
    imgUrl: "category-tennis.png",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.png",
  },
];

const CategoriesSection = () => {
=======
];

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
<<<<<<< HEAD
        {categoryList.map((category, index) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
=======
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
                width={86}
                height="86"
                alt={category.name}
                className="mb-[10px]"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default CategoriesSection;
=======
export default CategoriesSection;
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
