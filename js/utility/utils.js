const url = "https://v2.api.noroff.dev/gamehub/";

const messageContainer = document.querySelector(".message-container");
const message = createMessage();

export async function getGameDetails(url = "https://v2.api.noroff.dev/gamehub/") {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const gameData = results.data;

        return gameData;
    }
    catch (error) {
        messageContainer.innerHTML = message;
    };

}
getGameDetails();

export function createMessage(type = "success", message = "No message") {
    const HTML = `<div class="message ${type}">${message}</div>`;
    return HTML;
};