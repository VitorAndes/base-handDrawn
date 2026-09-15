import HotBeverage from "../assets/icons/hotBeverage.svg";
import OpenBook from "../assets/icons/openBook.svg";
import Palette from "../assets/icons/palette.svg";
import Pencil from "../assets/icons/pencil.svg";

export const profile = {
  name: "user_name",
  profession: [{name: "profession", separator: false}, {name: " profession ", separator: true}, {name: " profession ", separator: false}],
  badges: [{icon: Pencil,name: "badge", inverted: false}, {icon :Palette ,name: "badge", inverted: false}, {icon: OpenBook,name: "badge", inverted: false}, {icon: HotBeverage,name: "badge", inverted: true}],

}
