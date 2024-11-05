const Data = async() => {
  const response = await fetch('./data.json');
  const res = await response.json();
  return res;
}

export {Data}