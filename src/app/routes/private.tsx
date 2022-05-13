export const PrivateRoute = ({ children }: PrivateRouteType.Props) => {
  return <>{children}</>;
};

export declare namespace PrivateRouteType {
  export type Props = Child;
}
