import { StackNavigationProp } from "@react-navigation/stack"

export enum Routes {
    Login = "Login",
    Home = "Home",
    Countries = "Countries"
}

export type MainStackList = {
    [Routes.Login]: undefined;
    [Routes.Home]: undefined;
    [Routes.Countries]: undefined;
}

export type MainNavigationProp<RouteName extends keyof MainStackList = Routes> =
    StackNavigationProp<MainStackList, RouteName>
