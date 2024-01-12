import CalculatorItemCard from "@/components/calculator-item-card";
import { calculatorItems } from "@/lib/constants";

export default function CalculatorPage() {
  return (
    <>
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