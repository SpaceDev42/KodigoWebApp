const handleChange = (e, data, setData) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};

const isAuth = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  let isAuth = false;
  if (data) {
    isAuth = true;
  }
  return isAuth;
};

export { handleChange, isAuth };
