import Feature from "./Feature";

const PriceOption = ({option}) => {
    const {name,price,features} = option
    return (
        <div className="bg-sky-500 p-4 rounded-md mt-4 flex flex-col">
           <h2 className="text-center ">
            <span className="text-7xl">{price}</span>
            <span className="text-2xl">/month</span>
            </h2> 
            <h4 className="text-3xl text-center pt-4">{name}</h4>
          <div className="pl-6 pt-6 flex-grow">
          {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
          </div>
          <button className="w-full py-2 font-bold bg-green-500 mt-10 rounded-lg hover:bg-green-700">Buy now</button>
        </div>
    );
};

export default PriceOption;