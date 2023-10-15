"use client"

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

interface CurrencyProps {
  value?: string | number;
}

function Currency({ value }: CurrencyProps) {
  return (
    <div className="font-semibold">
      {formatter.format(Number(value))}
    </div>
  )
}

export default Currency