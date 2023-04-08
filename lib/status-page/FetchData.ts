export enum StatusType {
    OK = "OK",
    DEGRADED = "DEGRADED",
    MINOR = "MINOR",
    MAJOR = "MAJOR",
    MAINTENANCE = "MAINTENANCE",
    UNKNOWN = "UNKNOWN",
}


export interface Status {
    name: string;
    type: StatusType;
    url: string;
    version?: string;
    description?: string;
    color?: string;
    watching?: string;
}