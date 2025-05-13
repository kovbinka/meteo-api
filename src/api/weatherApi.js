export const apiRequest = async (originUrl) => {
    try {
        const response = await fetch(originUrl);
        if (response.status !== 200) {
            throw new Error(
                `Oops.. There is some problems. Status: ${response.status}`
            );
        }
        return response.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};
