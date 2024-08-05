import { Airbnb, hosting, support } from "../utils/constant";

const FooterSupport = () => {
  return (
    <div className="grid mg:grid-cols-2 lg:grid-cols-3 border-b p-5">
      <div className="">
        <h1 className="text-[14px] font-bold">Support</h1>
        {support.map((item, index) => (
          <p key={index} className="text-[14px] font-thin my-2 hover:underline tracking-wide">{item}</p>
        ))}
      </div>
      <div className="">
        <h1 className="text-[14px] font-bold">Hosting</h1>
        {hosting.map((item, index) => (
          <p key={index} className="text-[14px] font-thin my-2 hover:underline tracking-wide">{item}</p>
        ))}
      </div>
      <div className="">
        <h1 className="text-[14px] font-bold">Airbnb</h1>
        {Airbnb.map((item, index) => (
          <p key={index} className="text-[14px] font-thin hover:underline tracking-wide">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterSupport;
