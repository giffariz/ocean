import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const leagueSpartanClass = leagueSpartan.className;