export type NomadList = {
    location: {
        now: Location,
        next: Location,
    },
    trips: Location[] | Location,
}

export type Location = {
    city: string,
    country: string,
    countryCode: string,
    thumbnail: string,
    latitude: number,
    longitude: number,
    dateStart: string,
    dateEnd: string,
    length: string,
}