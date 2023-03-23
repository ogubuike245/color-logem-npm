export default class Logger {
    private static getColor(color: string) {
        switch (color) {
            case "red":
                return "\x1b[31m"; // red
            case "green":
                return "\x1b[32m"; // green
            case "yellow":
                return "\x1b[33m"; // yellow
            case "blue":
                return "\x1b[34m"; // blue
            case "magenta":
                return "\x1b[35m"; // magenta
            case "cyan":
                return "\x1b[36m"; // cyan
            default:
                return "\x1b[0m"; // reset
        }
    }

    private static format(args: any, color: string, bgColor: string, bold: boolean) {
        const timestamp = new Date().toLocaleString();
        const colorCode = this.getColor(color);
        const bgColorCode = this.getColor(bgColor);
        const boldCode = bold ? "\x1b[1m" : "";
        const resetCode = "\x1b[0m";

        const message = typeof args === "string" ? args : JSON.stringify(args);

        return `${colorCode}${bgColorCode}${boldCode}[${timestamp}] [${color.toUpperCase()}] ${message}${resetCode}`;
    }

    public static log(args: any) {
        console.log(this.format(args, "blue", "white", true));
    }

    public static info(args: any) {
        console.log(this.format(args, "blue", "white", false));
    }

    public static warning(args: any) {
        console.log(this.format(args, "yellow", "white", true));
    }

    public static error(args: any) {
        console.log(this.format(args, "red", "white", true));
    }
}