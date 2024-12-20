import { colorToHex, HexToHSL } from "@api/Utils/Colors";

export const PrimarySatDiffs = {
    130: 63.9594,
    160: 49.4382,
    200: 37.5758,
    230: 30.3797,
    260: 22.5166,
    300: 32.5,
    330: 27.0968,
    345: 22.5166,
    360: 18.9189,
    400: -14.4,
    430: -33.0435,
    460: 25.2101,
    500: -11.0236,
    530: -3.0303,
    645: 7.40741,
    660: 3.0303,
    730: 11.9403,
    800: 25,
};

export const BrandSatDiffs = {
    100: -9.54712,
    130: 2.19526,
    160: -1.17509,
    200: -2.72351,
    230: 1.62225,
    260: 0.698487,
    300: 0.582411,
    330: -0.585823,
    345: -0.468384,
    360: 0.582411,
    400: 0.582411,
    430: 0.116754,
    460: -0.116891,
    530: -24.8194,
    560: -49.927,
    600: -58.8057,
    630: -58.8057,
    660: -58.0256,
    700: -58.2202,
    730: -58.6103,
    760: -58.4151,
    800: -57.2502,
    830: -57.4436,
    860: -58.4151,
    900: -52.5074
};

export const BrandLightDiffs = {
    100: 33.5,
    130: 32.2,
    160: 30.2,
    200: 28.2,
    230: 26.2999,
    260: 23.8999,
    300: 21.2,
    330: 16.8999,
    345: 14.0999,
    360: 12.7999,
    400: 7.0999,
    430: 5.0999,
    460: 2.7999,
    530: -5.9,
    560: -12.3,
    600: -20.6,
    630: -26.5,
    660: -31.4,
    700: -38.8,
    730: -40.4,
    760: -42.5,
    800: -45.3,
    830: -49.8,
    860: -55.1,
    900: -61.6
};

export function generateCss(colors: { accent?: string, primary?: string, secondary?: string, tertiary?: string; }, tintedText: boolean = true, discordSaturation: boolean = true, mutedTextBrightness?: number, name?: string) {
    colors.primary ??= "#313338";
    colors.secondary ??= "#2b2d31";
    colors.tertiary ??= "#1e1f22";
    colors.accent ??= "#ffffff";

    const primaryColor = colors.primary.replace("#", "");
    const secondaryColor = colors.secondary.replace("#", "");
    const tertiaryColor = colors.tertiary.replace("#", "");
    const accentColor = colors.accent.replace("#", "");
    return `:root:root {
    --brand-100-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[100])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[100]) * 10) / 10, 0)};
    --blurple-1-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[100])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[100]) * 10) / 10, 0)};
    --brand-130-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[130])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[130]) * 10) / 10, 0)}%;
    --brand-160-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[160])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[160]) * 10) / 10, 0)}%;
    --brand-200-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[200])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[200]) * 10) / 10, 0)}%;
    --blurple-2-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[200])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[200]) * 10) / 10, 0)}%;
    --brand-230-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[230])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[230]) * 10) / 10, 0)}%;
    --blurple-5-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[230])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[230]) * 10) / 10, 0)}%;
    --brand-260-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[260])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[260]) * 10) / 10, 0)}%;
    --blurple-8-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[260])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[260]) * 10) / 10, 0)}%;
    --brand-300-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[300])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[300]) * 10) / 10, 0)}%;
    --blurple-13-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[300])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[300]) * 10) / 10, 0)}%;
    --brand-330-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[330])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[330]) * 10) / 10, 0)}%;
    --blurple-19-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[330])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[330]) * 10) / 10, 0)}%;
    --brand-345-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[345])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[345]) * 10) / 10, 0)}%;
    --blurple-23-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[345])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[345]) * 10) / 10, 0)}%;
    --brand-360-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[360])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[360]) * 10) / 10, 0)}%;
    --blurple-26-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[360])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[360]) * 10) / 10, 0)}%;
    --brand-400-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[400])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[400]) * 10) / 10, 0)}%;
    --blurple-37-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[400])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[400]) * 10) / 10, 0)}%;
    --brand-430-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[430])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[430]) * 10) / 10, 0)}%;
    --blurple-40-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[430])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[430]) * 10) / 10, 0)}%;
    --brand-460-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[460])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[460]) * 10) / 10, 0)}%;
    --blurple-44-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[460])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[460]) * 10) / 10, 0)}%;
    --brand-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --blurple-50-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --brand-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[530])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[530]) * 10) / 10, 100)}%;
    --blurple-53-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[530])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[530]) * 10) / 10, 100)}%;
    --brand-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[560])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[560]) * 10) / 10, 100)}%;
    --blurple-56-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[560])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[560]) * 10) / 10, 100)}%;
    --brand-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[600])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[600]) * 10) / 10, 100)}%;
    --blurple-61-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[600])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[600]) * 10) / 10, 100)}%;
    --brand-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[630])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[630]) * 10) / 10, 100)}%;
    --blurple-64-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[630])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[630]) * 10) / 10, 100)}%;
    --brand-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[660])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[660]) * 10) / 10, 100)}%;
    --blurple-68-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[660])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[660]) * 10) / 10, 100)}%;
    --brand-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[700])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[700]) * 10) / 10, 100)}%;
    --blurple-73-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[700])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[700]) * 10) / 10, 100)}%;
    --brand-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[730])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[730]) * 10) / 10, 100)}%;
    --blurple-75-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[730])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[730]) * 10) / 10, 100)}%;
    --brand-760-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[760])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[760]) * 10) / 10, 100)}%;
    --blurple-77-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[760])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[760]) * 10) / 10, 100)}%;
    --brand-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[800])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[800]) * 10) / 10, 100)}%;
    --blurple-79-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[800])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[800]) * 10) / 10, 100)}%;
    --brand-830-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[830])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[830]) * 10) / 10, 100)}%;
    --blurple-83-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[830])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[830]) * 10) / 10, 100)}%;
    --brand-860-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[860])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[860]) * 10) / 10, 100)}%;
    --blurple-90-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[860])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[860]) * 10) / 10, 100)}%;
    --brand-900-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[900])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[900]) * 10) / 10, 100)}%;
    --blurple-99-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL("#" + accentColor)[1] / 100) * (100 + BrandSatDiffs[900])) * 10) / 10 : HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round((HexToHSL("#" + accentColor)[2] + BrandLightDiffs[900]) * 10) / 10, 100)}%;
}
.theme-dark {
    --primary-800-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%;
    --neutral-84-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%;
    --primary-730-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - 3.6, 0)}%;
    --neutral-77-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - 3.6, 0)}%;
    --primary-700-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%;
    --neutral-75-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%;
    --primary-660-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 3.6, 0)}%;
    --neutral-72-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 3.6, 0)}%;
    --primary-645-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 1.1, 0)}%;
    --neutral-68-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 1.1, 0)}%;
    --primary-630-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2]}%;
    --neutral-67-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2]}%;
    --neutral-66-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2] * 1.25}%;
    --primary-600-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%;
    --neutral-64-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1] - 1}%) ${HexToHSL("#" + primaryColor)[2] + 1}%;
    --neutral-63-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%;
    --primary-560-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 3.6, 100)}%;
    --neutral-60-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 3.6, 100)}%;
    --primary-530-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 2), 100)}%;
    --neutral-56-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 2), 100)}%;
    --primary-500-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${mutedTextBrightness || Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 3), 100)}%;
    --neutral-50-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${mutedTextBrightness || Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 3), 100)}%;
    --interactive-muted: hsl(${HexToHSL("#" + primaryColor)[0]} ${HexToHSL("#" + primaryColor)[1] / 2}% ${Math.max(Math.min(HexToHSL("#" + primaryColor)[2] - 5, 100), 45)}%);
    ${tintedText ? `--primary-460-hsl: 0 calc(var(--saturation-factor, 1)*0%) 50%;
    --neutral-44-hsl: 0 calc(var(--saturation-factor, 1)*0%) 50%;
    --primary-430: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[430])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};
    --neutral-36: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[430])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};
    --primary-400: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[400])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};
    --neutral-31: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[400])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};
    --primary-360: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[360])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};
    --neutral-24: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${discordSaturation ? Math.round(((HexToHSL(`#${primaryColor}`)[1] / 100) * (100 + PrimarySatDiffs[360])) * 10) / 10 : HexToHSL(`#${primaryColor}`)[1]}%), 90%)` : `hsl(${HexToHSL(`#${secondaryColor}`)[0]}, calc(var(--saturation-factor, 1)*100%), 20%)`)};` : ""}
}
.theme-darker {
    --neutral-69-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2] - 3.6}%;
    --neutral-75-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2] - 7.2}%;
    --neutral-76-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2] - 7.2}%;
    --neutral-78-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2] - 7.6}%;
    --neutral-83-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - 5.5, 0)}%;
}
.theme-light {
    --white-500-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 80, 90)}%;
    --primary-130-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 80, 85)}%;
    --neutral-3-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 80, 85)}%;
    --primary-160-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 76.4, 82.5)}%;
    --neutral-5-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 76.4, 82.5)}%;
    --primary-200-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + 80, 80)}%;
    --neutral-6-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + 80, 80)}%;
}
.emptyPage_c6b11b,
.scrollerContainer_c6b11b,
.container_f1fd9c,
.header_f1fd9c {
    background-color: unset !important;
}
.container_c2efea,
.container_f1fd9c,
.header_f1fd9c {
    background: transparent !important;
}${(Math.round(HexToHSL("#" + primaryColor)[2]) > 80) ? `\n\n/*Primary*/
.theme-dark .container_c2739c,
.theme-dark .body_cd82a7,
.theme-dark .toolbar_fc4f04,
.theme-dark .container_f0fccd,
.theme-dark .messageContent_f9f2ca,
.theme-dark .attachButtonPlus_f298d4,
.theme-dark .username_f9f2ca:not([style]),
.theme-dark .children_fc4f04,
.theme-dark .buttonContainer_f9f2ca,
.theme-dark .listItem_c96c45,
.theme-dark .body_cd82a7 .caret_fc4f04,
.theme-dark .body_cd82a7 .titleWrapper_fc4f04 > h1,
.theme-dark .body_cd82a7 .icon_fc4f04 {
    --white-500: black !important;
    --interactive-normal: black !important;
    --text-normal: black !important;
    --text-muted: black !important;
    --header-primary: black !important;
    --header-secondary: black !important;
}

.theme-dark .contentRegionScroller_c25c6d :not(.mtk1,.mtk2,.mtk3,.mtk4,.mtk5,.mtk6,.mtk7,.mtk8,.mtk9,.monaco-editor .line-numbers) {
    --white-500: black !important;
}

.theme-dark .container_fc4f04 {
    --channel-icon: black;
}

.theme-dark .callContainer_d880dc {
    --white-500: ${(HexToHSL("#" + tertiaryColor)[2] > 80) ? "black" : "white"} !important;
}

.theme-dark .channelTextArea_a7d72e {
    --text-normal: ${(HexToHSL("#" + primaryColor)[2] + 3.6 > 80) ? "black" : "white"};
}

.theme-dark .placeholder_a552a6 {
    --channel-text-area-placeholder: ${(HexToHSL("#" + primaryColor)[2] + 3.6 > 80) ? "black" : "white"};
    opacity: .6;
}

.theme-dark .root_f9a4c9 > .header_f9a4c9 > h1 {
    color: black;
}
/*End Primary*/`: ""}${(HexToHSL("#" + secondaryColor)[2] > 80) ? `\n\n/*Secondary*/
.theme-dark .wrapper_cd82a7 *,
.theme-dark .sidebar_a4d4d9 *:not(.hasBanner_fd6364 *),
.theme-dark .members_cbd271 *:not([style]),
.theme-dark .sidebarRegionScroller_c25c6d *,
.theme-dark .header_e06857,
.theme-dark .lookFilled_dd4f85.colorPrimary_dd4f85 {
    --white-500: black !important;
    --channels-default: black !important;
    --channel-icon: black !important;
    --interactive-normal: var(--white-500);
    --interactive-hover: var(--white-500);
    --interactive-active: var(--white-500);
}

.theme-dark .channelRow_f04d06 {
    background-color: var(--background-secondary);
}

.theme-dark .channelRow_f04d06 * {
    --channel-icon: black;
}

.theme-dark #app-mount .activity_a31c43 {
    --channels-default: var(--white-500) !important;
}

.theme-dark .nameTag_b2ca13 {
    --header-primary: black !important;
    --header-secondary: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 90%)" : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")} !important;
}

.theme-dark .bannerVisible_fd6364 .headerContent_fd6364 {
    color: #fff;
}

.theme-dark .embedFull_b0068a {
    --text-normal: black;
}
/*End Secondary*/`: ""}${HexToHSL("#" + tertiaryColor)[2] > 80 ? `\n\n/*Tertiary*/
.theme-dark .winButton_a934d8,
.theme-dark .searchBar_e0840f *,
.theme-dark .wordmarkWindows_a934d8,
.theme-dark .searchBar_a46bef *,
.theme-dark .searchBarComponent_f0963d {
    --white-500: black !important;
}

.theme-dark [style="background-color: var(--background-secondary);"] {
    color: ${HexToHSL("#" + secondaryColor)[2] > 80 ? "black" : "white"};
}

.theme-dark .popout_c5b389 > * {
    --interactive-normal: black !important;
    --header-secondary: black !important;
}

.theme-dark .tooltip_b6c360 {
    --text-normal: black !important;
}
.theme-dark .children_fc4f04 .icon_fc4f04 {
    color: var(--interactive-active) !important;
}
/*End Tertiary*/`: ""}${HexToHSL("#" + accentColor)[2] > 80 ? `\n\n/*Accent*/
.selected_db6521 *,
.selected_ae80f7 *,
#app-mount .lookFilled_dd4f85.colorBrand_dd4f85:not(.buttonColor_adcaac),
.colorDefault_d90b3d.focused_d90b3d,
.row_c5b389:hover,
.checkmarkCircle_cb7c27 > circle {
    --white-500: black !important;
}

.dc-app-launcher:hover .vc-pallete-icon {
    color: #000 !important;
}

:root:root {
    --mention-foreground: black !important;
}
/*End Accent*/`: ""}`;
}

export function getAutoPresets(accentColor?: string) {
    return {
        hueRotation: {
            name: "Hue Rotation",
            id: "hueRotation",
            colors: {
                accent: "#" + accentColor,
                primary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 11% 21%)`),
                secondary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 11% 18%)`),
                tertiary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 10% 13%)`)
            }
        },
        accentSwap: {
            name: "Accent Swap",
            id: "accentSwap",
            colors: {
                accent: "#" + accentColor,
                primary: "#313338",
                secondary: "#2b2d31",
                tertiary: "#1e1f22"
            }
        },
        AMOLED: {
            name: "AMOLED",
            id: "AMOLED",
            colors: {
                accent: "#" + accentColor,
                primary: "#000000",
                secondary: "#000000",
                tertiary: "#000000"
            }
        },
        materialYou: {
            name: "Material You",
            id: "materialYou",
            colors: {
                accent: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 100% 23%)`),
                primary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 12% 12%)`),
                secondary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 12% 16%)`),
                tertiary: "#" + colorToHex(`hsl(${HexToHSL("#" + accentColor)[0]} 16% 18%)`)
            }
        }
    } as { [key: string]: { name: string, id: string, colors: { accent: string, primary: string, secondary: string, tertiary: string; }; }; };
}

export function getPreset(gen: (colors: any, accentColor: any, primaryColor: any, secondaryColor: any, tertiaryColor: any) => string) {
    return (colors: { accent?: string, primary?: string, secondary?: string, tertiary?: string; }) => {
        colors.primary ??= "#313338";
        colors.secondary ??= "#2b2d31";
        colors.tertiary ??= "#1e1f22";
        colors.accent ??= "#ffffff";

        const primaryColor = colors.primary.replace("#", "");
        const secondaryColor = colors.secondary.replace("#", "");
        const tertiaryColor = colors.tertiary.replace("#", "");
        const accentColor = colors.accent.replace("#", "");

        return gen(colors, accentColor, primaryColor, secondaryColor, tertiaryColor);
    };
}

export const presets = {
    discord: {
        name: "Discord",
        preset: getPreset(colors => generateCss(
            colors,
            true,
            false,
            undefined
        )),
        id: "discord",
        author: "DaBluLite",
        colors: ["accent", "primary", "secondary", "tertiary"]
    },
    cyan: {
        name: "Cyan",
        preset: getPreset((_, accentColor, primaryColor, __, tertiaryColor) => `:root:root {
--cyan-accent-color: #${accentColor};
--cyan-background-primary: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%/60%);
--cyan-second-layer: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + (3.6 * 2), 100)}%/60%);
}`),
        id: "cyan",
        author: "DaBluLite",
        colors: ["accent", "primary", "secondary"]
    },
    nexusRemastered: {
        name: "Nexus Remastered",
        preset: getPreset((_, accentColor, primaryColor, secondaryColor, tertiaryColor) => `:root:root {
--nexus-accent-color: #${accentColor};
--nexus-background-secondary: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%);
--nexus-background-elevated: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%);
--nexus-background-floating: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%);
--nexus-background-tertiary: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%);
--home-background: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%);
--nexus-background-primary: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%);
--primary-800-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%;
--primary-730-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - 3.6, 0)}%;
--primary-700-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%;
--primary-660-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 3.6, 0)}%;
--primary-645-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 1.1, 0)}%;
--primary-630-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2]}%;
--primary-600-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%;
--primary-560-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 3.6, 100)}%;
--primary-530-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 2), 100)}%;
--primary-500-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 3), 100)}%;
--primary-200: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%), 90%)` : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")}
}
.theme-dark {
--background-tertiary: var(--primary-700) !important;
}
.theme-light {
--background-tertiary: var(--primary-200) !important;
}`),
        id: "nexusRemastered",
        author: "DaBluLite",
        colors: ["accent", "primary", "secondary", "tertiary"]
    },
    virtualBoy: {
        name: "Virtual Boy",
        preset: getPreset((_, accentColor, __, ___, tertiaryColor) => `:root:root {
--VBaccent: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
--VBaccent-muted: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(((HexToHSL("#" + tertiaryColor)[2]) - 10), 0)}%;
--VBaccent-dimmest: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min((HexToHSL("#" + tertiaryColor)[2] + (3.6 * 5) - 3), 100)}%;
}`),
        id: "virtualBoy",
        author: "DaBluLite",
        colors: ["accent", "tertiary"]
    },
    modular: {
        name: "Modular",
        preset: getPreset((_, accentColor, primaryColor, secondaryColor, tertiaryColor) => `:root:root {
--brand-500: #${accentColor};
--primary-800-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - (3.6 * 2), 0)}%;
--primary-730-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(HexToHSL("#" + tertiaryColor)[2] - 3.6, 0)}%;
--primary-700-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%;
--primary-660-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 3.6, 0)}%;
--primary-645-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.max(HexToHSL("#" + secondaryColor)[2] - 1.1, 0)}%;
--primary-630-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2]}%;
--primary-600-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%;
--primary-560-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 3.6, 100)}%;
--primary-530-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 2), 100)}% !important;
--primary-500-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 3), 100)}% !important;
--primary-330: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%), 90%)` : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")};
--primary-360: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%), 90%)` : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")};
--primary-400: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + `, calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%), 90%)` : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")}
}`),
        id: "modular",
        author: "DaBluLite",
        colors: ["accent", "primary", "secondary", "tertiary"]
    },
    solana: {
        name: "Solana",
        preset: getPreset((_, accentColor, primaryColor) => `:root:root {
--accent-hue: ${HexToHSL("#" + accentColor)[0]};
--accent-saturation: calc(var(--saturation-factor, 1)${HexToHSL("#" + accentColor)[1]}%);
--accent-brightness: ${HexToHSL("#" + accentColor)[2]}%;
--background-accent-hue: ${HexToHSL("#" + primaryColor)[0]};
--background-accent-saturation: calc(var(--saturation-factor, 1)${HexToHSL("#" + primaryColor)[1]}%);
--background-accent-brightness: ${HexToHSL("#" + primaryColor)[2]}%;
--background-overlay-opacity: 0%;
}`),
        id: "solana",
        author: "DaBluLite",
        colors: ["accent", "primary"]
    },
    neobrutal: {
        name: "Neobrutal",
        preset: getPreset((_, accentColor, primaryColor) => `.theme-light {
--neobrutal-color-1: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%) !important;
--neobrutal-color-2: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 80, 90)}%) !important;
--neobrutal-color-text: hsl(${HexToHSL("#" + accentColor)[0]} ${HexToHSL("#" + accentColor)[1]} ${HexToHSL("#" + accentColor)[2] - 10}) !important;
--neobrutal-color-accent: #${accentColor} !important;
}

.theme-dark {
--neobrutal-color-1: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 80, 90)}%) !important;
--neobrutal-color-2: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%) !important;
--neobrutal-color-text: hsl(${HexToHSL("#" + accentColor)[0]} ${HexToHSL("#" + accentColor)[1]}% ${HexToHSL("#" + accentColor)[2] + 10}%) !important;
--neobrutal-color-accent: #${accentColor} !important;
}`),
        id: "neobrutal",
        author: "DaBluLite",
        colors: ["accent", "primary"]
    }
};

export type PresetKey = keyof typeof presets;