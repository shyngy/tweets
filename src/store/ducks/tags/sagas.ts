import { put, takeEvery } from "@redux-saga/core/effects";
import { call } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsApi";

import { setTags, setTagsLoadingState, TagsActionType } from "./actionCreatores";
import { LoadingState } from "./contracts/state";


export function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));

  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
    
  }
  
};


export function* tagsSaga(){
  yield takeEvery(TagsActionType.FETCH_TAGS, fetchTagsRequest)
};