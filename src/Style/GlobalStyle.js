import {GlobalStyles} from "@mui/material";

const inputGlobalStyles = (mode) => (
    <GlobalStyles
        styles={{
            ...(mode === "light"
                ? {}
                : {}),
            body: {
                margin: "0",
                padding: "0",
                backgroundColor: 'rgba(0,0,0,0.9) !important',
            },

            ".MuiListItem-root ": {
                padding: "0 !important"
            },
            ".MuiContainer-root": {},
            ".Mui-selected": {
                color: "#FF0000 !important"
            },
            ".MuiTouchRipple-root": {
                display: "none !important"
            },
            ".css-e9km3k-MuiTabs-root": {},
            ".css-17evscu-MuiButtonBase-root-MuiTab-root>.MuiTab-iconWrapper": {
                marginBottom: "30px !important"
            },
            ".MuiInput-root": {
                borderBottom: "3px solid transparent !important",
                transition: ".3s !important",
                '&::after': {
                    borderBottom: "3px solid transparent !important",
                    borderRadius: "10px !important"
                },
                '&::before': {
                    borderBottom: "0px !important"
                },
                '&:focus-within': {
                    borderBottom: "3px solid red !important",
                    borderRadius: "10px !important"
                },
            },
            ".MuiTabs-indicator": {
                backgroundColor: "transparent !important"
            }


        }}
    />
);

export default inputGlobalStyles;