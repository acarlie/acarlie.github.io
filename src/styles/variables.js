// BEM format: g__elementName_modifierName

const styleTokens = {
    colors: {
        g__text: "#222222",
        g__text_onDark: "#E4E4E4",
        g__heading: "#747791",
        g__background_dark: "#20244C",
        g__background_light: "#FFFFFF",
    },
    fonts: {
        g__fontSize: "16px",
        g__fontFamily_heading: "'Montserrat', sans-serif",
        g__fontFamily_text: "'Montserrat', sans-serif",
        g__lineHeight_heading: "1.25",
        g__lineHeight_text: "1.5",
        g__text: {
            fontFamily: this.fonts.g__fontFamily_text,
            fontSize: "1rem",
            color: this.color.g__text,
            lineHeight: this.fonts.g__lineHeight_text
        },
        g__text_large: {
            fontFamily: this.fonts.g__fontFamily_text,
            fontSize: "1.5rem",
            color: this.color.g__text,
            lineHeight: this.fonts.g__lineHeight_text
        },
        g__heading_h2: {
            font_family: this.fonts.g__fontFamily_heading,
            fontSize: "3rem",
            color: this.color.g__heading,
            lineHeight: this.fonts.g__lineHeight_heading
        },
        g__heading_h6: {
            font_family: this.fonts.g__fontFamily_heading,
            fontSize: 14 / this.fonts.g__fontSize + "rem",
            color: this.color.g__heading,
            lineHeight: this.fonts.g__lineHeight_heading
        }
    },
    size: {

    }
}

export default styleTokens;