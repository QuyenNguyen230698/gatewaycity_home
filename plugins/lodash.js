import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import set from 'lodash/set';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            _: {
                cloneDeep,
                debounce,
                isEqual,
                get, // Thêm hàm get
                set  // Thêm hàm set
            }
        }
    };
});