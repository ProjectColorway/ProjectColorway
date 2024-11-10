export function checkClient(): string {
    if((window as any).BdApi) return "betterdiscord";
    if((window as any).Vencord) return "vencord";
    if((window as any).vendetta) return (window as any).bunny ? "bunny" : "vendetta";
    if(location.host === "discord.com") return "discord";
    return "any";
}