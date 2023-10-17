function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function kebabCaseToUpperCamelCase(str: string) {
  return upperFirst(str.replace(/-(\w)/g, function (_, c) { return (c ? c.toUpperCase() : ''); }));
}
