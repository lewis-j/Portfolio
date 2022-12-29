export const appendStyles = (...styles) => [...styles].join(" ");
export const isEven = (num) => num % 2 === 0;
export const imageWithTheme = (images, isDark) =>
  images.map((image) => {
    return { img: image, isDark: isDark.includes(image) };
  });

export const convertMarkDownToJsxLinks = (text) => {
  if (!text) return;
  let remaining = text;
  const regex = /\[([^\[\]]*)\]\(([^\(\)]*)\)/;
  let matched = remaining.match(regex);
  let buildString = [];
  let index = 0;
  while (matched) {
    buildString.push(remaining.slice(0, matched.index));
    buildString.push(<a href={matched[2]}>{matched[1]}</a>);
    index = matched.index + matched[0].length;
    remaining = remaining.slice(index);
    matched = remaining.match(regex);
  }
  buildString.push(remaining);
  return buildString;
};
