import Typography from "typography";
import lincolnTheme from "typography-theme-lincoln";

lincolnTheme.omitGoogleFont = true;

const typography = new Typography(lincolnTheme);

export default typography;
export const rhythm = typography.rhythm;
