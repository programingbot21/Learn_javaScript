// console.log(import.meta.url)

function localStringsURL(locale) {
    return new URL(`l10n/${locale}.json`, import.meta.url);
}
console.log(localStringsURL('strorage'))