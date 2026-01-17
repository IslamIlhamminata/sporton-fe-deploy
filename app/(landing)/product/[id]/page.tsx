import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
<<<<<<< HEAD

const ProductDetail = () => {
=======
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;

  const product = await getProductDetail(id);

>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
  return (
    <main className="container mx-auto py-40 flex gap-12">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
<<<<<<< HEAD
          src="/images/products/product-4.png"
          width={550}
          height={550}
          alt="product 4 image"
=======
          src={getImageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7">
<<<<<<< HEAD
        <h1 className="font-bold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
          Football
        </div>
        <p className="lending-loose mb-8">
          The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don't just perform—they make a statement. Experience the
          future of football footwear with v2's enhanced fit and cutting-edge
          traction.
        </p>
        <div className="text-primary text-[32px] font-semibold mb-12">
          {priceFormatter(458000)}
        </div>
        <ProductActions />
=======
        <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
          {product.category.name}
        </div>
        <p className="lending-loose mb-8">{product.description}</p>
        <div className="text-primary text-[32px] font-semibold mb-12">
          {priceFormatter(product.price)}
        </div>
        <ProductActions product={product} stock={product.stock} />
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
      </div>
    </main>
  );
};

export default ProductDetail;
