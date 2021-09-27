import {
    URL,
    URLSearchParams,
} from 'react-native-url-polyfill';

export function getAccessTokenFromURL(url: string) {
    const newParsedUrl = new URL(
        'https://test?' +
            url.substring(url.indexOf('#') + 1),
    );
    let searchParams = new URLSearchParams(
        newParsedUrl.search,
    );
    return searchParams.get('access_token');
}

export function getAccessTokenFromResponse(
    response: string,
) {
    try {
        return getAccessTokenFromURL(
            JSON.parse(response).url,
        );
    } catch (error) {
        return 'not available';
    }
}
