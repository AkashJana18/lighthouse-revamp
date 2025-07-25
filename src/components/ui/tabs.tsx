"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-purple-950 text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Core layout and structure
        "inline-flex", // Makes the element an inline flex container
        "h-[calc(100%-1px)]", // Sets height to 100% minus 1px (often for border compensation)
        "flex-1", // Allows the element to grow/shrink to fill available space
        "items-center", // Vertically centers children in flex container
        "justify-center", // Horizontally centers children in flex container
        "gap-1.5", // Adds 0.375rem (6px) gap between child elements
        "whitespace-nowrap", // Prevents text from wrapping to new line
        "rounded-md", // Medium border-radius (6px typically)
        "border", // Adds a 1px border
        "border-transparent", // Makes border invisible by default
        "px-2 py-1", // Horizontal padding: 0.5rem (8px), Vertical: 0.25rem (4px)
        "text-sm", // Small text size (14px typically)
        "font-medium", // Medium font weight (500 typically)
        "transition-[color,box-shadow]", // Smooth transitions for color and shadow changes
      
        // Text colors
        "text-foreground", // Default text color (light mode)
        "dark:text-muted-foreground", // Dark mode text color (bright yellow)
      
        // Active state styles
        "data-[state=active]:bg-yellow-100", // Light mode active background (pale yellow)
        "dark:data-[state=active]:bg-yellow-200", // Dark mode active background (dark yellow with 30% opacity)
        "data-[state=active]:text-yellow-900", // Light mode active text (dark yellow)
        "dark:data-[state=active]:text-black", // Dark mode active text (light yellow)
        "data-[state=active]:border-yellow-200", // Light mode active border (light yellow)
        "dark:data-[state=active]:border-yellow-600", // Dark mode active border (dark yellow)
        "data-[state=active]:shadow-yellow-200/50", // Light mode active shadow (yellow with 50% opacity)
        "dark:data-[state=active]:shadow-yellow-800/50", // Dark mode active shadow (dark yellow with 20% opacity)
      
        // Focus states (keyboard navigation)
        "focus-visible:outline-yellow-400", // Focus outline color (medium yellow)
        "focus-visible:ring-yellow-300/50", // Focus ring color (light yellow with 50% opacity)
      
        // Disabled state
        "disabled:pointer-events-none", // Disables pointer interactions when disabled
        "disabled:opacity-50", // Reduces opacity when disabled
      
        // SVG icon styling
        "[&_svg]:pointer-events-none", // Disables pointer events on child SVGs
        "[&_svg]:shrink-0", // Prevents SVG from shrinking
        "[&_svg:not([class*='size-'])]:size-4", // Default 1rem (16px) size for SVGs without size classes
      
        // Merges with any additional classes passed via props
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }

