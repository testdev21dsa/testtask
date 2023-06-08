import { ImageSizes } from './ImageSizes';

export class ImageHelper {
  static getOptimizedSize(x: number, y: number, minImageWidth: number): ImageSizes {
    const maxDivider = x / minImageWidth;
    if (maxDivider <= 1) {
      return new ImageSizes(x, y);
    }
    return new ImageSizes(Math.ceil(x / maxDivider), Math.ceil(y / maxDivider))
  }
}
