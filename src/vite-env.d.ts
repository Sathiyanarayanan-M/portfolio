/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_FIREBASE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


// Children
interface Child {
    children: React.ReactNode;
}
