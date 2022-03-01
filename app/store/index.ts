import { ActionContext, ActionTree, MutationTree } from 'vuex';
import { Route } from 'vue-router';
import Vue from 'vue';
import { getContent } from '@/utils';

export interface State {
  perPage: number;
  pages: Page[];
  hops: Post[];
  route?: Route;
}

// Initial State
export const appState = {
  perPage: 4,
  pages: [],
  hops: [],
};

export const mutations: MutationTree<State> = {
  SET_PAGES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'pages', payload);
  },
  SET_HOPS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'hops', payload);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PAGES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_HOPS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, State> = {
  async GET_HOPS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/hops/', false, /\.json$/);
    const hops = await getContent({ context, prefix: 'hops' });
    commit('SET_HOPS', hops);
  },

  async GET_PAGES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/pages/', false, /\.json$/);
    const pages = await getContent({
      context,
      prefix: 'pages',
    });
    commit('SET_PAGES', pages);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([dispatch('GET_PAGES_LIST'), dispatch('GET_HOPS_LIST')]);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
