import React from "react"

interface CounterViewProps {
  count?: number
  title?: string
}

interface ProgressBarProps {
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({className}) => {
  return (
    <div
      className={`h-[5px] rounded-full w-full bg-slate-900 opacity-20 ${className}`}
    ></div>
  )
}

const CounterView: React.FC<CounterViewProps> = ({
  count = 2,
  title = "Default",
}) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-x-2 pb-3">
          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-slate-200 leading-4 text-xs font-semibold">
            {count}
          </div>
          <div className="font-medium text-slate-800">{title}</div>
        </div>
        <div className="flex gap-x-[0.2rem]">
          {[...Array(5)].map((_, index) => (
            <ProgressBar
              key={index}
              className={index < count ? "opacity-95" : ""}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CounterView
