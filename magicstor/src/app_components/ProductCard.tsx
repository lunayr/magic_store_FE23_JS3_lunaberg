import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StoreContext } from "@/context/ShopContext";
import { products } from "@/lib/products";
import { useContext } from "react";

const ProductCard = () => {
  const { addToBasket, filter } = useContext(StoreContext);
  return (
    <div className="flex-1 col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {products
        .filter((item) =>
          item.name.toUpperCase().includes(filter.toUpperCase())
        )
        .map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img
                className="aspect-video object-cover rounded-lg mb-4"
                src={product.image}
                alt="image"
              />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between sm:flex-row flex-col">
              <span className="font-semibold">{product.price} SEK</span>
              <div className="flex gap-2 md:flex-row flex-col">
                <Button variant="secondary">More..</Button>
                <Button
                  className="bg-emerald-700"
                  onClick={() => addToBasket(product.id)}
                >
                  Add to Card
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default ProductCard;
