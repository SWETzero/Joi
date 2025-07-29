import { GlobalThemeOverrides } from "naive-ui";

export const lightThemeOverrides: GlobalThemeOverrides = {
	common: {
		primaryColor: "#000000"
	}
	// ...
};

export const darkThemeOverrides: GlobalThemeOverrides = {
	common: {
		popoverColor: "rgba(18, 18, 18,  0.75)",
		fontFamily: "NotoSansSC-Regular",
		textColorBase: "#fff",
		textColor1: "rgba(255, 255, 255, 0.9)",
		textColor2: "rgba(255, 255, 255, 0.82)",
		textColor3: "rgba(255, 255, 255, 0.52)",
		textColorDisabled: "rgba(255, 255, 255, 0.38)",
		primaryColor: "rgba(239,143,95,0.81)",
		primaryColorHover: "rgba(255,121,53,0.76)",
		primaryColorPressed: "rgb(239,143,95)",
		primaryColorSuppl: "rgb(239,143,95)",
		fontSize: "14px"
	},
	Button: {
		colorPrimary: "rgba(246,125,65,0.76)",
		textColorPrimary: "#fff",
		textColorHoverPrimary: "rgba(255,255,255,0.75)",
		textColorPressedPrimary: "#fff",
		textColorFocusPrimary: "#fff",
		textColorDisabledPrimary: "#fff",
		textColorTextError: "#fff",
		textColorError: "#fff",
		textColorHoverError: "#fff",
		textColorPressedError: "#fff",
		textColorFocusError: "#fff",
		textColorWarning: "#fff",
		textColorHoverWarning: "#fff"
	},
	Message: {
		colorInfo: "rgba(18, 18, 18,  0.75)"
	},
	Dialog: {
		color: "rgba(52,52,52,0.75)"
	},
	Descriptions: {
		tdColor: "rgba(38, 38, 42, 0.1)",
		thColor: "rgba(38, 38, 42, 0.6)",
		borderColor: "rgba(255,255,255,0.1)"
	},
    DataTable:{
		tdColor: "rgba(38, 38, 42, 0.1)",
		thColor: "rgba(38,38,42,0.3)",
		borderColor: "rgba(255,255,255,0.1)"
	},
	List: {
		liColor: "rgba(38, 38, 42, 0.1)",
		ulColor: "rgba(38, 38, 42, 0.6)",
		borderColor: "rgba(255,255,255,0.1)"
    }
	// ...
};
