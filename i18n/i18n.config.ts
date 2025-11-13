import vi from './locales/vi-VN.json'
import en from './locales/en-US.json'
import ja from './locales/ja-JP.json'
import de from './locales/de-CH.json'
import fr from './locales/fr-CA.json'
import zh from './locales/zh-CN.json'

export default {
    fallbackLocale: 'en-US',
    legacy: false,
    messages: {
        'zh-CN': zh,
        'ja-JP': ja,
        'de-CH': de,
        'fr-CA': fr,
        'vi-VN': vi,
        'en-US': en
    }
}