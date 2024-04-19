export const getLocalAccessToken: string | null = JSON.parse(localStorage.getItem("tokenAccess") || '""');
export const getLocalRefreshToken: string | null = JSON.parse(localStorage.getItem("tokenRefresh") || '""');
export const getLocalUser: string | null = JSON.parse(localStorage.getItem("user") || '""');