import React from "react";

// Card data for both sections
const kitchenAccessories = [
  {
    img: "/bn.jpg", // Replace with your image paths
    label: "U - Shaped Kitchen",
  },
  {
    img: "/bn.jpg",
    label: "U - Shaped Kitchen",
  },
  {
    img: "/bn.jpg",
    label: "U - Shaped Kitchen",
  },
];

const cabinetAccs = [
  {
    img: "/bn.jpg",
    label: "U - Shaped Kitchen",
  },
  {
    img: "/bn.jpg",
    label: "U - Shaped Kitchen",
  },
  {
    img: "/bn.jpg",
    label: "U - Shaped Kitchen",
  },
];

const CardSection = ({
  title,
  subtitle,
  buttonText,
  cards,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  cards: typeof kitchenAccessories;
}) => (
  <section className="w-full py-12 bg-[#f1f2f6]">
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">{title}</h2>
      <p className="text-lg italic text-gray-500 mb-4 text-center">{subtitle}</p>
      <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold mb-6">{buttonText}</button>
    </div>
    <div className="flex flex-wrap gap-6 justify-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="w-[320px] bg-[#f1f2f6] rounded-3xl shadow-lg overflow-hidden group transition hover:shadow-2xl"
        >
          <img src={card.img} alt={card.label} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
          <div className="px-5 py-4">
            <div className="inline-block bg-gray-100 rounded-full text-gray-800 px-4 py-1 text-xs font-bold">
              {card.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ModularKitchenShowcase: React.FC = () => (
  <div className="bg-[#f9fafc] w-full">
    <CardSection
      title="Elevate Your"
      subtitle="Everyday Essentials."
      buttonText="Kitchen Accessories"
      cards={kitchenAccessories}
    />
    <CardSection
      title="Crafted to Organize"
      subtitle="Designed to Impress"
      buttonText="Cabinet"
      cards={cabinetAccs}
    />
  </div>
);

export default ModularKitchenShowcase;
