"use client"

import { hexToHSL } from "@/lib/color-utils"
import { useState } from "react"

export default function ColorConverter() {
  const [hexValue, setHexValue] = useState("b70c0a")
  const variants = generateColorVariants(hexValue)

  const hslColor = hexToHSL(hexValue)
  // const color = `${hslColor.h} ${hslColor.s}% ${hslColor.l}%`

  const hex1 = hexToHSL(variants.lighter)
  const hsl1 = `${hex1.h} ${hex1.s}% ${hex1.l}%`

  const hex2 = hexToHSL(variants.original)
  const hsl2 = `${hex2.h} ${hex2.s}% ${hex2.l}%`

  const hex3 = hexToHSL(variants.darker)
  const hsl3 = `${hex3.h} ${hex3.s}% ${hex3.l}%`

  return (
    <>
      Hex: {hexValue}
      <br />
      hsl: {hslColor.v}
      <input
        className="rounded-md border-border bg-muted px-4 py-2"
        defaultValue={hexValue}
        value={hexValue}
        onChange={(e) => setHexValue(e.currentTarget.value)}
      />
      <div
        className="flex gap-2"
        style={
          {
            "--color-1": variants.lighter,
            "--color-2": variants.original,
            "--color-3": variants.darker,

            "--hsl-1": `hsl(${hsl1} / 1.0)`,
            "--hsl-2": `hsl(${hsl2} / 0.3)`,
            "--hsl-3": `hsl(${hsl3} / 0.3)`,
          } as React.CSSProperties
        }
      >
        <div className="h-24 w-24 rounded bg-[var(--color-1)]"></div>
        <div className="h-24 w-24 rounded bg-[var(--color-2)]"></div>
        <div className="h-24 w-24 rounded bg-[var(--color-3)]"></div>
        <div className="grid h-24 w-32 place-items-center rounded border border-[var(--hsl-2)] bg-[var(--hsl-3)] text-[var(--hsl-1)]">
          text
        </div>
      </div>
    </>
  )
}

function HSLToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }

  // Convert to hex
  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function generateColorVariants(
  hexColor: string,
  lighterBy: number = 15,
  darkerBy: number = 15
): {
  original: string
  lighter: string
  darker: string
} {
  const hsl = hexToHSL(hexColor)

  // Create lighter variant (increase lightness)
  const lighterVariant = {
    h: hsl.h,
    s: hsl.s,
    l: Math.min(100, hsl.l + lighterBy), // Ensure we don't exceed 100
  }

  // Create darker variant (decrease lightness)
  const darkerVariant = {
    h: hsl.h,
    s: hsl.s,
    l: Math.max(0, hsl.l - darkerBy), // Ensure we don't go below 0
  }

  // Remove the # if present
  const hex = hexColor.replace(/^#/, "")
  return {
    original: `#${hex}`,
    lighter: HSLToHex(lighterVariant.h, lighterVariant.s, lighterVariant.l),
    darker: HSLToHex(darkerVariant.h, darkerVariant.s, darkerVariant.l),
  }
}
