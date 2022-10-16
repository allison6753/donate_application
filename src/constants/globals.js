// Add colors and other types of values below for consistent use throughout app

// UI Colors
export const medium_blue = '#2699FB';
export const light_blue = '#c0e2fd';
export const lightest_blue = '#eff8ff';
export const gray = '#bebebe';
export const dark_gray = '#797979';
export const pink = '#ff98d0'; //for example
export const white = '#fffcfc';

export function globalScreen(backgroundColor) {
    return (
        {
            backgroundColor: backgroundColor,
            alignItems: "center",
            height: "100%",
            width: "100%",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    );
}

export function globalInput(backgroundColor, borderColor, color) {
    return (
        {
            paddingHorizontal: "3%",
            paddingVertical: "3%",
            marginTop: "3%",
            backgroundColor: backgroundColor,
            borderRadius: "25%",
            borderWidth: "3%",
            borderColor: borderColor,
            color: color
        }
    );
}