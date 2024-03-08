import service from "../fetch";

export const getMerchantDetail = () => {
  return service({method: "get", url: "/api/landing-page"});
};