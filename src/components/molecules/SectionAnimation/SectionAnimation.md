**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
 <SectionAnimation
    background="url('https://images.unsplash.com/photo-1530099486328-e021101a494a')"
    keyFrames="{0% { transform: rotate(-13deg) translateY(-25%); } 100% { transform: rotate(-13deg) translateY(-80%); }" />
</ThemeProvider>