import { NomadList, Location } from "./NomadList.types";


function nomadLocationToLocation(nomadLocation: any): Location {
    return {
        city: nomadLocation.city,
        country: nomadLocation.country,
        countryCode: nomadLocation.country_code,
        thumbnail: nomadLocation.place_photo?.replace("fit=cover,width=100,height=100", "width=400,height=400"),
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
            const trips: Location | Location[] = Array.isArray(data.trips) ?
                data.trips
                    .filter((trip: any) => new Date(trip.date_start) > new Date())
                    .map((trip: any) => nomadLocationToLocation(trip)) :
                data.trips;

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