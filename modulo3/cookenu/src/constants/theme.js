import { createMuiTheme } from "@material-ui/core";
import { neutralColor, primaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: "white"
      },
      text: {
          primary: neutralColor
      }
    },
})

export default theme