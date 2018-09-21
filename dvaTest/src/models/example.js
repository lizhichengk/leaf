
export default {

  namespace: 'count',

  state: {
    record:0,
    current:0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *delay({ payload}, {call, put }){
      function delay(time) {
          return new Promise((resolve) => {
            setTimeout(function () {
              resolve()
            }, time);
          }).then(function () {
            return 2
           });
      }
      const aa = yield call(delay,2000);
      console.log(aa)
      yield  put({type:"add"})
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state){
      const newCurrent = state.current + 1 ;
      return {
        ...state,
        record: newCurrent>state.record?newCurrent:state.record,
        current: newCurrent
      }
    },
    minus(state){
      const newCurrent = state.current - 1 ;
      return {
        ...state,
        record: newCurrent>state.record?newCurrent:state.record,
        current: newCurrent
      }
    }
  },

};
