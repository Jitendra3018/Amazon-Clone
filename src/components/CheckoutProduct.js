import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        // Push Items into the redux
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        // Remove the item from the redux
        dispatch(removeFromBasket({ id }));
    };

    return (
        <div className="grid grid-cols-5">
            {/* Left */}
            <Image src={image} width={200} objectFit="contain" height={200} />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon className="h-5 text-yellow-500" />
                        ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="INR" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://links.papareact.com/fdw"
                            className="w-12"
                            loading="lazy"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">
                            FREE Nex-day Delivery
                        </p>
                    </div>
                )}
            </div>

            {/* Right */}
            <div className="flex flex-col items-center justify-center space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">
                    {/* <MinusIcon className="h-6 " />
                    <p>0</p>
                    <PlusIcon
                        onClick={addItemToBasket}
                        className="h-6"
                    /> */}
                    Add to Basket
                </button>
                <button className="button" onClick={removeItemFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
