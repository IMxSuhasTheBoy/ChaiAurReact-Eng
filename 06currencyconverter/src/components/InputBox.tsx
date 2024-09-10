import { useId } from "react";

interface Props {
  label: string;
  amount: number;
  onAmountChange?: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  selectedCurrency: string;
  amountDisabled?: boolean;
  currrencyDisabled?: boolean;
  className?: string;
}
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currrencyDisabled = false,
  className = "",
}: Props) {
  const id = useId();

  return (
    <div
      className={`flex py-4 px-3 rounded-lg shadow-md md:text-xl sm:text-sm font-normal tracking-wider bg-slate-200/20 text-black ${className}`}
    >
      {/* input box (From/To lable value)  -  left side */}
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
          {label}
        </label>

        <input
          className="w-full bg-transparent py-1.5"
          id={id}
          type="number"
          // placeholder="Amount"
          value={amount > 0 ? amount : 1}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* select box  -  right side */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Type</p>

        <select
          className="rounded-lg px-1 py-1 cursor-pointer outline-none bg-slate-300/30 shadow-sm"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currrencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
