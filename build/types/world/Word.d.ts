import { MeshBasicMaterial, PerspectiveCamera, Scene, ShaderMaterial, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { IWord } from '../interfaces/IWord';
import { Basic } from './Basic';
import Sizes from '../Utils/Sizes';
import { Resources } from './Resources';
import Earth from './Earth';
export default class World {
    basic: Basic;
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    controls: OrbitControls;
    sizes: Sizes;
    material: ShaderMaterial | MeshBasicMaterial;
    resources: Resources;
    option: IWord;
    earth: Earth;
    constructor(option: IWord);
    createEarth(): Promise<void>;
    /**
     * 渲染函数
     */
    render(): void;
}
