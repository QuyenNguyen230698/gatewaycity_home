import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: null,
  }),
  actions: {
    async fetchToken() {
      const config = useRuntimeConfig().public;
      if (config.env.trim().toLowerCase() === "prod") {
        this.loadTokenFromCookies();
        if (!this.token) {
          // Kiểm tra nếu chưa có token
          try {
            const config = useRuntimeConfig().public;

            const response = await $fetch(`${config.apiBase}/token/create`, {
              method: "POST",
              body: {
                payload: {
                  /* payload data */
                },
                expiresIn: "1h",
              },
            });
            this.token = response.token;
            Cookies.set("token", this.token, { expires: 1 / 24 }); // Lưu token vào cookie, hết hạn sau 1 giờ
          } catch (error) {
            console.error("Error fetching token:", error);
          }
        }
      }
    },
    async refreshToken() {
      const config = useRuntimeConfig().public;
      if (config.env.trim().toLowerCase() === "prod") {
        try {
          const config = useRuntimeConfig().public;

          const response = await $fetch(`${config.apiBase}/token/refresh`, {
            method: "POST",
            body: {
              token: this.token,
            },
          });
          this.token = response.token;
          Cookies.set("token", this.token, { expires: 1 / 24 }); // Cập nhật token mới vào cookie
        } catch (error) {
          console.error("Error refreshing token:", error);
        }
      }
      Ï;
    },
    loadTokenFromCookies() {
      this.token = Cookies.get("token");
    },
  },
});
