import React from "react"
import { CSSObject } from "./index"

type CSSObjectFn<P> = (props: P) => CSSObject

type ApparentComponentProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
  ? JSX.LibraryManagedAttributes<C, P>
  : React.ComponentPropsWithRef<C>

declare module "cxs/component" {
  const cxsComponent: {
    <
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Component extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
      PropsType extends object | ApparentComponentProps<Component>
    >(
      component: Component
    ): (
      arg: CSSObject | CSSObjectFn<PropsType>
    ) => React.ComponentType<PropsType>
  }

  export default cxsComponent
}
