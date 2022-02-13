import { APP_BASE_HREF } from "@angular/common";
import { Injectable, Inject } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IFeatureEnablement } from "../interfaces";
import { ServiceHelpers } from "./service.helpers";

@Injectable({ providedIn: "root" })
export class FeatureService extends ServiceHelpers {
    constructor(http: HttpClient, @Inject(APP_BASE_HREF) href:string) {
        super(http, "/api/v2/Features/", href);
    }

    public getFeatures(): Observable<IFeatureEnablement[]> {
        return this.http.get<IFeatureEnablement[]>(this.url, {headers: this.headers});
    }
}
