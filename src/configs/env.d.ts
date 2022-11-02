// declare namespace NodeJS {
//   export interface ProcessEnv {
//     PORT: string;
//     DB_URL: string;
//     JWT_SECRETKEY: string;
//     JWT_EXPIREIN: string;
//     KAKAO_ID: string;
//   }
// }

// // 해결 방법 1
// const googleKey: string = process.env.NEXT_PUBLIC_GOOGLE_KEY ?? '';

// // 해결 방법 2
// const googleKey: string = process.env.NEXT_PUBLIC_GOOGLE_KEY || '';

// // 해결 방법 3
// const googleKey: string = process.env.NEXT_PUBLIC_GOOGLE_KEY as string;

// // 해결 방법 4
// const googleKey: string = process.env.NEXT_PUBLIC_GOOGLE_KEY!;
