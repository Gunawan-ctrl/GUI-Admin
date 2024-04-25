const createToken = () => {
  const dataUser = JSON.parse(localStorage?.getItem("dataUser"));

  if (!dataUser || !dataUser.token) {
    return null;
  }

  return {
    headers: {
      Authorization: `Bearer ${dataUser.token}`,
    },
  };
};

export default createToken;
