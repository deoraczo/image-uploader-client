import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';
import { UploadService } from '@/services/UploaderService';
import { TYPES } from './types';
import { UploadServiceImpl } from '@/services/UploadServiceImpl';

const container = new Container();

container.bind<UploadService>(TYPES.UPLOAD_SERVICE).to(UploadServiceImpl);

export const { lazyInject } = getDecorators(container);