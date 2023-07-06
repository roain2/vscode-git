import service from "@/request/index";

// 登录接口
export const login = (data) => {
  return service({
    url: "/login",
    method: "POST",
    data,
  });
};