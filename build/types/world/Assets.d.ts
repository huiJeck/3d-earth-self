/**
 * 资源文件
 * 把模型和图片分开进行加载
 */
interface ITextures {
    name: string;
    url: string;
}
export interface IResources {
    textures?: ITextures[];
}
declare const resources: IResources;
export { resources };
