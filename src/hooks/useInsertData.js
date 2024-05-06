import baseUrl from "../Api/baseURL";
// لو ببعت داتا عادية من غير صور او فيديوهات
const useInsertData = async (url, parmas) => {
  console.log(parmas);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};
const useInsertDataWithImage = async (url, parmas) => {
  //ده عشان هي صور فهي محفوظة بنبعتها مع الurl
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};
export { useInsertData, useInsertDataWithImage };
