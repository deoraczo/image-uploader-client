import { Image } from '@/domain/Image';

export interface UploadService {
    uploadFile(payload: {}): Promise<Image>;
}