export const storeUserInfo = (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export const getUserInfo = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
}