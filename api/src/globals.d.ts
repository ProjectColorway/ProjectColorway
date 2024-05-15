declare global {
    interface Colorway {
        [key: string]: any,
        name: string,
        "dc-import": string,
        accent: string,
        primary: string,
        secondary: string,
        tertiary: string,
        original?: boolean,
        author: string,
        authorID: string,
        colors?: string[],
        isGradient?: boolean,
        sourceUrl?: string,
        sourceName?: string,
        linearGradient?: string;
    }
    
    interface ColorPickerProps {
        color: number;
        showEyeDropper: boolean;
        suggestedColors: string[];
        label: any;
        onChange(color: number): void;
    }
    
    interface ColorwayObject {
        id: string | null,
        css: string | null,
        sourceType: "online" | "offline" | "temporary" | null,
        source: string | null 
    }

    interface OfflineSource {
        name: string,
        colorways: Colorway[]
    }
}

export {};