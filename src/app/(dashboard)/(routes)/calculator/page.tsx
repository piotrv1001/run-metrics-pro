import CalculatorItemCard from "@/components/calculator-item-card";
import { calculatorItems } from "@/lib/constants";

export default function CalculatorPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Calculator</h1>
      <ul className="flex flex-col space-y-4">
        {calculatorItems.map((item, index) => (
          <li key={index}>
            <CalculatorItemCard {...item} />
          </li>
        ))}
      </ul>
    </>
  )
}