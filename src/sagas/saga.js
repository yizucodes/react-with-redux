import { takeLatest, put, delay } from "@redux-saga/core/effects";


function* ageUpAsync() {

    // delay is like setTimeout
    yield delay(4000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 });

}

export function* watchAgeUp() {
    
    // Observe action dispatched with specific pattern - i.e. AGE_UP
    yield takeLatest('AGE_UP', ageUpAsync);
}