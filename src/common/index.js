const backendDomin = "http://localhost:8080";

const summaryApi = {
  signUp: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  alluser: {
    url: `${backendDomin}/api/all-users`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadPackage: {
    url: `${backendDomin}/api/upload-package`,
    method: "post",
  },
  allPackage: {
    url: `${backendDomin}/api/get-package`,
    method: "get",
  },
  update_package: {
    url: `${backendDomin}/api/update-package`,
    method: "post",
  },
  category_package: {
    url: `${backendDomin}/api/get-category`,
    method: "get",
  },
  category_wise_package: {
    url: `${backendDomin}/api/category-wise-package`,
    method: "post",
  },
  package_details: {
    url: `${backendDomin}/api/package-details`,
    method: "post",
  },
  search_package: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  delete_package: {
    url: `${backendDomin}/api/delete-package`,
    method: "post",
  },
};

export default summaryApi;
