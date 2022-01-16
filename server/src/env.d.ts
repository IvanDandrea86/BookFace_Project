
declare namespace NodeJS{
    export interface ProcessEnv{
        ATLAS_CONNETCION:string;
        PORT: string;
        SECRET:string ;
        REDIS_URL:string| undefined;
        ALLOWED_ORIGIN:string;
        
    }
}

