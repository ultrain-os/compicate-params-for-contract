import { jsonKey, intArrayToString, jsonValue } from "./utils";
import { intToString } from "ultrain-ts-lib/src/utils";

/*
{
    "units":[
        {
            "unitId":18,
            "level":3
        },
        {
            "unitId":13,
            "level":3
        },
        {
            "unitId":18,
            "level":3
        }
    ],
    "dropItems":[
        {
            "itemId":1,
            "chance":0.4
        }
    ],
    "dropToken":{
        "low":22,
        "high":24
    }
}
*/

export class Units implements Serializable {
    unitId: u8;
    level: u8;

    constructor() {
        this.unitId = 0;
        this.level = 0;
    }

    toString(): string {
        let json = "{";
        json += jsonKey("unitId") + jsonValue(this.unitId) + ",";
        json += jsonKey("level") + jsonValue(this.level) ;
        json += "}";
        return json;

    }
}

export class DropItems implements Serializable {
    itemId: u8;
    chance: u8;

    constructor() {
        this.itemId = 0;
        this.chance = 0;
    }
}

export class DropToken implements Serializable {
    low: u8;
    high: u8;

    constructor() {
        this.low = 0;
        this.high = 0;
    }
}

export class ComplicateParams implements Serializable {
    units: Units[];
    dropItems: DropItems[];
    dropToken: DropToken;

    constructor() {
        this.units = new Array<Units>();
        this.dropItems = new Array<DropItems>();
        this.dropToken = new DropToken();
    }

    say(): string {
        let v = "units.length = " + intToString(this.units.length);
        v += "; dropItems.length = " + intToString(this.dropItems.length);
        v += "; dropToken.high = " + intToString(this.dropToken.high);
        return v;
    }
}

export class SimpleParams implements Serializable {
    x: u8;
    y: u8;
    z: u8;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    say(): string {
        let json = "{";
        json += jsonKey("x") + jsonValue(this.x) + ",";
        json += jsonKey("y") + jsonValue(this.y) + ",";
        json += jsonKey("z") + jsonValue(this.z);
        json += "}";
        return json;
    }
}
