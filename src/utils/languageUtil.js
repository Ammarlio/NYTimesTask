import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

class LanguageUtil {
    changeLanguage(langCode) {
        I18nManager.forceRTL(langCode == 'ar' ? true : false)
        RNRestart.Restart();
    }

    getString(stringKey) {
        return stringKey[this.getLang()]
    }
}

export default new LanguageUtil()