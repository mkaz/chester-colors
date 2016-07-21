const black = '#242A36';
const red = '#DC221A';
const green = '#16C98D';
const yellow = '#FEEF6D';
const blue = '#288AD6';
const magenta = '#FF708E';
const cyan = '#0FDEBD';
const gray = '#898E95'
const white = '#E4E4E4';

const foreground = white;
const background = black;

const border = black;
const cursor = '#3c4043';

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor: background,
        foregroundColor: foreground,
        borderColor: border,
        cursorColor: cursor,

        colors: [
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            gray,

            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            gray,
            white
        ],
        css: `
            ${config.css || ''}
            .tab_tab {
                background-color: #3B444F;
            }
            .tab_active {
                background-color: #1D508D;
            }
        `
    });
};
