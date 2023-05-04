export type NomadList = {
    location: {
        now: Location | [],
        next: Location | [],
        previous: Location | [],
    },
    trips: Location[] | Location,
}

export type Location = {
    city: string,
    country: string,
    countr_code: string,
    thumbnail: string,
    latitude: number,
    longitude: number,
    date_start: string,
    date_end: string,
    length: string,
}