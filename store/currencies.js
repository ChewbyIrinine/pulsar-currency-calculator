export const state = () => ({
  currencies: {},
});

export const getters = {};

export const mutations = {
  SET_CURRENCIES(state, currencies) {
    state.currencies = currencies;
  },
};

export const actions = {
  async GET_CURRENCIES({ commit }) {
    try {
      const data = await this.$axios.get(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      commit("SET_CURRENCIES", data.data.Valute);
    } catch (error) {
      console.log(error);
    }
  },
};
