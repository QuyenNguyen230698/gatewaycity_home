export default (config, $moment, $filters, $_) => {
    /**
     * Author: AnhLD
     * Date: 2024-08-19
     * Function description: Gửi dữ liệu form đăng ký brochure đến API
     *
     * @param {*} formData
     * @param {*} [option={}]
     * @return {*}
     */
    const submitBrochureForm = async (formData, option = {}) => {
      const fetchOption = {
        ...option,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      return await useFetch(
        `${config.apiBase}/brochure/form-brochure`,
        fetchOption
      );
    };
  
    return {
      submitBrochureForm,
    };
  };
  