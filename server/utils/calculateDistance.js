export const calculateDistance = (x1, y1, x2, y2) => {
  try {
    return Math.hypot(x2 - x1, y2 - y1);
  } catch (error) {
    console.log(error);
  }
};

export const calculateThreePointDistance = (x1, y1, x2, y2, x3, y3) => {
  try {
    const D1 = Math.hypot(x2 - x1, y2 - y1);
    const D2 = Math.hypot(x3 - x1, y3 - y1);
    const D3 = Math.hypot(x3 - x2, y3 - y2);

    const D = (D1 + D2 + D3) / 3;

    return D;
  } catch (error) {
    console.log(error);
  }
};
