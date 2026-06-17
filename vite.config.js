import {resolve} from  'path';
import { defineConfig } from 'vite'; 

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                map: resolve(__dirname, 'map/index.html'),
                video: resolve(__dirname, 'cam_panda_online.html'),
                donate: resolve(__dirname, 'donate.html'),
                err: resolve(__dirname, 'err404.html'),
            }
        }
    }
})