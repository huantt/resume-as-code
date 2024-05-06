export function getTimestampAtNextSeconds(seconds: number): number {
    return new Date().getTime() + seconds * 1000
}