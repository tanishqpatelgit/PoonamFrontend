import * as React from "react"
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/utils"

// Props type
interface ChartTooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: any[]
  label?: any
  labelFormatter?: (label: any, payload: any) => ReactNode
  formatter?: (value: any, name: any, item: any, index: number, payload: any) => ReactNode
  color?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
  labelClassName?: string // ✅ added missing prop
}

// Component
export function ChartTooltipContent(props: ChartTooltipContentProps) {
  const {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
    ...rest
  } = props

  if (!active || !payload?.length) return null

  const item = payload[0]
  const tooltipLabel =
    typeof labelFormatter === "function" ? labelFormatter(label, payload) : label

  return (
    <div
      className={cn(
        "rounded-md border bg-background p-2 shadow-md",
        className
      )}
      {...rest}
    >
      {!hideLabel && tooltipLabel && (
        <div className={cn("mb-1 font-medium", labelClassName)}>
          {tooltipLabel}
        </div>
      )}
      {payload.map((entry, index) => {
        const entryName =
          nameKey && entry.payload?.[nameKey] !== undefined
            ? entry.payload[nameKey]
            : entry.name

        const entryValue =
          typeof formatter === "function"
            ? formatter(entry.value, entryName, entry, index, payload)
            : entry.value

        return (
          <div key={`item-${index}`} className="flex items-center gap-2">
            {!hideIndicator && (
              <span
                className={cn(
                  "inline-block size-2 rounded-full",
                  indicator === "line" && "h-0.5 w-3 rounded-none",
                  indicator === "dashed" &&
                    "h-0.5 w-3 rounded-none border-t border-dashed"
                )}
                style={{ backgroundColor: color || entry.color }}
              />
            )}
            <span className="text-sm text-muted-foreground">{entryName}</span>
            <span className="ml-auto font-medium">{entryValue}</span>
          </div>
        )
      })}
    </div>
  )
}
