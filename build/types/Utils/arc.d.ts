import { BufferGeometry, Line, LineBasicMaterial } from 'three';
/**输入地球上任意两点的经纬度坐标，通过函数flyArc可以绘制一个飞线圆弧轨迹
 * lon1,lat1:轨迹线起点经纬度坐标
 * lon2,lat2：轨迹线结束点经纬度坐标
 */
declare function flyArc(radius: any, lon1: any, lat1: any, lon2: any, lat2: any, options: any): Line<BufferGeometry, LineBasicMaterial>;
/**通过函数arcXOY()可以在XOY平面上绘制一个关于y轴对称的圆弧曲线
 * startPoint, endPoint：表示圆弧曲线的起点和结束点坐标值，起点和结束点关于y轴对称
 * 同时在圆弧轨迹的基础上绘制一段飞线*/
declare function arcXOY(radius: any, startPoint: any, endPoint: any, options: any): Line<BufferGeometry, LineBasicMaterial>;
export { arcXOY, flyArc };
