export interface Point {
    x: number;
    y: number;
}

export interface Category {
    name: string;
    score: number;
    colour: string;
}


export interface PolygonPoints {
    spike: Point;
    edgeL: Point;
    edgeR: Point;
    centre: Point;


}
export interface Polygon {
    points: PolygonPoints

    highlight: boolean;
    category: Category;
    path: {};
}

export interface StarCoord {
    spike: Point;
    edgeL: Point;
    edgeR: Point;
    category: Category;
}

export interface StarData {
    starCoords: StarCoord[];
    outerRatio: number;
    innerRatio: number;
    size: number;
    rotation: number;
    centre: Point;
    categories: Category[];
    catPolygons: Polygon[];
}

export interface BgStar {
    center: Point;
    outerRatio: number;
    innerRatio: number;
    size: number;
    numPoints: number;
}
