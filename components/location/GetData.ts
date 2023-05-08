import { NomadList } from "@/lib/nomadlist/NomadList.types";


 export function GetLocation(): Promise<NomadList | null> {
     return fetch("/api/location")
     .then((res) => res.json() as Promise<NomadList>);
 }