import { NomadList } from "./NomadList.types";


export function GetLocation(): Promise<NomadList|null> {
    return fetch(`https://nomadlist.com/@${process.env.NOMADLIST_USERNAME}.json?key=${process.env.NOMADLIST_KEY}`)
        .then((res) => res.json())
        .then((data) => data as NomadList)
        .catch((err) => {
            console.log(err);
            return null;
        });
}