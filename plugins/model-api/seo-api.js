export default (config, $moment, $filters, $_) => {
  /**
   *Author: AnhLD
   *Date: 2024-07-23
   * Function description
   *
   * @param {*} path
   * @param {*} [option={}]
   * @return {*}
   */
  const getDataSEOByPath = async (path, option = {}) => {
    const fetchOption = {
      ...option,
      method: "GET",
    };
    return await useFetch(
      `${config.apiBase}/seo/path/${path}`,
      fetchOption
    );
  };
  
  return {
    getDataSEOByPath,
  };
};
