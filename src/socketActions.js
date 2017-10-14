export default {
  chooseMem(id) {
    return JSON.stringify({
      type: "CHOOSE_MEM",
      id
    });
  }
};
