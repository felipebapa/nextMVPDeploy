import SvgColor from "@/components/images/svgColor";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

export interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const navConfig: Array<INavItem> = [
  {
    title: "Your Report & Analytics",
    path: "/",
    icon: icon("ic_analytics"),
  },
  {
    title: "Detail View",
    path: "/user",
    icon: icon("ic_user"),
  },
  {
    title: "Drone path & Simulation",
    path: "/products",
    icon: icon("ic_cart"),
  },
  {
    title: "Groovy Action Plans",
    path: "/blog",
    icon: icon("ic_blog"),
  },
  {
    title: "Help",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Exit",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];
