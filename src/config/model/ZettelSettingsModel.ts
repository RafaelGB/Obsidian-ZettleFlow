import { DEFAULT_OPTIONS, ZettelFlowOption } from "zettelkasten";

export interface ZettelFlowSettings {
    loggerEnabled: boolean,
    logLevel: string,
    baseDir: string,
    canvasFilePath: string,
    rootSection: Record<string, ZettelFlowOption>
}

export const DEFAULT_SETTINGS: Partial<ZettelFlowSettings> = {
    loggerEnabled: false,
    baseDir: "/",
    rootSection: DEFAULT_OPTIONS
}