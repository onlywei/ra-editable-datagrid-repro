import fakeRestProvider from 'ra-data-fakerest';
import { DataProvider } from 'react-admin';
import data from './data';

const addDelay = (dataProvider: DataProvider, delay = 300) =>
    new Proxy(dataProvider, {
        get: (target, name) => (resource: string, params: any) => {
            if (typeof name === 'symbol' || name === 'then') {
                return;
            }
            return new Promise(resolve =>
                setTimeout(
                    () => resolve(dataProvider[name](resource, params)),
                    delay
                )
            );
        },
    });

const dataProvider = (delay = 500) => addDelay(fakeRestProvider(data, true), delay);

export default dataProvider;
