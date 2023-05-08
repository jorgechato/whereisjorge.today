import { NomadList, Location } from "./NomadList.types";


function nomadLocationToLocation(nomadLocation: any): Location {
    const city = nomadLocation.place ?? nomadLocation.city;
    const citySlug = nomadLocation.place_slug ?? nomadLocation.city_slug;

    return {
        city: city,
        citySlug: citySlug,
        country: nomadLocation.country,
        countrySlug: nomadLocation.country_slug,
        countryCode: nomadLocation.country_code,
        thumbnail: nomadLocation.place_photo?.replace("width=100,height=100", "width=250,height=320")||"",
        latitude: nomadLocation.latitude,
        longitude: nomadLocation.longitude,
        dateStart: nomadLocation.date_start,
        dateEnd: nomadLocation.date_end,
        length: nomadLocation.length,
    } as Location;
}

export function GetLocation(): Promise<NomadList | null> {
    return fetch(`https://nomadlist.com/@${process.env.NOMADLIST_USERNAME}.json?key=${process.env.NOMADLIST_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            const trips: Location[] = Array.isArray(data.trips) ?
                data.trips
                    .filter((trip: any) => new Date(trip.date_start) > new Date())
                    .map((trip: any) => nomadLocationToLocation(trip))
                    .sort((a: Location, b: Location) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime()) :
                [data.trips];

            return {
                location: {
                    now: nomadLocationToLocation(data.location.now) || [],
                    next: nomadLocationToLocation(data.location.next) || [],
                },
                trips: trips,
            } as NomadList;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}