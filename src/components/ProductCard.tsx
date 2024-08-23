function ProductCard({ ...props }) {
  const { title, image, price, description, color } = props;
  return (
    <div
      className={`w-[170px] h-[224px] rounded-2xl shadow-black shadow-3xl cursor-pointer hover:shadow-4xl transition-all duration-300 pt-2`}
    >
      <div className="cardImageDiv">
        <div className="overflow-hidden">
          <h2 className="text-sm font-bold text-center truncate">
            {title.length < 20 ? title : title.substring(0, 20)}
          </h2>
        </div>
        <img
          className="h-[100px] w-[100px] my-2"
          src={image}
          alt="mens-cloth-img"
        />
      </div>
      <div className={`rounded-2xl h-[80px] ${color} px-4`}>
        <h2 className="text-xl font-bold text-center text-blue-600">{price}</h2>
        <p className="text-xs font-medium text-center truncate">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
