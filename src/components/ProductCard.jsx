export default function ProductCard(props) {
  // Format price to two decimal places
  const formattedPrice = props.price.toFixed(2);
  const formattedDiscountPrice = (props.price * (1 - props.discountPercentage / 100)).toFixed(2);
  
  return (
    <div className="overflow-hidden group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px] p-6">
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white">
        -{props.discountPercentage}%
      </div>

      <div>
        <img
          src={props.image}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-300 overflow-hidden"
        />
      </div>

      <h3 className="font-medium group-hover:text-primary transition-all duration-300">
        {props.name}
      </h3>

      <p className="text-sm">
        <span>${formattedPrice}</span>
        <span className="line-through text-gray-500"> ${formattedDiscountPrice}</span>
      </p>

      <div className="flex items-center">
        <span className="text-yellow-500">{props.rating.toFixed(2)} ★★★★★ </span>
      </div>
    </div>
  );
}
