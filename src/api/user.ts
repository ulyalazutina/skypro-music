const SIGNUP_API = "https://skypro-music-api.skyeng.tech/user/signup/";
const SIGNIN_API = "https://skypro-music-api.skyeng.tech/user/login/";
const TOKEN_API = "https://skypro-music-api.skyeng.tech/user/token/";
const UPDATE_TOKEN_API = "https://skypro-music-api.skyeng.tech/user/token/refresh/";

type signupUserType = {
    email: string;
    password: string;
    username: string;
};

type signinUserType = {
    email: string;
    password: string;
};

export async function signupUser({ email, password, username }: signupUserType) {
    const res = await fetch(SIGNUP_API, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username,
        }),
        headers: {
            "content-type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }

    return res.json();
}

export async function signinUser({ email, password }: signinUserType) {
    const res = await fetch(SIGNIN_API, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "content-type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Ошибка");        
    }
    
    return res.json();
}

export async function getToken({ email, password }: signinUserType) {
    const res = await fetch(TOKEN_API, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "content-type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Ошибка");        
    }
    
    return res.json();
}
