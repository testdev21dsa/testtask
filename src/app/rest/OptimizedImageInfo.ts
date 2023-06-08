import { IImageInfo } from './IImageInfo';
import { ImageHelper } from '../lego-ui/utils/ImageHelper';

export class OptimizedImageInfo implements IImageInfo {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;

  optimizedWidth: number;
  optimizedHeight: number;
  optimizedDownloadUrl: string;

  constructor(imageInfo: IImageInfo, minImageWidth: number) {
    this.author = imageInfo.author;
    this.download_url = imageInfo.download_url;
    this.height = imageInfo.height;
    this.id = imageInfo.id;
    this.url = imageInfo.url;
    this.width = imageInfo.width;
    const sizes = ImageHelper.getOptimizedSize(imageInfo.width, imageInfo.height, minImageWidth);
    this.optimizedWidth = sizes.width;
    this.optimizedHeight = sizes.height;
    this.optimizedDownloadUrl = `https://picsum.photos/id/${this.id}/${this.optimizedWidth}/${this.optimizedHeight}`
  }
}
