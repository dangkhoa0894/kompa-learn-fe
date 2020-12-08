import { InMemoryCache, defaultDataIdFromObject } from "@apollo/client";
import { _TYPENAME } from "SRC/resource/string";

export const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    switch (responseObject.__typename) {
      case _TYPENAME.RES_MODEL:
      case _TYPENAME.RES_SCORE:
        return `${responseObject.__typename}:${responseObject.id}`;
      default:
        return defaultDataIdFromObject(responseObject);
    }
  },
  typePolicies: {
    Query: {
      fields: {
        viewDetailModel() {
          // eslint-disable-next-line no-use-before-define
          return viewDetailModel();
        },
        contentModifyModel() {
          // eslint-disable-next-line no-use-before-define
          return contentModifyModel();
        },
        filterDataModel() {
          // eslint-disable-next-line no-use-before-define
          return filterDataModel();
        },
      },
    },
  },
});
export const viewDetailModel = cache.makeVar({
  id: 0,
});
export const contentModifyModel = cache.makeVar({
  data: {},
  contentActive: {},
});

export const contentSetupModel = cache.makeVar({});

export const tableModel = cache.makeVar({});

export const filterDataModel = cache.makeVar({
  data: {},
});
