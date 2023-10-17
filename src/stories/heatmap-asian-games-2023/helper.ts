function interpolator(v1: number, v2: number, count: number) {
  const v = v2 - v1;
  const g = v / (count + 1);

  return new Array(count).fill(0).map((_, idx) => v1 + g * (idx + 1));
}

function interpolatorData(d1: any, d2: any, count = 120) {
  const interpolatorValues = d1.map((item: any, idx: number) => {
    return interpolator(item.v, d2[idx].v, count);
  });

  const data = [];
  for (let i = 0; i < count; i++) {
    const f = [];
    for (let j = 0; j < d1.length; j++) {
      const datum = { ...d1[j], v: interpolatorValues[j][i] };
      f.push(datum);
    }
    data.push(f);
  }

  return data;
}

export function getFrames(data: any) {
  return data.reduce((prev: any, curr: any, idx: number) => {
    const next = data[idx + 1];

    prev.push(curr);

    if (next) {
      const values = interpolatorData(curr, next);

      prev = prev.concat(values);
    }

    return prev;
  }, []);
}
