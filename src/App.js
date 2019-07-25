import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {LocaleProvider} from "antd";
import en_US from 'antd/lib/locale-provider/zh_CN';
import MainLayout from './component/layout/index';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <LocaleProvider locale={en_US}>
            <MainLayout />
          </LocaleProvider>
        </Provider>
    );
  }
}

export default App;
