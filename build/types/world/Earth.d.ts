import { BufferGeometry, Color, Group, Mesh, MeshBasicMaterial, Object3D, Points, PointsMaterial, ShaderMaterial, SphereBufferGeometry, Texture } from "three";
export declare type punctuation = {
    circleColor: number;
    lightColumn: {
        startColor: number;
        endColor: number;
    };
};
declare type options = {
    data: {
        startArray: {
            name: string;
            E: number;
            N: number;
        };
        endArray: {
            name: string;
            E: number;
            N: number;
        }[];
    }[];
    dom: HTMLElement;
    textures: Record<string, Texture>;
    earth: {
        radius: number;
        rotateSpeed: number;
        isRotation: boolean;
    };
    satellite: {
        show: boolean;
        rotateSpeed: number;
        size: number;
        number: number;
    };
    punctuation: punctuation;
    flyLine: {
        color: number;
        speed: number;
        flyLineColor: number;
    };
};
declare type uniforms = {
    glowColor: {
        value: Color;
    };
    scale: {
        type: string;
        value: number;
    };
    bias: {
        type: string;
        value: number;
    };
    power: {
        type: string;
        value: number;
    };
    time: {
        type: string;
        value: any;
    };
    isHover: {
        value: boolean;
    };
    map: {
        value: Texture;
    };
};
export default class earth {
    group: Group;
    earthGroup: Group;
    around: BufferGeometry;
    aroundPoints: Points<BufferGeometry, PointsMaterial>;
    options: options;
    uniforms: uniforms;
    timeValue: number;
    earth: Mesh<SphereBufferGeometry, ShaderMaterial>;
    punctuationMaterial: MeshBasicMaterial;
    markupPoint: Group;
    waveMeshArr: Object3D[];
    circleLineList: any[];
    circleList: any[];
    x: number;
    n: number;
    isRotation: boolean;
    flyLineArcGroup: Group;
    constructor(options: options);
    init(): Promise<void>;
    createEarth(): void;
    createStars(): void;
    createEarthGlow(): void;
    createEarthAperture(): void;
    createMarkupPoint(): Promise<void>;
    createSpriteLabel(): Promise<void>;
    createAnimateCircle(): void;
    createFlyLine(): void;
    show(): void;
    render(): void;
}
export {};
