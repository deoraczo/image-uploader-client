import { Image } from '@/domain/Image';

export interface UploadService {
    uploadFile(file: File): Promise<Image>;
}