import React from "react"

export interface RouterType {
  route: string
  component: () => Promise<{ default: React.ComponentType<any> }>
}

export type LazyComponentType = React.LazyExoticComponent<
  React.ComponentType<any>
>
