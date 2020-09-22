import { UploadService } from './UploaderService';
import { Image } from '@/domain/Image';
import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export class UploadServiceImpl implements UploadService {
    async uploadFile(file: File): Promise<Image> {
        const { data } = await axios.post<Image>('/uploads')
        return data;
    }
}