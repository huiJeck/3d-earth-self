/**
 * 资源管理和加载
 */
import { Texture } from 'three';
export declare class Resources {
    private manager;
    private callback;
    private textureLoader;
    textures: Record<string, Texture>;
    constructor(callback: () => void);
    /**
     * 管理加载状态
     */
    private setLoadingManager;
    /**
     * 加载资源
     */
    private loadResources;
}
