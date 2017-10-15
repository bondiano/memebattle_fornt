

function prepareSocket(data) {
  data.user = {
  };
  return data
}


export default {
  chooseMem(id) {
    return JSON.stringify(prepareSocket({
      type: "CHOOSE_MEM",
      id
    }));
  }
};
