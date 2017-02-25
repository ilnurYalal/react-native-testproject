import { AsyncStorage } from 'react-native';
import AppConfig from 'AppConfig';

class Storage {
  constructor(key) {
    this.key = key;
  }

  async setItem(key, value) {
    return AsyncStorage.setItem(`@${this.key}:${key}`, value);
  }

  async getItem(key) {
    return AsyncStorage.getItem(`@${this.key}:${key}`);
  }


  async removeItem(key) {
    return AsyncStorage.removeItem(`@${this.key}:${key}`);
  }

  async setJSON(key, value) {
    return this.setItem(key, JSON.stringify(value));
  }

  async getJSON(key) {
    const value = await this.getItem(key);
    return JSON.parse(value);
  }
}

export default new Storage(AppConfig.appName);
