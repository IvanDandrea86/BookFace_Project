
declare namespace NodeJS{
    export interface ProcessEnv{
        ATLAS_CONNETCION:string;
        PORT: string;
        PASS:string;
        REDIS_SECRET:string;
        REDIS_PORT:number | undefined;
        REDIS_HOST:string| undefined;
        
    }
}

