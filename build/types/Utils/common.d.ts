import { Group, Mesh, MeshBasicMaterial, PlaneBufferGeometry, Texture, TubeGeometry, Vector3 } from "three";
import { punctuation } from "../world/Earth";
/**
 * 经纬度坐标转球面坐标
 * @param {地球半径} R
 * @param {经度(角度值)} longitude
 * @param {维度(角度值)} latitude
 */
export declare const lon2xyz: (R: number, longitude: number, latitude: number) => Vector3;
export declare const createWaveMesh: (options: {
    radius;
    lon;
    lat;
    textures;
}) => Mesh<PlaneBufferGeometry, MeshBasicMaterial>;
export declare const createLightPillar: (options: {
    radius: number;
    lon: number;
    lat: number;
    index: number;
    textures: Record<string, Texture>;
    punctuation: punctuation;
}) => Group;
export declare const createPointMesh: (options: {
    radius: number;
    lon: number;
    lat: number;
    material: MeshBasicMaterial;
}) => Mesh<PlaneBufferGeometry, MeshBasicMaterial>;
export declare const getCirclePoints: (option: any) => any[];
/**
 * 创建动态的线
 */
export declare const createAnimateLine: (option: any) => Mesh<TubeGeometry, any>;
