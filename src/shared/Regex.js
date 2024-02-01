const Regex = (text) => {
    var regex = /(<([^>]+)>)/gi;
    const regText = text?.replace(regex, " ");
    return regText?.slice(0, 200);
  };
  export default Regex;